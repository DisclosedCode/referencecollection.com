fetch('/website/buttons.html')
    .then(response => response.text())
    .then(html => {
        const header_buttons = document.getElementById('header_buttons');
        header_buttons.innerHTML = html;

        const
            text = "Reference Codebook: \n",
            url = window.location.href,
            title = "Title";
        const filename = url.match(/\/([^\/]+)\.html$/);

        const
            copy_link = document.getElementById("copy_link"),
            download_link = document.getElementById("download_link"),
            twitter_share = document.getElementById("twitter_share"),
            facebook_share = document.getElementById("facebook_share"),
            reddit_share = document.getElementById("reddit_share"),
            linkedin_share = document.getElementById("linkedin_share"),
            y_share = document.getElementById("y_share");

        twitter_share.href = "https://twitter.com/intent/tweet?text=" + title + " " + text + "&url=" + url;
        facebook_share.href = "https://www.facebook.com/sharer/sharer.php?quote=" + title + " " + text + "&u=" + url;
        y_share.href = "https://news.ycombinator.com/submitlink?t=" + title + " " + text + "&u=" + url;
        reddit_share.href = "https://www.reddit.com/submit?title=" + title + " " + text + "&u=" + url;
        linkedin_share.href = "https://www.linkedin.com/shareArticle?mini=true&url=" + url + "&title=" + title + " " + text;

        copy_link.addEventListener('click', () => {
            navigator.clipboard.writeText(url);
        });

        download_link.addEventListener('click', () => {
            let link = document.createElement('a');
            link.href = '../references/' + filename;
            link.download = filename;
            link.click();
        });
    }).finally(
    t => {
        const code_block = document.getElementById('code_block');
        const filename = window.location.href.match(/\/([^\/]+)\.html$/);

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

        HighlightCodeBlock('/references/' + filename);
    }
);
