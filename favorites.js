import{E as g,r as h,b as m}from"./assets/scroll-up-COznC9V7.js";import"./assets/vendor-DT-nbzqF.js";function x(t,e=!0){const{_id:s,name:a,burnedCalories:i,time:l,bodyPart:v,target:p,rating:u}=t,f=e?`<button class="exercise-card-trash-btn" type="button" aria-label="Remove from favorites">
         <svg width="16" height="16">
           <use href="./images/sprite.svg#icon-trash"></use>
         </svg>
       </button>`:`<div class="exercise-card-rating">
         <span class="exercise-card-rating-value">${u?Math.round(u*10)/10:"0.0"}</span>
         <svg class="exercise-card-rating-icon" width="13" height="13">
           <use href="./images/sprite.svg#icon-star"></use>
         </svg>
       </div>`;return`
    <li class="exercise-card" data-id="${s}">
      <div class="exercise-card-header">
        <div class="exercise-card-badge-wrap">
          <span class="exercise-card-badge">WORKOUT</span>
          ${f}
        </div>
        <button class="exercise-card-start-btn" type="button">
          Start
          <svg width="16" height="16">
            <use href="./images/sprite.svg#icon-arrow-right"></use>
          </svg>
        </button>
      </div>
      
      <div class="exercise-card-title-wrap">
        <div class="exercise-card-icon-wrap">
          <svg class="exercise-card-icon" width="24" height="24">
            <use href="./images/sprite.svg#icon-run"></use>
          </svg>
        </div>
        <h3 class="exercise-card-title">${a}</h3>
      </div>
      
      <ul class="exercise-card-info-list">
        <li class="exercise-card-info-item">
          <span class="exercise-card-info-label">Burned calories:</span>
          <span class="exercise-card-info-value">${i} / ${l} min</span>
        </li>
        <li class="exercise-card-info-item">
          <span class="exercise-card-info-label">Body part:</span>
          <span class="exercise-card-info-value">${v}</span>
        </li>
        <li class="exercise-card-info-item">
          <span class="exercise-card-info-label">Target:</span>
          <span class="exercise-card-info-value">${p}</span>
        </li>
      </ul>
    </li>
  `}const r=document.querySelector(".favorites-list"),d=document.querySelector(".favorites-empty-text"),n=document.querySelector(".favorites-pagination");let c=1;function b(){return window.matchMedia("(min-width: 1280px)").matches?1/0:window.matchMedia("(min-width: 768px)").matches?10:8}function y(t,e){if(!n)return;if(e===1/0||t<=e){n.innerHTML="";return}const s=Math.ceil(t/e);let a="";for(let i=1;i<=s;i++)a+=`<button class="favorites-pagination-btn ${i===c?"is-active":""}" data-page="${i}">${i}</button>`;n.innerHTML=a}function o(){if(!r||!d)return;const t=m();if(t.length===0){d.style.display="block",r.style.display="none",r.innerHTML="",n&&(n.innerHTML="");return}d.style.display="none",r.style.display="grid";const e=b(),s=Math.ceil(t.length/e);c>s&&s>0&&(c=s);let a=t;if(e!==1/0){const i=(c-1)*e;a=t.slice(i,i+e)}r.innerHTML=a.map(i=>x(i,!0)).join(""),y(t.length,e)}if(r){o(),window.addEventListener(g.FAVORITES_CHANGED,o),r.addEventListener("click",e=>{const s=e.target.closest(".exercise-card");if(!s)return;const a=s.dataset.id;if(e.target.closest(".exercise-card-trash-btn")){h(a);return}if(e.target.closest(".exercise-card-start-btn")){document.dispatchEvent(new CustomEvent(g.EXERCISE_OPEN,{detail:{id:a}}));return}}),n&&n.addEventListener("click",e=>{const s=e.target.closest(".favorites-pagination-btn");s&&(c=Number(s.dataset.page),o(),document.querySelector(".favorites-section").scrollIntoView({behavior:"smooth"}))});let t;window.addEventListener("resize",()=>{clearTimeout(t),t=setTimeout(o,200)})}console.log("[YourEnergy] Favorites page loaded");
//# sourceMappingURL=favorites.js.map
