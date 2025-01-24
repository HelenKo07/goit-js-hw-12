import{a as y,S as b,i as d}from"./assets/vendor-DEenWwFD.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const x="48187645-2fe8d1ae3615e126e0d343d6c",L="https://pixabay.com/api/";function p(i,e){const s={params:{key:x,page:e,per_page:15,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}};return y.get(`${L}`,s)}function h(i){return i.map(({webformatURL:e,largeImageURL:s,tags:r,likes:t,views:o,comments:a,downloads:g})=>`<li class="gallery-item">
    <article class="card">
      <a class="gallery-link" href="${s}"
        ><img class="gallery-img" src="${e}" alt="${r}"
      /></a>
      <ul class="info-list">
        <li class="info-item">
          <h2 class="info-subtitle">Likes:</h2>
          <p class="info-text">${t}</p>
        </li>
        <li class="info-item">
          <h2 class="info-subtitle">Views:</h2>
          <p class="info-text">${o}</p>
        </li>
        <li class="info-item">
          <h2 class="info-subtitle">Comments:</h2>
          <p class="info-text">${a}</p>
        </li>
        <li class="info-item">
          <h2 class="info-subtitle">Downloads:</h2>
          <p class="info-text">${g}</p>
        </li>
      </ul>
    </article>
  </li>`).join("")}const w=document.querySelector(".form-search"),f=document.querySelector(".gallery"),u=document.querySelector(".loader"),l=document.querySelector(".button-load");let n=1,c="";u.style.display="none";const S=new b(".gallery a",{captions:!0,captionsData:"alt",captionsPosition:"bottom",captionsDelay:250}),q=async i=>{try{if(i.preventDefault(),c=i.target.query.value.trim(),f.innerHTML="",!c){d.show({backgroundColor:"#ef4040",message:"Please fill in the field to search for data!",borderBottom:"2px solid #ffbebe",borderRadius:"4px",padding:"20px",width:"432px",height:"88px",color:"#fafafb",position:"topRight"});return}u.style.display="inline-block",n=1,l.classList.add("is-hidden");const{data:e}=await p(c,n);if(e.hits.length===0){d.show({title:"",backgroundColor:"#ef4040",borderBottom:"2px solid #ffbebe",borderRadius:"4px",padding:"20px",width:"432px",height:"88px",color:"#fafafb",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}e.totalHits>1&&(l.classList.remove("is-hidden"),l.addEventListener("click",m)),f.insertAdjacentHTML("beforeend",h(e.hits)),S.refresh()}catch(e){console.log(e.message)}finally{u.style.display="none"}i.target.reset()};w.addEventListener("submit",q);const m=async i=>{try{n++;const{data:e}=await p(c,n);f.insertAdjacentHTML("beforeend",h(e.hits)),n*15>=e.totalHits&&(d.info({title:"Info",position:"topRight",message:"There are no more images matching your request."}),l.classList.add("is-hidden"),l.removeEventListener("click",m));const s=document.querySelector(".gallery-item");if(s){const r=s.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}}catch{d.error({title:"Error",position:"topRight",message:"The image you requested could not be loaded. Please try again later."})}};
//# sourceMappingURL=index.js.map
