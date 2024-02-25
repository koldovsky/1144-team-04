const slides = [
  '<div class="gallery-carousel__slide"><img src="../img/woman-does-sport.webp" alt="woman-does-sport" /></div>',
  '<div class="gallery-carousel__slide"><img src="../img/three-people-are-talkinkg-at-gym.webp" alt="three-people-are-talkinkg-at-gym"/></div>',
  '<div class="gallery-carousel__slide"><img src="../img/coach-helps-woman-doing-approach.webp" alt="coach-helps-woman-doing-approach"/></div>',
  '<div class="gallery-carousel__slide"><img src="../img/running-woman.webp" alt="running-woman" /></div>',
  '<div class="gallery-carousel__slide"><img src="../img/the-gym.webp" alt="the-gym" /></div>',
];

let currentIdx = 0;

function renderSlide() {
    const slideContainer = document.querySelector('.gallery-carousel__photo-container');
    slideContainer.innerHTML = slides[currentIdx];
    if (window.matchMedia('(min-width: 768px)').matches) {
        const secondSlideIdx = currentIdx + 1 >= slides.length ? 0 : currentIdx + 1;
        slideContainer.innerHTML += slides[secondSlideIdx];
        if (window.matchMedia('(min-width: 992px)').matches) {
            const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
            const fourthSlideIdx = thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
            slideContainer.innerHTML += slides[thirdSlideIdx] + slides[fourthSlideIdx];
        }
    }
}

renderSlide();

function nextSlide() {
    currentIdx = currentIdx + 1 >= slides.length ? 0 : currentIdx + 1;
    renderSlide();
}

function prevSlide() {
    currentIdx = currentIdx -1 < 0 ? slides.length - 1 : currentIdx -1;
    renderSlide();
}

const btnNext = document.querySelector('.gallery-carousel__button--next');
const btnPrev = document.querySelector('.gallery-carousel__button--prev');

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);

setInterval(nextSlide, 5000);

window.addEventListener('resize', renderSlide);