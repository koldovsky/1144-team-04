let button = document.querySelectorAll(".class-item__title-button");

button.forEach((btn) =>
  btn.addEventListener("click", () => {
    btn.parentElement.classList.toggle("active");
  })
);
