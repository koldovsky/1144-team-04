const quotesEl = document.querySelector(".quotes");
const quotesCarouselEl = quotesEl.querySelector(".quotes__carousel");
const quotesSlideEl = quotesEl.querySelector(".quotes__slide");
const buttonLeftEl = quotesEl.querySelector(".quotes__arrow--left");
const buttonRightEl = quotesEl.querySelector(".quotes__arrow--right");

let currentIndex = 0;

buttonLeftEl.addEventListener("click", () => {
  quotesCarouselEl.scroll({
    left:
      currentIndex === 0
        ? 0
        : quotesCarouselEl.scrollLeft + quotesSlideEl.offsetWidth,
    behavior: "smooth",
  });

  currentIndex = currentIndex === 0 ? 0 : currentIndex + 1;
});

buttonRightEl.addEventListener("click", () => {
  quotesCarouselEl.scroll({
    left:
      currentIndex === 2
        ? 0
        : quotesCarouselEl.scrollLeft + quotesSlideEl.offsetWidth,
    behavior: "smooth",
  });

  currentIndex = currentIndex === 2 ? 0 : currentIndex + 1;
});
