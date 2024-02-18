const root = document.querySelector(":root");
const body = document.querySelector("body");
const modal = document.querySelector(".contacts__form-container");
const popUpWrapper = document.querySelector(".contacts__pop-up-wrapper");
const openButton = document.querySelector(".contacts__open-button");
const closeButton = document.querySelector(".contacts__close-button");
let scrollPosition;

openButton.addEventListener("click", () => {
    scrollPosition = window.scrollY;
    root.classList.toggle("responsive");
    body.classList.toggle("fixed");
    modal.classList.toggle("responsive");
    popUpWrapper.classList.toggle("responsive");
})

closeButton.addEventListener("click", () => {
    root.classList.remove("responsive");
    body.classList.remove("fixed");
    modal.classList.remove("responsive");
    popUpWrapper.classList.remove("responsive");
    window.scrollTo(0, scrollPosition);
})
