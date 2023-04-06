// const { doc } = require('prettier');

window.Webflow ||= [];
window.Webflow.push(() => {
  // Webflow is initialized
  const ctaSlider = function () {
    const slideList = document.querySelector('[cta-primary="list"]');
    const primarySlides = document.querySelectorAll('[cta-primary="slide"]');
    const allSlides = document.querySelectorAll('.cta-primary_item');
    const START_OPACITY = 0.3;
    const ACTIVE_OPACITY = 1;
    if (!slideList || !primarySlides) return;
    let distance = 0;
    let currentSlide = 1;
    let tl = gsap.timeline({
      repeat: -1,
      onRepeat: () => {
        currentSlide = 1;
      },
      defaults: {
        ease: 'power2.out',
        duration: 1,
      },
    });
    tl.set(allSlides, { opacity: START_OPACITY });
    tl.set(allSlides[currentSlide], { opacity: ACTIVE_OPACITY });
    primarySlides.forEach((item, index) => {
      let elHeight = item.offsetHeight;
      distance = distance - elHeight;
      // let distance = (index + 1) * -elHeight;
      // console.log(index, elHeight, distance);
      tl.to(slideList, {
        y: distance,
        onStart: () => {
          // add active class
        },
        onComplete: () => {},
      });
      tl.to(
        allSlides[currentSlide],
        {
          opacity: START_OPACITY,
          duration: 0.5,
        },
        '<'
      );
      tl.to(
        allSlides[currentSlide + 1],
        {
          opacity: ACTIVE_OPACITY,
          duration: 0.5,
        },
        '<'
      );
      tl.to(item, {
        duration: 0,
        delay: 1,
      });
      currentSlide++;
    });
  };
  ctaSlider();
});

/*
// Splide Slider
function ctaSlider() {
let splides = document.querySelectorAll('.splide.is-cta');
for ( let i = 0, splideLength = splides.length; i < splideLength; i++ ) {
	new Splide( splides[ i ], {
  direction: 'ttb',
  focus: 0, // 0 = left anpnd 'center' = center
  type: 'loop', // 'loop' or 'slide'
  height: 1,
  autoHeight: true,
  drag: false,
  gap: '1rem', // space between slides
  arrows: false, // true or false
  pagination: false, // true or false
  waitForTransition: true,
  updateOnMove: true,
  keyboard: false,
  trimSpace: false,
  autoplay: true,
  interval: 1000,
  speed: 500,
} ).mount();
}
}
ctaSlider();

*/
