// portfolio gallery filtering
const filterContainer = document.querySelector('.portfolio-filter');
const portfolioCard = document.querySelectorAll('.portfolio-card');

filterContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-item')) {

        filterContainer.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');

        const filterValue = e.target.getAttribute('data-filter');

        portfolioCard.forEach((item) => {

            if (item.classList.contains(filterValue) || filterValue === 'all') {
                item.classList.remove('hide-card');
                item.classList.add('show-card');
            } else {
                item.classList.remove('show-card');
                item.classList.add('hide-card');
            }
        });
    }
});