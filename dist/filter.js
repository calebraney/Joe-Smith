"use strict";
(() => {
  // src/filter.js
  window.Webflow ||= [];
  window.Webflow.push(() => {
    const WORK_ITEMS = document.querySelectorAll('[cr-filter-el="work-item"]');
    const FILTER_BUTTON = document.querySelector("#filter-button");
    const FILTER_WORK_BUTTON = document.querySelector("#filter-work");
    WORK_ITEMS.forEach((workItem) => {
      const tagEl = workItem.querySelector('[cr-filter-el="tag"]');
      const tagText = tagEl.textContent;
      const tagArray = tagText.split(", ");
      tagArray.forEach((tag) => {
        tagEl.insertAdjacentHTML("afterend", `<div fs-cmsfilter-field="tag">${tag}</div>`);
      });
    });
    FILTER_WORK_BUTTON.addEventListener("click", function(e) {
      FILTER_BUTTON.click();
    });
  });
})();
