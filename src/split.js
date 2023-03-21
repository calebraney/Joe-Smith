'use strict';

window.Webflow ||= [];
window.Webflow.push(() => {
  // Animation for What We Do Dropdowns
  const splitAnimation = function () {
    // select the relevant items from the DOM
    const splitComponent = document.querySelector('[cr-split="component"]');
    const splitSticky = document.querySelector('[cr-split="sticky"]');
    const splitLeft = document.querySelector('[cr-split="left"]');
    const splitRight = document.querySelector('[cr-split="right"]');
    const splitLeftList = document.querySelector('[cr-split="left-list"]');
    const splitRightList = document.querySelector('[cr-split="right-list"]');
    const splitLeftItems = document.querySelectorAll('[cr-split="left-item"]');
    const splitRightItems = document.querySelectorAll('[cr-split="right-item"]');

    const ACTIVE_CLASS = 'is-active';
    if (!splitSticky || !splitComponent) return;
    console.log('split run');
    // store amount of cms items
    const itemCount = splitLeftItems.length + 1;
    const scrollHeight = itemCount * 100;
    const transformHeight = splitLeftItems.length * 100 - 100;
    //set height of split component based on the amount of items in the
    splitComponent.style.height = `${scrollHeight}vh`;
    // set up timeline
    let tl = gsap.timeline({
      scrollTrigger: {
        markers: false,
        trigger: splitComponent,
        start: 'top top',
        end: 'bottom bottom',
        ease: 'none',
        scrub: 0.5,
      },
      defaults: {
        duration: 1,
        ease: 'none',
      },
    });
    tl.fromTo(
      splitLeftList,
      {
        yPercent: 0,
      },
      {
        yPercent: -transformHeight,
      },
      0
    );
    tl.fromTo(
      splitRightList,
      {
        yPercent: 0,
      },
      {
        yPercent: transformHeight,
      },
      0
    );
  };
  // add gsap match media
  let mm = gsap.matchMedia();
  mm.add('(min-width: 992px)', () => {
    // the code will only run if the media query matches
    splitAnimation();
  });
});
