let imageContainers = document.querySelectorAll(".image-hover-anim");

for (const imageContainer of imageContainers) {
  imageContainer.addEventListener("mousemove", (e) => {
    const offsetX = e.offsetX - imageContainer.offsetWidth / 2;
    const offsetY = e.offsetY - imageContainer.offsetHeight / 2;
    const angleX = (offsetY / imageContainer.offsetHeight) * 30;
    const angleY = (-offsetX / imageContainer.offsetWidth) * 30;
    const childElement = imageContainer.querySelector("img");
    childElement.style.transition = `transform .1s linear, filter .1s linear`;
    childElement.style.transform = `rotate3d(${angleX}, ${angleY}, 0, 15deg)`;
    childElement.style.filter = `drop-shadow(${-offsetX / 4}px ${
      -offsetY / 4
    }px 10px rgba(0, 0, 0, 0.5))`;
  });
  imageContainer.addEventListener("mouseout", () => {
    const childElement = imageContainer.querySelector("img");
    childElement.style.transform = `rotate3d(0, 0, 0, 0deg)`;
    childElement.style.filter = `drop-shadow(0 0 0 rgba(0, 0, 0, 0))`;
  });
}
