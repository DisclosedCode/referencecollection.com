fetch('/website/buttons.html')
    .then(response => response.text())
    .then(html => {
        const header_buttons = document.getElementById('header_buttons');
        header_buttons.innerHTML = html;

        const
            text = "Reference Codebook: \n",
            url = window.location.href,
            language = header_buttons.dataset.value,
            extension = header_buttons.dataset.ext;

        const
            copy_link = document.getElementById("copy_link"),
            download_link = document.getElementById("download_link"),
            twitter_share = document.getElementById("twitter_share"),
            facebook_share = document.getElementById("facebook_share"),
            reddit_share = document.getElementById("reddit_share"),
            linkedin_share = document.getElementById("linkedin_share"),
            y_share = document.getElementById("y_share");

        twitter_share.href = "https://twitter.com/intent/tweet?text=" + language + " " + text + "&url=" + url;
        facebook_share.href = "https://www.facebook.com/sharer/sharer.php?quote=" + language + " " + text + "&u=" + url;
        y_share.href = "https://news.ycombinator.com/submitlink?t=" + language + " " + text + "&u=" + url;
        reddit_share.href = "https://www.reddit.com/submit?title=" + language + " " + text + "&u=" + url;
        linkedin_share.href = "https://www.linkedin.com/shareArticle?mini=true&url=" + url + "&title=" + language + " " + text;

        copy_link.addEventListener('click', () => {
            navigator.clipboard.writeText(url);
        });

        download_link.addEventListener('click', () => {
            let link = document.createElement('a');
            link.href = '../references/' + language + "_reference" + extension;
            link.download = language + "_reference" + extension;
            link.click();
        });
    }).finally(
    t => {
        const code_block = document.getElementById('code_block');
        const language = code_block.dataset.value;
        const extension = code_block.dataset.ext;
        console.log(language)
        console.log(extension)

        function HighlightCodeBlock(url) {
            fetch(url)
                .then(response => response.text())
                .then(data => {
                    code_block.textContent = data;
                    hljs.highlightAll();
                })
                .catch(error => {
                    code_block.textContent = 'Error fetching file';
                });
        }

        HighlightCodeBlock('/references/' + language + '_reference' + extension);
    }
);
