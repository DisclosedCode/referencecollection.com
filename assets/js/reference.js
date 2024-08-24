async function fetchHTML(url) {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch HTML');
    return response.text();
}

async function fetchAndHighlightCode(url, codeBlock) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch file');
        const code = await response.text();
        codeBlock.textContent = code;
        hljs.highlightAll();
    } catch (error) {
        codeBlock.textContent = 'Error fetching file';
    }
}

function setSocialLinks(title, text, url) {
    const socialLinks = {
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title + ' ' + text)}&url=${encodeURIComponent(url)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(title + ' ' + text)}&u=${encodeURIComponent(url)}`,
        reddit: `https://www.reddit.com/submit?title=${encodeURIComponent(title + ' ' + text)}&u=${encodeURIComponent(url)}`,
        linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title + ' ' + text)}`,
        ycombinator: `https://news.ycombinator.com/submitlink?t=${encodeURIComponent(title + ' ' + text)}&u=${encodeURIComponent(url)}`
    };

    document.getElementById('twitter_share').href = socialLinks.twitter;
    document.getElementById('facebook_share').href = socialLinks.facebook;
    document.getElementById('reddit_share').href = socialLinks.reddit;
    document.getElementById('linkedin_share').href = socialLinks.linkedin;
    document.getElementById('y_share').href = socialLinks.ycombinator;
}

function setupDownloadLink(downloadLink, filename) {
    downloadLink.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = `../references/${filename}`;
        link.download = filename;
        link.click();
    });
}

function setupCopyLink(copyLink, url) {
    copyLink.addEventListener('click', () => {
        navigator.clipboard.writeText(url);
    });
}

async function initialize() {
    try {
        const url = window.location.href;
        const filename = url.match(/\/([^\/]+)\.html$/)[1];

        // Fetch and set HTML content
        const html = await fetchHTML('/website/buttons.html');
        const headerButtons = document.getElementById('header_buttons');
        headerButtons.innerHTML = html;

        // Set social sharing links
        const title = headerButtons.dataset.title;
        const text = "Reference Codebook: \n";
        setSocialLinks(title, text, url);

        // Set up event listeners
        setupCopyLink(document.getElementById('copy_link'), url);
        setupDownloadLink(document.getElementById('download_link'), filename);

        // Highlight code block
        const codeBlock = document.getElementById('code_block');
        await fetchAndHighlightCode(`/references/${filename}`, codeBlock);

    } catch (error) {
        console.error('Error during initialization:', error);
    }
}

initialize();
