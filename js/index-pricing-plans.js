const body = document.querySelector("body");
const modal = document.querySelector(".popup-form-container");
const openButtons = document.querySelectorAll(".select-plan");
const closeButton = document.querySelector(".popup-close-button");
const wrapper = document.querySelector(".popup-wrapper");

openButtons.forEach((button) => {
  button.addEventListener("click", () => {
    body.classList.toggle("overflow");
    modal.classList.toggle("responsive");
    wrapper.classList.toggle("responsive");
  });
});

closeButton.addEventListener("click", () => {
  body.classList.remove("overflow");
  modal.classList.remove("responsive");
  wrapper.classList.remove("responsive");
});

const form = document.querySelector(".popup-form");

async function handleSubmit(event) {
  event.preventDefault();
  const status = document.querySelector(".popup-form-status");
  const response = await fetch(event.target.action, {
    method: form.method,
    body: new FormData(event.target),
    headers: {
      Accept: "application/json",
    },
  });
  if (response.ok) {
    status.innerText = `Your data was successfully sent! 
                        Wait, the manager will contact you soon`;
    form.reset();
  } else {
    status.innerText = "An error has occurred!";
  }
}

form.addEventListener("submit", handleSubmit);