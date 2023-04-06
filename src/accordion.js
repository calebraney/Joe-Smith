import SplitType from 'split-type';

window.Webflow ||= [];
window.Webflow.push(() => {
  // Animation for What We Do Dropdowns
  const accordionAnimation = function () {
    // select the relevant items from the DOM
    const accordionLists = document.querySelectorAll('[cr-accordion="list"]');
    const ACCORDION_ITEM = '[cr-accordion="item"]';
    const ACCORDION_TOP = '[cr-accordion="top"]';
    const ACCORDION_OPEN = '[cr-accordion="open"]';
    const ACCORDION_CLOSE = '[cr-accordion="close"]';
    const ACTIVE_CLASS = 'is-active';
    if (!accordionLists) return;
    accordionLists.forEach((list) => {
      //open the first accordion
      const firstItem = list.firstElementChild;
      firstItem.classList.add(ACTIVE_CLASS);
      firstItem.querySelector(ACCORDION_OPEN).click();

      // Add event listener for when accordion lists are clicked
      list.addEventListener('click', function (e) {
        // check if the clicked element was the top of an accordion and get that accordion
        const clickedEl = e.target.closest(ACCORDION_TOP);
        if (!clickedEl) return;
        const activeItem = clickedEl.closest(ACCORDION_ITEM);
        // get all the accordions within this list
        const accordionItems = list.querySelectorAll(ACCORDION_ITEM);
        //remove the active class from all items
        accordionItems.forEach((item) => {
          item.classList.remove(ACTIVE_CLASS);
        });
        // add the active class to the active item
        activeItem.classList.add(ACTIVE_CLASS);
        // check all items for the active class and animate
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
