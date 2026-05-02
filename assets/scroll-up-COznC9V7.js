import{a as I,i as g}from"./vendor-DT-nbzqF.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),menuLinks:document.querySelectorAll(".nav-link, .mobile-nav-link")};e.openMenuBtn&&e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn&&e.closeMenuBtn.addEventListener("click",t),e.menuLinks.forEach(s=>{s.addEventListener("click",()=>{e.menu&&e.menu.classList.contains("is-open")&&t()})}),document.addEventListener("keydown",s=>{s.key==="Escape"&&e.menu&&e.menu.classList.contains("is-open")&&t()});function t(){e.menu&&(e.menu.classList.toggle("is-open"),document.body.classList.toggle("no-scroll"))}function n(s){const a=s.replace(/\\/g,"/").split("/").filter(Boolean);return a.length?a[a.length-1]:"index.html"}function o(){const s=n(window.location.pathname),i=document.querySelectorAll(".nav-link, .mobile-nav-link");i.forEach(a=>a.classList.remove("is-active")),i.forEach(a=>{const u=a.getAttribute("href");if(!u)return;n(u)===s&&a.classList.add("is-active")})}o()})();const c={FAVORITES:"yourenergy:favorites",QUOTE:"yourenergy:quote",QUOTE_DATE:"yourenergy:quote-date"},h={FILTER_CHANGED:"yourenergy:filter-changed",CATEGORY_SELECTED:"yourenergy:category-selected",SEARCH_SUBMITTED:"yourenergy:search-submitted",EXERCISE_OPEN:"yourenergy:exercise-open",FAVORITES_CHANGED:"yourenergy:favorites-changed"},K={CATEGORIES_DESKTOP:12,CATEGORIES_MOBILE:9,EXERCISES_DESKTOP:10,EXERCISES_MOBILE:8},k=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,C="https://your-energy.b.goit.study/api",d=I.create({baseURL:C,timeout:1e4});async function X({filter:e,page:t=1,limit:n=12}){const{data:o}=await d.get("/filters",{params:{filter:e,page:t,limit:n}});return o}async function Y(e={}){const{page:t=1,limit:n=10,...o}=e,{data:s}=await d.get("/exercises",{params:{...o,page:t,limit:n}});return s}async function R(e){const{data:t}=await d.get(`/exercises/${e}`);return t}async function M(){const{data:e}=await d.get("/quote");return e}async function N(e){const{data:t}=await d.post("/subscription",{email:e});return t}let m=0;function b(){let e=document.querySelector(".js-loader");return e||(e=document.createElement("div"),e.className="js-loader loader",e.innerHTML='<div class="loader__spinner"></div>',e.style.display="none",document.body.appendChild(e)),e}function P(){m++,b().style.display="flex"}function B(){m=Math.max(0,m-1),m===0&&(b().style.display="none")}function y(){try{const e=localStorage.getItem(c.FAVORITES);return e?JSON.parse(e):[]}catch{return[]}}function p(e){return y().some(t=>t._id===e)}function F(e){const t=y();t.some(n=>n._id===e._id)||(t.push(e),localStorage.setItem(c.FAVORITES,JSON.stringify(t)),window.dispatchEvent(new CustomEvent(h.FAVORITES_CHANGED)))}function D(e){const t=y().filter(n=>n._id!==e);localStorage.setItem(c.FAVORITES,JSON.stringify(t)),window.dispatchEvent(new CustomEvent(h.FAVORITES_CHANGED))}function $(e){return p(e._id)?(D(e._id),!1):(F(e),!0)}function f(e){return typeof e!="string"?"":e.charAt(0).toUpperCase()+e.slice(1)}const r=document.querySelector("#exercise-modal-backdrop");let l=null;function S(e,t){const n=e.querySelector("span"),o=e.querySelector("use");t?(n.textContent="Remove from favorites",o.setAttribute("href","./images/sprite.svg#icon-trash")):(n.textContent="Add to favorites",o.setAttribute("href","./images/sprite.svg#icon-heart"))}document.addEventListener(h.EXERCISE_OPEN,async e=>{const t=e.detail.id;try{P();const n=await R(t);l=n,H(n),U()}catch(n){console.error("Помилка при завантаженні вправи:",n)}finally{B()}});function Q(e){const t=Math.round(e||0);let n="";for(let o=1;o<=5;o++)n+=`
      <svg class="star ${o<=t?"active":""}" width="18" height="18">
        <use href="./images/sprite.svg#icon-star"></use>
      </svg>
    `;return n}function H(e){const{_id:t,name:n,rating:o,gifUrl:s,target:i,bodyPart:a,equipment:u,popularity:w,burnedCalories:O,description:x}=e,_=p(t)?"Remove from favorites":"Add to favorites";r.innerHTML=`
    <div class="modal-window">
      <button class="close-btn" id="modal-close">
        <svg class="icon-close" width="14" height="14"><use href="./images/sprite.svg#icon-close"></use></svg>
      </button>
      <div class="modal-layout">
        <img src="${s}" alt="${n}" class="modal-img">
        <div class="modal-info">
          <h2 class="modal-title">${n}</h2>
          <div class="modal-rating">
          <span>${o.toFixed(1)}</span>
          <span class="stars">${Q(o)}</span>
          </div>
          <div class="divider divider-top"></div>
          <ul class="modal-stats">
          <li>
          <span>Target</span>
         <span>${f(i)}</span>
         </li>
         <li>
         <span>Body Part</span>
         <span>${f(a)}</span>
         </li>
         <li>
         <span>Equipment</span>
         <span>${f(u)}</span>
        </li>
         <li>
        <span>Popular</span>
        <span>${w}</span>
        </li>
       </ul>
          <div class="modal-calories"><span>Burned calories</span> ${O}/3 min</div>
          <div class="divider divider-bottom"></div>
          <p class="modal-description">${x}</p>
          <div class="modal-buttons">
            <button class="fav-btn modal-exercise-btn" id="fav-btn" data-id="${t}">
              <span>${_}</span>
              <svg class="icon-heart" width="18" height="18"><use href="./images/sprite.svg#icon-heart"></use></svg>
            </button>
            <button class="rating-btn modal-exercise-btn">Give a rating</button>
          </div>
        </div>
      </div>
    </div>
  `}function U(){r.classList.remove("is-hidden"),document.body.style.overflow="hidden",document.querySelector("#modal-close").addEventListener("click",E),r.addEventListener("click",L),window.addEventListener("keydown",T);const e=document.querySelector("#fav-btn");S(e,p(l._id)),e.addEventListener("click",()=>{$(l);const t=p(l._id);S(e,t)})}function E(){r.classList.add("is-hidden"),document.body.style.overflow="",window.removeEventListener("keydown",T),r.removeEventListener("click",L),r.innerHTML="",l=null}function L(e){e.target===r&&E()}function T(e){e.code==="Escape"&&E()}function q(){return new Date().toISOString().slice(0,10)}function G(){const e=localStorage.getItem(c.QUOTE_DATE),t=localStorage.getItem(c.QUOTE);return e===q()&&t?JSON.parse(t):null}function z(e){localStorage.setItem(c.QUOTE,JSON.stringify(e)),localStorage.setItem(c.QUOTE_DATE,q())}function V(){const e=document.querySelector(".quote-wrapper");!e||e.innerHTML.trim()||(e.innerHTML=`
    <div class="quote-card">
      <div class="quote-card-top">
        <div class="quote-card-icon-wrap">
          <svg width="18" height="18" aria-hidden="true"><use href="./images/sprite.svg#icon-run"></use></svg>
        </div>
        <p class="quote-card-title">Quote of the day</p>
        <svg class="quote-mark" width="24" height="24" aria-hidden="true"><use href="./images/sprite.svg#icon-quote"></use></svg>
      </div>
      <blockquote class="quote-text"></blockquote>
      <p class="quote-author"></p>
    </div>
    <div class="quote-photo-wrap">
      <img
        src="./images/hero/women-sportswear-working-out-outdoors (2) 1_tab.png"
        srcset="./images/hero/women-sportswear-working-out-outdoors (2) 1_tab@2x.png 2x"
        alt="Women working out"
        class="quote-photo"
        width="290"
        height="242"
      />
    </div>
    <div class="daily-norm-card">
      <div class="daily-norm-header">
        <div class="daily-norm-icon-wrap">
          <svg width="20" height="20" aria-hidden="true"><use href="./images/sprite.svg#icon-dumbbell"></use></svg>
        </div>
        <div>
          <p class="daily-norm-time">110 min</p>
          <p class="daily-norm-subtitle">Daily norm of sports</p>
        </div>
      </div>
      <p class="daily-norm-text">The World Health Organization recommends at least 150 minutes of moderate-intensity aerobic physical activity per week for adults aged 18–64. However, what happens if we adjust that number to 110 minutes every day? While it might seem like a high number to hit, dedicating 110 minutes daily to sporting activities may offer unparalleled benefits to physical health, mental well-being, and overall quality of life.</p>
    </div>
  `)}function j({quote:e,author:t}){document.querySelectorAll(".quote-text").forEach(n=>{n.textContent=e}),document.querySelectorAll(".quote-author").forEach(n=>{n.textContent=t})}function A(){const e=document.querySelector(".js-info-text-mobile");if(!e){setTimeout(A,100);return}e.dataset.originalText||(e.dataset.originalText=e.textContent.trim());const t=e.dataset.originalText;function n(){const o=window.innerWidth,s=o<768?185:o<1440?195:t.length;e.textContent=t.length>s?t.substring(0,s).trim()+"...":t}n(),window.addEventListener("resize",n)}async function J(){try{let e=G();e||(e=await M(),z(e)),V(),j(e),A()}catch(e){console.error("initQuoteSection error:",e)}}J();document.addEventListener("submit",async e=>{var o,s;if(!e.target.matches("#subscribe-form"))return;e.preventDefault();const n=e.target.elements.email.value.trim();if(!k.test(n)){g.error({message:"Please enter a valid email address.",position:"topRight"});return}try{await N(n),g.success({message:"You have successfully subscribed!",position:"topRight"}),e.target.reset()}catch(i){const a=((s=(o=i.response)==null?void 0:o.data)==null?void 0:s.message)??"Subscription failed. Please try again.";g.error({message:a,position:"topRight"})}});const v=document.querySelector(".scroll-up");if(v){let e=function(){v.hidden=window.scrollY<=300};e(),window.addEventListener("scroll",e,{passive:!0}),v.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})}export{h as E,K as P,Y as a,y as b,X as g,B as h,D as r,P as s};
//# sourceMappingURL=scroll-up-COznC9V7.js.map
