document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menuLinks = document.querySelector(".nav-links");
    const icon = menuToggle.querySelector("i");

    if (menuToggle && menuLinks) {
        menuToggle.addEventListener("click", function () {
            menuLinks.classList.toggle("active");

            // Cambiar el ícono cuando el menú está abierto/cerrado
            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-times");
        });
    }
});
