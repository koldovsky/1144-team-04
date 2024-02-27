let form = document.getElementById("get-started-form");

async function handleSumbit(event) {
  event.preventDefault();

  let status = document.getElementById("modal-status");
  let data = new FormData(event.target);

  const response = await fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    status.innerHTML = "Thanks for your submission!";
    form.reset();
  } else {
    status.innerHTML = "There was an error!";
  }

  form.addEventListener("submit", handleSubmit);
}
