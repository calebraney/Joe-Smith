"use strict";
(() => {
  // src/filter.js
  window.Webflow ||= [];
  window.Webflow.push(() => {
    const FORM = document.querySelector('[cr-filter-el="form"]');
    const RADIO_LABEL = '[cr-filter-el="radio-label"]';
    const RADIO_FIELD = '[cr-filter-el="radio-field"]';
    const SEARCH_INPUT = document.querySelector('[cr-filter-el="search"]');
    const SUBMIT = document.querySelector('[cr-filter-el="submit"]');
    const ACTIVE_CLASS = "is-active";
    window.fsAttributes = window.fsAttributes || [];
    window.fsAttributes.push([
      "cmsfilter",
      (filterInstances) => {
        const [filterInstance] = filterInstances;
        filterInstance.listInstance.on("renderitems", (renderedItems) => {
        });
        FORM.addEventListener("click", function(e) {
          const clickedEl = e.target.closest(RADIO_FIELD);
          if (!clickedEl)
            return;
          const radioLabel = clickedEl.querySelector(RADIO_LABEL);
          const labelText = radioLabel.textContent;
          const radioFields = document.querySelectorAll(RADIO_FIELD);
          radioFields.forEach((item) => {
            item.classList.remove(ACTIVE_CLASS);
          });
          clickedEl.classList.add(ACTIVE_CLASS);
          SEARCH_INPUT.value = labelText;
        });
      }
    ]);
  });
})();
