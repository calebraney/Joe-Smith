'use strict';

window.Webflow ||= [];
window.Webflow.push(() => {
  // when webflow is loaded
  const splitAnimation = function () {
    // select the relevant items from the DOM
    const splitComponent = document.querySelector('[cr-cta-split="component"]');
    const splitLeft = document.querySelector('[cr-cta-split="left"]');
    const splitRight = document.querySelector('[cr-cta-split="right"]');
    const splitBg = document.querySelector('[cr-cta-split="background"]');

    const SPLIT_BUTTON = '[cr-cta-split="button"]';
    const ACTIVE_CLASS = 'is-active';
    const BUTTON_CLASS = 'is-alternate';
    if (!splitLeft || !splitRight) return;

    const switchSides = function (activeSide, inactiveSide) {
      // get the state of the background
      let state = Flip.getState(splitBg);
      //move background
      activeSide.insertAdjacentElement('beforeend', splitBg);
      // animate element
      Flip.from(state, {
        duration: 0.6,
        ease: 'power2.out',
      });
      //get current button and
      const activeBtn = activeSide.querySelector(SPLIT_BUTTON);
      const inactiveBtn = inactiveSide.querySelector(SPLIT_BUTTON);
      //add active classes
      activeSide.classList.add(ACTIVE_CLASS);
      activeBtn.classList.add(BUTTON_CLASS);
      //remove active classes
      inactiveSide.classList.remove(ACTIVE_CLASS);
      inactiveBtn.classList.remove(BUTTON_CLASS);
    };
    // add event listeners for each side
    splitLeft.addEventListener('mouseover', function () {
      switchSides(splitLeft, splitRight);
    });
    splitRight.addEventListener('mouseover', function () {
      switchSides(splitRight, splitLeft);
    });
  };
  splitAnimation();
});
