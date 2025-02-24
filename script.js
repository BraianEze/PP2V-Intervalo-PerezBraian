document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const menuLinks = document.querySelector('.menu-links');

    menuBtn.addEventListener('click', () => {
        menuLinks.classList.toggle('show');
    });
});
document.getElementById("menu-toggle").addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("active");
});