document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const menuLinks = document.querySelector('.menu-links');

    menuBtn.addEventListener('click', () => {
        menuLinks.classList.toggle('show');
    });
});
