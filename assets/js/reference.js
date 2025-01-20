function setSocialLinks(url) {
    const socialLinks = {
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        reddit: `https://www.reddit.com/submit?url=${encodeURIComponent(url)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        ycombinator: `https://news.ycombinator.com/submitlink?u=${encodeURIComponent(url)}`
    };

    document.getElementById('twitter_share').href = socialLinks.twitter;
    document.getElementById('facebook_share').href = socialLinks.facebook;
    document.getElementById('reddit_share').href = socialLinks.reddit;
    document.getElementById('linkedin_share').href = socialLinks.linkedin;
    document.getElementById('y_share').href = socialLinks.ycombinator;
}

function setupCopyLink(copyLink, url) {
    copyLink.addEventListener('click', () => {
        navigator.clipboard.writeText(url);
    });
}

async function initialize() {
    try {
        const url = window.location.href;
        setSocialLinks(url);
        setupCopyLink(document.getElementById('copy_link'), url);
    } catch (error) {
        console.error('Error during initialization:', error);
    }
}

initialize();
