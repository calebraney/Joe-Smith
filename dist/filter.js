"use strict";(()=>{window.Webflow||=[];window.Webflow.push(()=>{let r=document.querySelectorAll('[cr-filter-el="work-item"]'),c=document.querySelector("#filter-button"),o=document.querySelector("#filter-work");r.forEach(t=>{let e=t.querySelector('[cr-filter-el="tag"]');e.textContent.split(", ").forEach(n=>{e.insertAdjacentHTML("afterend",`<div fs-cmsfilter-field="tag">${n}</div>`)})}),o.addEventListener("click",function(t){c.click()})});})();
