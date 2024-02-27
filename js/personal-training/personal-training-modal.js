let modalWindow = document.querySelector(".personal-training-modal-wrapper");
let modalOpenBtn = document.querySelector(".right-container__join-now-button");
let modalCloseBtn = document.querySelector(".modal-close-btn");
let modalWindowWrapper = document.querySelector(
  ".personal-training-modal-wrapper"
);

modalOpenBtn.addEventListener("click", () => {
  modalWindow.classList.toggle("modal-hidden");
  document.querySelector("body").style.overflow = "hidden";
});

modalCloseBtn.addEventListener("click", () => {
  modalWindow.classList.toggle("modal-hidden");
  document.querySelector("body").style.overflow = "visible";
});

modalWindowWrapper.addEventListener("click", (event) => {
  if (event.target === modalWindowWrapper) {
    modalWindow.classList.toggle("modal-hidden");
    document.querySelector("body").style.overflow = "visible";
  }
});

let modalOpenBtnSec = document.querySelector(
  ".contact-section__start-now-button"
);

modalOpenBtnSec.addEventListener("click", () => {
  modalWindow.classList.toggle("modal-hidden");
  document.querySelector("body").style.overflow = "hidden";
});
