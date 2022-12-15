(() => {

  const slides = [
    '<div><img class="slider-image" src="img/apple.png" alt="Apple"></div>',
    '<div><img class="slider-image" src="img/orange.png" alt="Orange"></div>',
    '<div><img class="slider-image" src="img/banana.png" alt="Banana"></div>',
    '<div><img class="slider-image" src="img/kiwi.png" alt="img/kiwi.png"></div>',
  ];
  let currentSlideIdx = 0;

  function renderSlide() {
    const slideContainer = document.querySelector(".main__slider-container");  
    slideContainer.innerHTML = slides[currentSlideIdx];
    if (window.innerWidth > 600) {
      const secondSlideIdx =
        currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
      slideContainer.innerHTML += slides[secondSlideIdx];
      if (window.innerWidth > 900) {
        const thirdSlideIdx =
          secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
        slideContainer.innerHTML += slides[thirdSlideIdx];
      }
    }
  }

  function nextSlide() {
    currentSlideIdx++;
    if (currentSlideIdx >= slides.length) currentSlideIdx = 0;
    renderSlide();
  }

  function prevSlide() {
    currentSlideIdx--;
    if (currentSlideIdx < 0) currentSlideIdx = slides.length - 1;
    renderSlide();
  }

  setInterval(nextSlide, 7000);

  renderSlide();

  const nextButton = document.querySelector(".main__slider-btn-next");
  nextButton.addEventListener("click", nextSlide);

  const prevButton = document.querySelector(".main__slider-btn-prev");
  prevButton.addEventListener("click", prevSlide);

  window.addEventListener("resize", renderSlide);
})();
