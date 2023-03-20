'use strict';

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
  const accordionAnimation = function () {
    // select the relevant items from the DOM
    const accordionLists = document.querySelectorAll('[cr-accordion="list"]');
    const ACCORDION_ITEM = '[cr-accordion="item"]';
    const ACCORDION_TOP = '[cr-accordion="top"]';
    const ACCORDION_BOTTOM = '[cr-accordion="bottom"]';
    const ACCORDION_OPEN = '[cr-accordion="open"]';
    const ACCORDION_CLOSE = '[cr-accordion="close"]';
    const ACTIVE_CLASS = 'is-active';
    if (!accordionLists) return;
    accordionLists.forEach((list) => {
      // get all the accordions within this list
      const accordionItems = list.querySelectorAll(ACCORDION_ITEM);
      //set the first accordion as active
      const firstItem = list.firstElementChild;
      firstItem.classList.add(ACTIVE_CLASS);

      // Create a timeline for each item
      accordionItems.forEach((item) => {
        const accordionBot = item.querySelector(ACCORDION_BOTTOM);
        let accordionOpenTL = gsap.timeline({
          paused: true,
          defaults: {
            ease: 'power2.out',
            duration: 0.6,
          },
        });
        accordionOpenTL.to(accordionBot, {
          height: 'auto',
        });
        let accordionCloseTL = gsap.timeline({
          paused: true,
          defaults: {
            ease: 'power2.out',
            duration: 0.6,
          },
        });
        accordionCloseTL.to(accordionBot, {
          height: 0,
        });
        accordionCloseTL.progress(1);
        // play the interaction for the active item
        if (item.classList.contains(ACTIVE_CLASS)) {
          accordionOpenTL.restart();
        }
        // Add event listener for when accordion lists are clicked
        item.addEventListener('click', function (e) {
          // check if the clicked element was the top of an accordion and get that accordion
          const clickedEl = e.target.closest(ACCORDION_TOP);
          if (!clickedEl) return;
          const activeItem = item;
          console.log('clicked item', activeItem);
          //remove the active class from all items
          accordionItems.forEach((item) => {
            item.classList.remove(ACTIVE_CLASS);
          });
          // add the active class to the active item
          activeItem.classList.add(ACTIVE_CLASS);
          // check all items for the active class and animate
          accordionItems.forEach((item) => {
            if (item.classList.contains(ACTIVE_CLASS)) {
              accordionOpenTL.restart();
            } else {
              accordionCloseTL.restart();
            }
          });
        });
      });
    });
  };
  accordionAnimation();
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
