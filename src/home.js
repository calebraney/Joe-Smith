'use strict';

document.addEventListener('DOMContentLoaded', function () {
  // Webflow is initialized
  let typeSplit = new SplitType('h1', {
    types: 'words',
    tagName: 'span',
  });

  // On Page Load
  function pageLoad() {
    const component = document.querySelector('.home-header_component');
    const otherText = document.querySelectorAll('.home-header_component p, .button');
    const lottieTrigger = document.querySelector('.home-header_lottie-trigger');
    let tl = gsap.timeline({
      delay: 0.4,
      defaults: {
        ease: 'power2.out',
        duration: 0.6,
      },
    });
    tl.set(component, {
      opacity: 1,
    });
    tl.add(function () {
      console.log(lottieTrigger);
      lottieTrigger.click();
    }, '<');
    tl.from(
      'h1 .word',
      {
        y: '2rem',
        opacity: 0,
        stagger: { each: 0.2, from: 'left' },
        duration: 0.8,
      },
      '-=.2'
    );
    tl.from(
      otherText,
      {
        y: '2rem',
        opacity: 0,
        stagger: { each: 0.2, from: 'left' },
      },
      '-=.8'
    );
    tl.from(
      '.navbar_component',
      {
        yPercent: -100,
        opacity: 0,
      },
      '-=.6'
    );
  }
  pageLoad();
});
