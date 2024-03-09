const footerForm = document.querySelector(".content__form-link");

async function toSumbit(event) {
    event.preventDefault();
    const formStatus = document.querySelector(".footer-content__email-paragraph");
    const formResponse = await fetch(event.target.action, {
        method: footerForm.method,
        body: new FormData(event.target),
    })
    if (formResponse.ok) {
            formStatus.innerHTML = "Thanks for your subsription!";
            form.reset()
    } else {
        formStatus.innerText = 'There was an error!';
    };
}

form.addEventListener("submit", toSumbit);


