import{a as B,i as v}from"./vendor-DT-nbzqF.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),menuLinks:document.querySelectorAll(".nav-link, .mobile-nav-link")};e.openMenuBtn&&e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn&&e.closeMenuBtn.addEventListener("click",t),e.menuLinks.forEach(s=>{s.addEventListener("click",()=>{e.menu&&e.menu.classList.contains("is-open")&&t()})}),document.addEventListener("keydown",s=>{s.key==="Escape"&&e.menu&&e.menu.classList.contains("is-open")&&t()});function t(){e.menu&&(e.menu.classList.toggle("is-open"),document.body.classList.toggle("no-scroll"))}function n(s){const a=s.replace(/\\/g,"/").split("/").filter(Boolean);return a.length?a[a.length-1]:"index.html"}function i(){const s=n(window.location.pathname),o=document.querySelectorAll(".nav-link, .mobile-nav-link");o.forEach(a=>a.classList.remove("is-active")),o.forEach(a=>{const d=a.getAttribute("href");if(!d)return;n(d)===s&&a.classList.add("is-active")})}i()})();const m={FAVORITES:"yourenergy:favorites",QUOTE:"yourenergy:quote",QUOTE_DATE:"yourenergy:quote-date"},b={FILTER_CHANGED:"yourenergy:filter-changed",CATEGORY_SELECTED:"yourenergy:category-selected",SEARCH_SUBMITTED:"yourenergy:search-submitted",EXERCISE_OPEN:"yourenergy:exercise-open",FAVORITES_CHANGED:"yourenergy:favorites-changed"},ie={CATEGORIES_DESKTOP:12,CATEGORIES_MOBILE:9,EXERCISES_DESKTOP:10,EXERCISES_MOBILE:8},N=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,P="https://your-energy.b.goit.study/api",g=B.create({baseURL:P,timeout:1e4});async function oe({filter:e,page:t=1,limit:n=12}){const{data:i}=await g.get("/filters",{params:{filter:e,page:t,limit:n}});return i}async function ae(e={}){const{page:t=1,limit:n=10,...i}=e,{data:s}=await g.get("/exercises",{params:{...i,page:t,limit:n}});return s}async function F(e){const{data:t}=await g.get(`/exercises/${e}`);return t}async function D(){const{data:e}=await g.get("/quote");return e}async function $(e){const{data:t}=await g.post("/subscription",{email:e});return t}let p=0;function x(){let e=document.querySelector(".js-loader");return e||(e=document.createElement("div"),e.className="js-loader loader",e.innerHTML='<div class="loader__spinner"></div>',e.style.display="none",document.body.appendChild(e)),e}function H(){p++,x().style.display="flex"}function Q(){p=Math.max(0,p-1),p===0&&(x().style.display="none")}function S(){try{const e=localStorage.getItem(m.FAVORITES);return e?JSON.parse(e):[]}catch{return[]}}function f(e){return S().some(t=>t._id===e)}function z(e){const t=S();t.some(n=>n._id===e._id)||(t.push(e),localStorage.setItem(m.FAVORITES,JSON.stringify(t)),window.dispatchEvent(new CustomEvent(b.FAVORITES_CHANGED)))}function U(e){const t=S().filter(n=>n._id!==e);localStorage.setItem(m.FAVORITES,JSON.stringify(t)),window.dispatchEvent(new CustomEvent(b.FAVORITES_CHANGED))}function V(e){return f(e._id)?(U(e._id),!1):(z(e),!0)}const c=document.querySelector("#exercise-modal-backdrop"),l=document.querySelector("#rating-modal-backdrop");let u=null;function E(e){return typeof e!="string"?"":e.charAt(0).toUpperCase()+e.slice(1)}function k(e,t){const n=e.querySelector("span"),i=e.querySelector("use");t?(n.textContent="Remove from favorites",i.setAttribute("href","./images/sprite.svg#icon-trash")):(n.textContent="Add to favorites",i.setAttribute("href","./images/sprite.svg#icon-heart"))}function G(e){const t=Math.round(e||0);let n="";for(let i=1;i<=5;i++)n+=`
      <svg class="star ${i<=t?"active":""}" width="18" height="18">
        <use href="./images/sprite.svg#icon-star"></use>
      </svg>
    `;return n}document.addEventListener(b.EXERCISE_OPEN,async e=>{const t=e.detail.id;try{H();const n=await F(t);u=n,j(n),J()}catch(n){console.error("Помилка при завантаженні вправи:",n)}finally{Q()}});function j(e){const{_id:t,name:n,rating:i,gifUrl:s,target:o,bodyPart:a,equipment:d,popularity:q,burnedCalories:_,description:I}=e,M=f(t)?"Remove from favorites":"Add to favorites";c.innerHTML=`
    <div class="modal-window">
      <button class="close-btn" id="modal-close">
        <svg class="icon-close" width="14" height="14"><use href="./images/sprite.svg#icon-close"></use></svg>
      </button>
      <div class="modal-layout">
        <img src="${s}" alt="${n}" class="modal-img">
        <div class="modal-info">
          <h2 class="modal-title">${n}</h2>
          <div class="modal-rating">
            <span>${i.toFixed(1)}</span>
            <span class="stars">${G(i)}</span>
          </div>
          <div class="divider divider-top"></div>
          <ul class="modal-stats">
            <li><span>Target</span><span>${E(o)}</span></li>
            <li><span>Body Part</span><span>${E(a)}</span></li>
            <li><span>Equipment</span><span>${E(d)}</span></li>
            <li><span>Popular</span><span>${q}</span></li>
          </ul>
          <div class="modal-calories"><span>Burned calories</span> ${_}/3 min</div>
          <div class="divider divider-bottom"></div>
          <p class="modal-description">${I}</p>
          <div class="modal-buttons">
            <button class="fav-btn modal-exercise-btn" id="fav-btn" data-id="${t}">
              <span>${M}</span>
              <svg class="icon-heart" width="18" height="18"><use href="./images/sprite.svg#icon-heart"></use></svg>
            </button>
            <button class="rating-btn modal-exercise-btn">Give a rating</button>
          </div>
        </div>
      </div>
    </div>
  `}function J(){c.classList.remove("is-hidden"),document.body.style.overflow="hidden",document.querySelector("#modal-close").addEventListener("click",L),c.addEventListener("click",T),window.addEventListener("keydown",h);const e=document.querySelector("#fav-btn");k(e,f(u._id)),e.addEventListener("click",()=>{V(u);const n=f(u._id);k(e,n)});const t=document.querySelector(".rating-btn");t&&t.addEventListener("click",K)}function L(){c.classList.add("is-hidden"),document.body.style.overflow="",window.removeEventListener("keydown",h),c.removeEventListener("click",T),c.innerHTML="",u=null}function T(e){e.target===c&&L()}function h(e){e.code==="Escape"&&L()}let r=0;function W(){l.innerHTML=`
    <div class="rating-modal-window">
      <button type="button" class="close-btn" id="rating-modal-close">
        <svg class="icon-close" width="16" height="16"><use href="./images/sprite.svg#icon-close"></use></svg>
      </button>
      
      <form class="rating-form" id="rating-form">
        <div class="rating-container">
          <span class="rating-label">Rating</span>
          <div class="rating-stars-block">
            <span class="rating-value" id="rating-value-display">0.0</span>
            <div class="stars-group">
              <svg class="star-icon" data-value="1"><use href="./images/sprite.svg#icon-star"></use></svg>
              <svg class="star-icon" data-value="2"><use href="./images/sprite.svg#icon-star"></use></svg>
              <svg class="star-icon" data-value="3"><use href="./images/sprite.svg#icon-star"></use></svg>
              <svg class="star-icon" data-value="4"><use href="./images/sprite.svg#icon-star"></use></svg>
              <svg class="star-icon" data-value="5"><use href="./images/sprite.svg#icon-star"></use></svg>
            </div>
          </div>
        </div>
        
        <input type="email" name="email" class="rating-input" placeholder="Email" required />
        <textarea name="comment" class="rating-textarea" placeholder="Your comment"></textarea>
        
        <button type="submit" class="rating-send-btn">Send</button>
      </form>
    </div>
  `}function Y(){const e=document.querySelectorAll(".star-icon"),t=document.querySelector("#rating-value-display"),n=document.querySelector("#rating-form"),i=s=>{e.forEach((o,a)=>{a<s?o.classList.add("active"):o.classList.remove("active")})};e.forEach(s=>{s.addEventListener("mouseenter",function(){const o=this.dataset.value;i(o)}),s.addEventListener("mouseleave",function(){i(r)}),s.addEventListener("click",function(){r=Number(this.dataset.value),t.textContent=r.toFixed(1),i(r)})}),n.addEventListener("submit",s=>{if(s.preventDefault(),r===0){v.warning({title:"Увага",message:"Будь ласка, оберіть оцінку від 1 до 5 зірочок!",position:"topCenter",timeout:5e3,backgroundColor:"#eea10c",titleColor:"#242424",messageColor:"#242424",iconColor:"#242424",progressBarColor:"#242424",titleSize:"16px",messageSize:"16px"});return}const o=n.elements.email.value.trim(),a=n.elements.comment.value.trim();console.log("Дані готові до відправки на бекенд:",{rate:r,email:o,review:a}),n.reset(),r=0,y()})}function K(){W(),l.classList.remove("is-hidden"),document.querySelector("#rating-modal-close").addEventListener("click",y),l.addEventListener("click",A),window.removeEventListener("keydown",h),window.addEventListener("keydown",C),Y()}function y(){l.classList.add("is-hidden"),window.removeEventListener("keydown",C),l.removeEventListener("click",A),window.addEventListener("keydown",h),l.innerHTML="",r=0}function A(e){e.target===l&&y()}function C(e){e.code==="Escape"&&y()}function O(){return new Date().toISOString().slice(0,10)}function X(){const e=localStorage.getItem(m.QUOTE);if(!e)return null;const t=JSON.parse(e);return t.date===O()?t:null}function Z(e){localStorage.setItem(m.QUOTE,JSON.stringify({...e,date:O()}))}function ee(){const e=document.querySelector(".quote-wrapper");!e||e.innerHTML.trim()||(e.innerHTML=`
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
        src="./images/hero/women-sportswear-taking-break-from-workout_1_mob@2x.png"
        srcset="./images/hero/women-sportswear-taking-break-from-workout_1_mob@2x.png"
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
      <p class="daily-norm-text">The World Health Organization recommends at least 150 minutes of moderate-intensity aerobic physical activity throughout the week for adults aged 18-64. However, what happens if we adjust that number to 110 minutes every day? While it might seem like a high number to hit, dedicating 110 minutes daily to sporting activities may offer unparalleled benefits to physical health, mental well-being, and overall quality of life.</p>
    </div>
  `)}function te({quote:e,author:t}){document.querySelectorAll(".quote-text").forEach(n=>{n.textContent=e}),document.querySelectorAll(".quote-author").forEach(n=>{n.textContent=t})}function R(){const e=document.querySelector(".daily-norm-text");if(!e){setTimeout(R,100);return}e.dataset.originalText||(e.dataset.originalText=e.textContent.trim());const t=e.dataset.originalText;function n(){const i=window.innerWidth,s=i<768?169:i<1280?179:t.length;e.textContent=t.length>s?t.substring(0,s).trim()+"...":t}n(),window.addEventListener("resize",n)}async function ne(){try{let e=X();e||(e=await D(),Z(e)),ee(),te(e),R()}catch(e){console.error("initQuoteSection error:",e)}}ne();document.addEventListener("submit",async e=>{var i,s;if(!e.target.matches("#subscribe-form"))return;e.preventDefault();const n=e.target.elements.email.value.trim();if(!N.test(n)){v.error({message:"Please enter a valid email address.",position:"topRight"});return}try{await $(n),v.success({message:"You have successfully subscribed!",position:"topRight"}),e.target.reset()}catch(o){const a=((s=(i=o.response)==null?void 0:i.data)==null?void 0:s.message)??"Subscription failed. Please try again.";v.error({message:a,position:"topRight"})}});const w=document.querySelector(".scroll-up");if(w){let e=function(){w.hidden=window.scrollY<=300};e(),window.addEventListener("scroll",e,{passive:!0}),w.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})}export{b as E,ie as P,ae as a,S as b,oe as g,Q as h,U as r,H as s};
//# sourceMappingURL=scroll-up-Bp3XW2x7.js.map
