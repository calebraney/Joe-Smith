"use strict";(()=>{gsap.registerPlugin(ScrollTrigger);window.Webflow||=[];window.Webflow.push(()=>{let s=function(){let t=document.querySelector('[cr-split="component"]'),r=document.querySelector('[cr-split="sticky"]'),p=document.querySelector('[cr-split="left"]'),u=document.querySelector('[cr-split="right"]'),c=document.querySelector('[cr-split="left-list"]'),l=document.querySelector('[cr-split="right-list"]'),e=document.querySelectorAll('[cr-split="left-item"]'),g=document.querySelectorAll('[cr-split="right-item"]'),d="is-active";if(!r||!t)return;let n=(e.length+1)*100,o=e.length*100-100;t.style.height=`${n}vh`;let i=gsap.timeline({scrollTrigger:{markers:!1,trigger:t,start:"top top",end:"bottom bottom",ease:"none",scrub:.5},defaults:{duration:1,ease:"none"}});i.fromTo(c,{yPercent:0},{yPercent:-o},0),i.fromTo(l,{yPercent:0},{yPercent:o},0)};gsap.matchMedia().add("(min-width: 992px)",()=>{s()})});})();
