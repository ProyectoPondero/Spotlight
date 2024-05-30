document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const menu = document.getElementById('menu');

    const toggleHamburgerIcon = () => {
        if (window.innerWidth <= 720) {
            hamburgerIcon.style.display = 'flex';
        } else {
            hamburgerIcon.style.display = 'none';
            menu.style.display = 'none'; // Hide menu if screen is resized above 699px
        }
    };

    const toggleMenu = () => {
        if (menu.style.display === 'flex') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'flex';
        }
    };

    window.addEventListener('resize', toggleHamburgerIcon);
    hamburgerIcon.addEventListener('click', toggleMenu);

    toggleHamburgerIcon(); // Initial check
});