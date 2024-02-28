const body = document.querySelector("body");
const header = document.querySelector(".header");
const btnSub = document.querySelector(".header__menu-btn");
const navLinks = document.querySelector(".header__nav-menu");
const openModalBtn = document.querySelector(".header__button");
const modalContainer = document.querySelector(".modal-container");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".btn-close");

btnSub.addEventListener("click", () => {
    header.classList.toggle("responsive");
    body.style.overflow = "hidden";
})

navLinks.addEventListener("click", () => {
    body.classList.remove("hidden")
    header.classList.remove("responsive");
})


const openModal = function () {
    modalContainer.classList.remove("hidden");
};

openModalBtn.addEventListener("click", openModal);

const closeModal = function () {
    modalContainer.classList.add("hidden");
};

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modalContainer.classList.contains("hidden")) {
        closeModal();
    }
});