let slides = [
  `<div class="quote-carousel__carousel-slide">
              <div class="carousel-slide__image-container">
                 <img class="carousel-slide__image" src="img/sitting-man-with-dumbbell.webp" 
                 alt="Sitting Man With Dumbbell" />
              </div>
              <article class="carousel-slide__article">
                <svg class="carousel-slide__article-icon" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 512 512"
                  enable-background="new 0 0 512 512" xml:space="preserve" style="max-width: 100%" height="100%">
                  <g fill="currentColor">
                    <path
                      d="M420.586,346.029c0,27.717-6,54.371-17.093,79.371c64.561-43.279,105.525-105.061,107.213-173.808l1.25-1.406V85.381   H299.279v213.306h115.338C418.523,314.029,420.586,329.842,420.586,346.029z"
                      fill="currentColor"></path>
                    <path
                      d="M116.258,298.688c4.125,15.717,6.281,31.938,6.281,48.527c0,27.719-6.031,54.404-17.124,79.404   c65.402-43.842,106.588-106.621,107.275-176.432h0.031v-0.844c0-0.344,0-0.656,0-1c0-0.344,0-0.688,0-1.031V85.381H0.044v213.306   H116.258z"
                      fill="currentColor"></path>
                  </g>
                </svg>
                <p class="carousel-slide__article-name-text">CARL WONG</p>
                <p class="carousel-slide__article-text">
                  “Donald Freeman is one of the most professional
                  weightlifting coaches I have ever worked with. He perfectly
                  understands my personal needs. His insight, abilities, and
                  overall knowledge are really unparalleled!”
                </p>
                <p class="carousel-slide__article-date-text">22 June, 2022</p>
              </article>
            </div>`,
  `<div class="quote-carousel__carousel-slide">
              <div class="carousel-slide__image-container">
                <img class="carousel-slide__image" src="img/sitting-man.webp" alt="Sitting Man" />
              </div>
              <article class="carousel-slide__article">
                <svg class="carousel-slide__article-icon"  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 512 512"
                  enable-background="new 0 0 512 512" xml:space="preserve" style="max-width: 100%" height="100%">
                  <g fill="currentColor">
                    <path
                      d="M420.586,346.029c0,27.717-6,54.371-17.093,79.371c64.561-43.279,105.525-105.061,107.213-173.808l1.25-1.406V85.381   H299.279v213.306h115.338C418.523,314.029,420.586,329.842,420.586,346.029z"
                     fill="currentColor"></path>
                    <path
                      d="M116.258,298.688c4.125,15.717,6.281,31.938,6.281,48.527c0,27.719-6.031,54.404-17.124,79.404   c65.402-43.842,106.588-106.621,107.275-176.432h0.031v-0.844c0-0.344,0-0.656,0-1c0-0.344,0-0.688,0-1.031V85.381H0.044v213.306   H116.258z"
                       fill="currentColor"></path>
                  </g>
                </svg>
                <p class="carousel-slide__article-name-text">PATRICK POOL</p>
                <p class="carousel-slide__article-text">
                  "I've started to attend the FitB. I liked it very much and
                  will continue to train. An understanding coach, if something
                  is wrong, will immediately help everyone to correct their
                  mistakes. Friendly team, everything is great!"
                </p>
                <p class="carousel-slide__article-date-text">
                  10 March, 2022
                </p>
              </article>
            </div>`,
];

let currentIndex = 0;

function renderSlide() {
  const slideContainer = document.querySelector(
    ".quote-carousel__carousel-track"
  );
  slideContainer.innerHTML = slides[currentIndex];
}

const buttonPrev = document.querySelector(".quote-carousel__button-left");
const buttonNext = document.querySelector(".quote-carousel__button-right");

function nextSlide() {
  currentIndex = currentIndex + 1 >= slides.length ? 0 : currentIndex + 1;
  renderSlide();
}

function prevSlide() {
  currentIndex = currentIndex - 1 < 0 ? slides.length - 1 : currentIndex - 1;
  renderSlide();
}

buttonNext.addEventListener("click", nextSlide);
buttonPrev.addEventListener("click", prevSlide);

renderSlide();
