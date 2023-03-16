"use strict";
(() => {
  // src/filter.js
  window.Webflow ||= [];
  window.Webflow.push(() => {
    const FORM = document.querySelector('[cr-filter-el="form"]');
    const RADIO_LABEL = '[cr-filter-el="radio-label"]';
    const RADIO_FIELD = '[cr-filter-el="radio-field"]';
    const WORK_ITEMS = document.querySelectorAll('[cr-filter-el="work-item"]');
    const SEARCH_INPUT = document.querySelector('[cr-filter-el="search"]');
    const HIDDEN_INPUT = document.querySelector("#hidden-input");
    const SUBMIT = document.querySelector('[cr-filter-el="submit"]');
    const ACTIVE_CLASS = "is-active";
    WORK_ITEMS.forEach((workItem) => {
      const tagEl = workItem.querySelector('[cr-filter-el="tag"]');
      const tagText = tagEl.textContent;
      const tagArray = tagText.split(", ");
      tagArray.forEach((tag) => {
        tagEl.insertAdjacentHTML("afterend", `<div fs-cmsfilter-field="tag">${tag}</div>`);
      });
    });
  });
})();
