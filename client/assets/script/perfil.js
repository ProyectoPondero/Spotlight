document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const menu = document.getElementById('menu');

    const toggleHamburgerIcon = () => {
        if (window.innerWidth <= 720) {
            hamburgerIcon.style.display = 'flex';
        } else {
            hamburgerIcon.style.display = 'none';
            menu.style.display = 'none';
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
editarTodo.addEventListener("click", () => {
    if (editarTodo.id == "modeColor") {
        editarTodo.id = "otroModo"
        editarTodo.innerHTML = `<i class="fa-solid fa-sun"></i>`
        main[0].style.backgroundColor = "#343A40"
        header[0].style.background = "#343A40"
        asideIzq[0].style.background = "#343A40"
        asideDer[0].style.background = "#343A40"
        titulo[0].style.color = "white"
        soport[0].style.color = "white"
        backSoporte[0].style.backgroundColor = "#343A40";
        publicarAlgo1[0].style.color = "#F48C06"
        publicarAlgo2[0].style.color = "white"

        links.forEach(link => {
            link.style.color = '#FAA307';
        });

        links2.forEach(link => {
            link.style.color = 'white';
        });

        nick.forEach(link => {
            link.style.color = '#E9ECEF';
        });

        iconI.forEach(link => {
            link.style.color = 'white';
        });

        descripcion.forEach(link => {
            link.style.color = '#E9ECEF';
        });



    } else {
        location.reload()
    }

});