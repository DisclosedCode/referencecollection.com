const searchInput = document.querySelector('#search_input');

if (searchInput) {
    searchInput.addEventListener('search', () => {
        document.querySelectorAll('.language_card').forEach(item => {
            item.style.display = '';
        });
    });

    searchInput.addEventListener('input', instantSearch);
}

function instantSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll('.language_card');
    
    cards.forEach(item => {
        const title = item.querySelector('.language').textContent.toLowerCase();
        item.style.display = title.includes(searchTerm) ? '' : 'none';
    });
}