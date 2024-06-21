const search_input = document.querySelector('#search_input');

if (search_input != null)
    search_input.addEventListener('search', () => {
        document.querySelectorAll('.language_card').forEach(item => {
            item.style.display = 'block';
        });
    });

function instantSearch() {
    const searchTerm = search_input.value.toLowerCase();
    document.querySelectorAll('.language_card').forEach(item => {
        const title = item.querySelector('.language').innerText.toLowerCase();
        item.style.display = title.includes(searchTerm) ? 'block' : 'none';
    });
}
