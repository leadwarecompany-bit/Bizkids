const toggles = document.querySelectorAll(".togglers");
const hamburgers = document.querySelectorAll(".main-hamburger-menu");
const main_hamburgerIcon = document.querySelectorAll(".main-hamburger-icon")

function mainnavtoggle() {
    toggles.forEach((toggle) => {
        toggle.classList.toggle("now-active")
    });
};

hamburgers.forEach((hamburger) =>{
    hamburger.addEventListener("click", () => {
        mainnavtoggle()
        main_hamburgerIcon.forEach((main_icon, i) => {
            main_icon.classList.toggle("main-hamburger-icon-active")
        });
    });
});
