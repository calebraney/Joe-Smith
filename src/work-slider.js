window.Webflow ||= [];
window.Webflow.push(() => {
  // instance of CMS attributes
  window.fsAttributes = window.fsAttributes || [];
  window.fsAttributes.push([
    'cmsload',
    (listInstances) => {
      // The callback passes a `listInstances` array with all the `CMSList` instances on the page.
      const [listInstance] = listInstances;

      // The `renderitems` event runs whenever the list renders items after switching pages.
      listInstance.on('renderitems', (renderedItems) => {
        // create splide slider
        ourWorkSlider();
      });
    },
  ]);

  // Splide Slider
  function ourWorkSlider() {
    console.log('slider created');
    let splides = document.querySelectorAll('.splide.is-our-work');
    for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
      new Splide(splides[i], {
        // Desktop on down
        perPage: 1,
        perMove: 1,
        focus: 'center', // 0 = left and 'center' = center
        type: 'loop', // 'loop' or 'slide'
        drag: true,
        snap: true,
        gap: '3rem', // space between slides
        arrows: true, // true or false
        pagination: false, // true or false
        keyboard: true,
        speed: 800, // transition speed in miliseconds
        updateOnMove: true, // important for timing
        waitForTransition: false,
        trimSpace: 'move',
        clones: 2, // sets duplicates
        breakpoints: {
          991: {
            // Tablet
            gap: '2rem',
          },
          767: {
            // Mobile Landscape
            gap: '1rem',
          },
          479: {
            // Mobile Portrait
            gap: '1rem',
          },
        },
      }).mount();
    }
  }
});
