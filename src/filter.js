'use strict';
//v1.2.1
window.Webflow ||= [];
window.Webflow.push(() => {
  // Webflow is initialized
  // Selectors for primary items
  const WORK_ITEMS = document.querySelectorAll('[cr-filter-el="work-item"]');
  const FILTER_BUTTON = document.querySelector('#filter-button');
  const FILTER_WORK_BUTTON = document.querySelector('#filter-work');

  // Get each work item and create individual tags from the tag text
  WORK_ITEMS.forEach((workItem) => {
    const tagEl = workItem.querySelector('[cr-filter-el="tag"]');
    const tagText = tagEl.textContent;
    const tagArray = tagText.split(', ');
    tagArray.forEach((tag) => {
      tagEl.insertAdjacentHTML('afterend', `<div fs-cmsfilter-field="tag">${tag}</div>`);
    });
  });
  // When the Filter Work button is clicked open the filters
  FILTER_WORK_BUTTON.addEventListener('click', function (e) {
    FILTER_BUTTON.click();
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
