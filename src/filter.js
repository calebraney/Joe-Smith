'use strict';

window.Webflow ||= [];
window.Webflow.push(() => {
  // Webflow is initialized
  // Selectors for primary items
  const FORM = document.querySelector('[cr-filter-el="form"]');
  const RADIO_LABEL = '[cr-filter-el="radio-label"]';
  const RADIO_FIELD = '[cr-filter-el="radio-field"]';
  const WORK_ITEMS = document.querySelectorAll('[cr-filter-el="work-item"]');
  const SEARCH_INPUT = document.querySelector('[cr-filter-el="search"]');
  const HIDDEN_INPUT = document.querySelector('#hidden-input');
  const SUBMIT = document.querySelector('[cr-filter-el="submit"]');
  const ACTIVE_CLASS = 'is-active';

  ////////////////////////////////////////
  // Adding Tags
  WORK_ITEMS.forEach((workItem) => {
    const tagEl = workItem.querySelector('[cr-filter-el="tag"]');
    const tagText = tagEl.textContent;
    const tagArray = tagText.split(', ');
    tagArray.forEach((tag) => {
      tagEl.insertAdjacentHTML('afterend', `<div fs-cmsfilter-field="tag">${tag}</div>`);
    });
  });

  ////////////////////////////////////////
  // Filter evenet listener
  /*
  FORM.addEventListener('click', function (e) {
    console.log('lcicked');
    const clickedEl = e.target.closest(RADIO_FIELD);
    if (!clickedEl) return;
    const radioLabel = clickedEl.querySelector(RADIO_LABEL);
    const labelText = radioLabel.textContent;
    const radioFields = document.querySelectorAll(RADIO_FIELD);
    radioFields.forEach((item) => {
      item.classList.remove(ACTIVE_CLASS);
    });
    clickedEl.classList.add(ACTIVE_CLASS);
    SEARCH_INPUT.value = labelText;
    HIDDEN_INPUT.value = labelText;
    // filterInstance.applyFilters();
    // console.log(filterInstance);
  });
  */
});

/*
////////////////////////////////////////
  // Finsweet Filter API
  window.fsAttributes = window.fsAttributes || [];
  window.fsAttributes.push([
    'cmsfilter',
    (filterInstances) => {
      // The callback passes a `filterInstances` array with all the `CMSFilters` instances on the page.
      const [filterInstance] = filterInstances;

      // The `renderitems` event runs whenever the list renders items after filtering.
      filterInstance.listInstance.on('renderitems', (renderedItems) => {
        // console.log(renderedItems);
        // console.log(filterInstance);
      });
      
      ////////////////////////////////////////
      // Filter evenet listener
      FORM.addEventListener('click', function (e) {
        console.log('lcicked');
        const clickedEl = e.target.closest(RADIO_FIELD);
        if (!clickedEl) return;
        const radioLabel = clickedEl.querySelector(RADIO_LABEL);
        const labelText = radioLabel.textContent;
        const radioFields = document.querySelectorAll(RADIO_FIELD);
        radioFields.forEach((item) => {
          item.classList.remove(ACTIVE_CLASS);
        });
        clickedEl.classList.add(ACTIVE_CLASS);
        SEARCH_INPUT.value = labelText;
        HIDDEN_INPUT.value = labelText;
        // filterInstance.applyFilters();
        // console.log(filterInstance);
      });
    },
  ]);
*/
