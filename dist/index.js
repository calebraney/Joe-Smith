"use strict";
(() => {
  // src/index.js
  window.Webflow ||= [];
  window.Webflow.push(() => {
    const ctaSlider = function() {
      const slideList = document.querySelector('[cta-primary="list"]');
      const primarySlides = document.querySelectorAll('[cta-primary="slide"]');
      const allSlides = document.querySelectorAll(".cta-primary_item");
      const START_OPACITY = 0.3;
      const ACTIVE_OPACITY = 1;
      if (!slideList || !primarySlides)
        return;
      let distance = 0;
      let currentSlide = 1;
      let tl = gsap.timeline({
        repeat: -1,
        onRepeat: () => {
          currentSlide = 1;
        },
        defaults: {
          ease: "power2.out",
          duration: 1
        }
      });
      tl.set(allSlides, { opacity: START_OPACITY });
      tl.set(allSlides[currentSlide], { opacity: ACTIVE_OPACITY });
      primarySlides.forEach((item, index) => {
        let elHeight = item.offsetHeight;
        distance = distance - elHeight;
        tl.to(slideList, {
          y: distance,
          onStart: () => {
          },
          onComplete: () => {
          }
        });
        tl.to(
          allSlides[currentSlide],
          {
            opacity: START_OPACITY,
            duration: 0.5
          },
          "<"
        );
        tl.to(
          allSlides[currentSlide + 1],
          {
            opacity: ACTIVE_OPACITY,
            duration: 0.5
          },
          "<"
        );
        tl.to(item, {
          duration: 0,
          delay: 1
        });
        currentSlide++;
      });
    };
    ctaSlider();
    const accordionAnimation = function() {
      const accordionLists = document.querySelectorAll('[cr-accordion="list"]');
      const ACCORDION_ITEM = '[cr-accordion="item"]';
      const ACCORDION_TOP = '[cr-accordion="top"]';
      const ACCORDION_BOTTOM = '[cr-accordion="bottom"]';
      const ACCORDION_OPEN = '[cr-accordion="open"]';
      const ACCORDION_CLOSE = '[cr-accordion="close"]';
      const ACTIVE_CLASS = "is-active";
      if (!accordionLists)
        return;
      accordionLists.forEach((list) => {
        const firstItem = list.firstElementChild;
        firstItem.classList.add(ACTIVE_CLASS);
        firstItem.querySelector(ACCORDION_OPEN).click();
        list.addEventListener("click", function(e) {
          const clickedEl = e.target.closest(ACCORDION_TOP);
          if (!clickedEl)
            return;
          const activeItem = clickedEl.closest(ACCORDION_ITEM);
          const accordionItems = list.querySelectorAll(ACCORDION_ITEM);
          accordionItems.forEach((item) => {
            item.classList.remove(ACTIVE_CLASS);
          });
          activeItem.classList.add(ACTIVE_CLASS);
          accordionItems.forEach((item) => {
            if (item.classList.contains(ACTIVE_CLASS)) {
              item.querySelector(ACCORDION_OPEN).click();
            } else {
              item.querySelector(ACCORDION_CLOSE).click();
            }
          });
        });
      });
    };
    accordionAnimation();
  });
})();
