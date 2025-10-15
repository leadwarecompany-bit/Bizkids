const toggles = document.querySelectorAll(".togglers");
const hamburgers = document.querySelectorAll(".main-hamburger-menu");

function mainnavtoggle() {
    toggles.forEach((toggle) => {
        toggle.classList.toggle("now-active")
    });
};

hamburgers.forEach((hamburger) =>{
    hamburger.addEventListener("click", () => {
        mainnavtoggle()
    });
});
