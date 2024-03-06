let button = document.querySelectorAll('.item-content__heading')

button.forEach((btn) =>
    btn.addEventListener("click", () => {
        btn.parentElement.classList.toggle("activited");
    })
);
