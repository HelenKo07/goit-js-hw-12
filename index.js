import{a as c,S as l,i as d}from"./assets/vendor-DEenWwFD.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const u="48187645-2fe8d1ae3615e126e0d343d6c",f="https://pixabay.com/api/";function p(r){const o=new URLSearchParams({key:u,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return c.get(`${f}?${o}`)}const m=document.querySelector(".form-search"),y=document.querySelector(".gallery"),a=document.querySelector(".loader");a.style.display="none";new l(".gallery a",{captions:!0,captionsData:"alt",captionsPosition:"bottom",captionsDelay:250});m.addEventListener("submit",h);function h(r){r.preventDefault();let o=r.target.query.value.trim();if(y.innerHTML="",!o){d.show({backgroundColor:"#ef4040",message:"Please fill in the field to search for data!",borderBottom:"2px solid #ffbebe",borderRadius:"4px",padding:"20px",width:"432px",height:"88px",color:"#fafafb",position:"topRight"});return}a.style.display="inline-block",console.log(p(o))}
//# sourceMappingURL=index.js.map
