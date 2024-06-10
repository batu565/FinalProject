document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    const newsList = document.getElementById('news-list');

    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        if (query) {
            const newsItems = document.querySelectorAll('.news-list li');
            newsItems.forEach(item => {
                const title = item.querySelector('h3').textContent.toLowerCase();
                const content = item.querySelector('p').textContent.toLowerCase();
                if (title.includes(query) || content.includes(query)) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        } else {
            // If search query is empty, display all news items
            const newsItems = document.querySelectorAll('.news-list li');
            newsItems.forEach(item => {
                item.style.display = '';
            });
        }
    });
});
