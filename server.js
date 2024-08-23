const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const port = 3000;

async function getIndexHtml() {
    try {
        // Read the entire HTML file
        let htmlContent = await fs.readFile(path.join(__dirname, '../referencecollection.com/index.html'), 'utf8');

        // Identify template markers
        const startMarker = '<!-- start_loop -->';
        const endMarker = '<!-- end_loop -->';

        // Extract the template block between the markers
        const startIndex = htmlContent.indexOf(startMarker) + startMarker.length;
        const endIndex = htmlContent.indexOf(endMarker);

        if (startIndex === -1 || endIndex === -1) {
            throw new Error('Template markers not found');
        }

        const template = htmlContent.substring(startIndex, endIndex).trim();

        // Read JSON data
        const jsonData = await fs.readFile(path.join(__dirname, '../referencecollection.com/references.json'), 'utf8');
        const references = JSON.parse(jsonData);

        // Generate dynamic content by replacing placeholders with actual data
        let dynamicContent = '';
        references.forEach(reference => {
            let itemHtml = template
                .replace(/ref_title/g, reference.title)
                .replace(/ref_link/g, `references/${reference.filename}.html`);
            dynamicContent += itemHtml;
        });

        // Replace the original template block with the generated dynamic content
        htmlContent = htmlContent.slice(0, startIndex) + dynamicContent + htmlContent.slice(endIndex);

        return htmlContent;
    } catch (error) {
        console.error('Error reading or processing files:', error);
        return null;
    }
}

app.get('/', async (req, res) => {
    try {
        const htmlContent = await getIndexHtml();
        if (!htmlContent) {
            throw new Error('Failed to generate HTML');
        }

        res.send(htmlContent);
    } catch (error) {
        console.error('Error rendering dynamic page:', error);
        res.status(500).send('Error loading page');
    }
});

function replacePlaceholders(templateHtml, reference) {
    // A mapping of placeholders to their corresponding HTML tags
    const placeholders = {
        '<!-- meta_title -->': `<title>${reference.meta?.title || ''}</title>`,
        '<!-- meta_keywords -->': `<meta name="keywords" content="${reference.meta?.keywords || ''}"/>`,
        '<!-- meta_description -->': `<meta name="description" content="${reference.meta?.description || ''}"/>`,
        '<!-- meta_itemprop:title -->': `<meta itemprop="name" content="${reference.meta?.title || ''}"/>`,
        '<!-- meta_itemprop:description -->': `<meta itemprop="description" content="${reference.meta?.description || ''}"/>`,
        '<!-- meta_twitter:title -->': `<meta name="twitter:title" content="${reference.meta?.title || ''}"/>`,
        '<!-- meta_twitter:description -->': `<meta name="twitter:description" content="${reference.meta?.description || ''}"/>`,
        '<!-- meta_og:title -->': `<meta property="og:title" content="${reference.meta?.title || ''}"/>`,
        '<!-- meta_og:description -->': `<meta property="og:description" content="${reference.meta?.description || ''}"/>`
    };

    // Iterate over each placeholder and replace it in the template
    Object.keys(placeholders).forEach(key => {
        templateHtml = templateHtml.replace(new RegExp(key, 'g'), placeholders[key]);
    });

    return templateHtml;
}

async function getTemplateHtml(reference) {
    try {
        let templateHtml = await fs.readFile(path.join(__dirname, '../referencecollection.com/website/template.html'), 'utf8');

        // Replace placeholders with actual reference data
        templateHtml = replacePlaceholders(templateHtml, reference);

        return templateHtml;
    } catch (error) {
        console.error('Error reading template file:', error);
        return null;
    }
}

app.get('/references/:referenceParam', async (req, res) => {
    try {
        const referenceParam = req.params.referenceParam.replace('.html', '');

        // Read references.json
        const jsonData = await fs.readFile(path.join(__dirname, '../referencecollection.com/references.json'), 'utf8');
        const references = JSON.parse(jsonData);

        // Find the reference by filename (without .html)
        const reference = references.find(ref => ref.filename === referenceParam);

        if (!reference) {
            return res.status(404).send('Reference not found');
        }

        // Get the HTML content from the template
        const templateHtml = await getTemplateHtml(reference);
        if (!templateHtml) {
            throw new Error('Failed to generate HTML');
        }

        res.send(templateHtml);
    } catch (error) {
        console.error('Error rendering reference page:', error);
        res.status(500).send('Error loading reference page');
    }
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});