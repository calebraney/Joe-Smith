"use strict";
(() => {
  // src/accordion.js
  window.Webflow ||= [];
  window.Webflow.push(() => {
    const accordionAnimation = function() {
      const accordionLists = document.querySelectorAll('[cr-accordion="list"]');
      const ACCORDION_ITEM = '[cr-accordion="item"]';
      const ACCORDION_TOP = '[cr-accordion="top"]';
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
