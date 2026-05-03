document.addEventListener('DOMContentLoaded', () => {
    const menuHamburguesa = document.getElementById('menuHamburguesa');
    const navMenuBox = document.getElementById('navMenuBox');
    const navLinks = document.querySelectorAll('#navMenuBox a');

    // Función para togglear el menú
    const toggleMenu = () => {
        menuHamburguesa.classList.toggle('open');
        navMenuBox.classList.toggle('open');
    };

    // Click en la hamburguesa
    menuHamburguesa.addEventListener('click', toggleMenu);

    // Cerrar el menú al hacer click en un enlace (para móvil)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenuBox.classList.contains('open')) {
                toggleMenu();
            }
        });
    });
});
