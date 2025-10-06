const hamburgerMenu =  document.getElementById('hamburger-menu');
const hamburgerIcon =  document.querySelectorAll('.hamburger-icon');
const navbar = document.getElementById('navbar');

hamburgerMenu.addEventListener('click', () => {
        navbar.classList.toggle('hidden');
        hamburgerIcon.forEach((icon, i) => {
            icon.classList.toggle("hamburger-icon-active")
        });

    });


