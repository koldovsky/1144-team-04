const form = document.getElementById("contact-form");

async function handleSubmit(event) {
    event.preventDefault();
    const status = document.getElementById("contact-form-status");
    const response = await fetch(event.target.action, {
        method: form.method,
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok) {
            status.innerHTML = "Thanks for your subcription!";
            form.reset()
    } else {
        status.innerText = 'There was an error!';
    };
}

form.addEventListener("submit", handleSubmit);