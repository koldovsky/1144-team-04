const body = document.querySelector("body");
const modal = document.querySelector(".contacts__form-container");
const openButton = document.querySelector(".contacts__open-button");
const closeButton = document.querySelector(".contacts__close-button");
const wrapper = document.querySelector(".contacts__pop-up-wrapper")

openButton.addEventListener("click", () => {
    body.classList.toggle("fixed");
    modal.classList.toggle("responsive");
    wrapper.classList.toggle("responsive");
})

closeButton.addEventListener("click", () => {
    body.classList.remove("fixed");
    modal.classList.remove("responsive");
    wrapper.classList.remove("responsive");
})
