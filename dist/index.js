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
  });
})();
