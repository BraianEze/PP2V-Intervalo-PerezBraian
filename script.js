document.addEventListener('DOMContentLoaded', function () {
    // Menú hamburguesa
    const menuToggle = document.getElementById("menu-toggle");
    const menuLinks = document.querySelector(".nav-links");
    const icon = menuToggle ? menuToggle.querySelector("i") : null;

    if (menuToggle && menuLinks) {
        menuToggle.addEventListener("click", function () {
            menuLinks.classList.toggle("active");

            // Cambiar el ícono cuando el menú está abierto/cerrado
            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-times");
        });
    }

    // Botón "Volver arriba"
    const backToTop = document.createElement("div");
    backToTop.id = "back-to-top";
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTop);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.classList.add("show-back-to-top");
        } else {
            backToTop.classList.remove("show-back-to-top");
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
