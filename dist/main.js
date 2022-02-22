(()=>{"use strict";const e=({timing:e,draw:t,duration:o})=>{let n=performance.now();requestAnimationFrame((function a(r){let l=(r-n)/o;l>1&&(l=1);let c=e(l);t(c),l<1&&requestAnimationFrame(a)}))},t=({formId:e,someElem:t=[]})=>{const o=document.getElementById(e),n=document.createElement("div"),a=document.createElement("div"),r=(e,t,o,n)=>{t.test(e.value)?e.attributes.placeholder.textContent=n:(e.value="",e.attributes.placeholder.textContent=o)};try{if(!o)throw new Error("Положи форму на место, а не сайт(!)");o.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=o.querySelectorAll("input"),l=new FormData(o),c={};var s;n.innerHTML="",a.classList.add("lds-ellipsis"),a.innerHTML="<div></div><div></div><div></div><div></div>",n.append(a),n.style.color="#fff",o.append(n),l.forEach(((e,t)=>{c[t]=e})),t.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?c[e.id]=t.textContent:"input"===e.type&&(c[e.id]=t.value)})),(e=>{let t=!0;const o=/^([а-я]{2,}\s?)+$/gi,n=/^[\w\-\.]+@([\w]+\.)+[\w]{2,6}$/g,a=/^\+?[\d]{11,12}$/;return e.forEach((e=>{e.closest(".form-name")&&r(e,o,"Слишком короткое имя","Ваше имя"),e.closest(".form-email")&&r(e,n,"Некорректный email","E-mail"),e.closest(".form-phone")&&r(e,a,"Должно быть 11-12 цифр","Номер телефона"),""===e.value&&(t=!1)})),t})(e)?(s=c,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((t=>{n.innerHTML="",n.textContent="Спасибо, заявка принята! Наш менеджер скоро свяжется с Вами",e.forEach((e=>{e.value=""}))})).catch((e=>{n.innerHTML="",n.textContent="Ошибка отправки"})):(alert("В форму введены не все данные или допущены ошибки"),n.textContent="")})()}))}catch(e){console.error(e.message)}};(e=>{const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds");let a,r={};const l=e=>e<10?e="0"+e:e;null!==localStorage.getItem("timeMemo")?(r=JSON.parse(localStorage.getItem("timeMemo")),t.textContent=l(r.hours),o.textContent=l(r.minutes),n.textContent=l(r.seconds)):r={},a=setInterval((function(){let e=(()=>{let e=(new Date("01 may 2022 7:00:00").getTime()-(new Date).getTime())/1e3,t=Math.floor(e/60/60),o=Math.floor(e/60%60),n=Math.floor(e%60);return localStorage.clear(),localStorage.setItem("timeMemo",JSON.stringify({hours:t,minutes:o,seconds:n})),{timeRemaining:e,hours:t,minutes:o,seconds:n}})();e.timeRemaining>0?(t.textContent=l(e.hours),o.textContent=l(e.minutes),n.textContent=l(e.seconds)):(t.textContent="00",o.textContent="00",n.textContent="00",clearInterval(a))}),1e3)})(),(()=>{const e=document.querySelector("menu");document.addEventListener("click",(t=>{(t.target.closest(".menu")||"A"===t.target.tagName&&!t.target.classList.contains("portfolio-btn")||t.target.classList.contains(".close-btn")||!t.target.closest(".active-menu")&&e.classList.contains("active-menu"))&&e.classList.toggle("active-menu")}))})(),(()=>{const t=document.querySelector(".popup"),o=document.querySelectorAll(".popup-btn"),n=t.querySelector(".popup-content");o.forEach((o=>{o.addEventListener("click",(()=>{t.style.display="block",document.body.clientWidth>780?e({duration:340,timing:function(e){return Math.pow(e,3)},draw(e){n.style.top=150*e+"px"}}):n.style.top="150px"}))})),t.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||(document.body.clientWidth>780?(({duration:e,draw:t,timing:o})=>{let n=performance.now();requestAnimationFrame((function a(r){let l=(r-n)/e;l>1&&(l=1);let c=o(1.5,l);t(c),l<1&&requestAnimationFrame(a)}))})({duration:1e3,timing:function(e,t){return Math.pow(t,2)*((e+1)*t-e)},draw(e){n.style.top=150+550*e+"px",1===e&&(t.style.display="none")}}):t.style.display="none")}))})(),document.querySelectorAll("input").forEach((e=>{e.addEventListener("input",(e=>{e.target.closest(".calc-block")&&(e.target.value=e.target.value.replace(/\D/g,"")),e.target.closest(".form-name")&&(e.target.value=e.target.value.replace(/[^а-я\s]/gi,"")),e.target.closest(".form-email")&&(e.target.value=e.target.value.replace(/[^a-z\@\-\_\.\!\~\*\']/gi,"")),e.target.closest(".form-phone")&&(e.target.value=e.target.value.replace(/[^\d\(\)\-\+]/gi,"")),e.target.closest(".mess")&&(e.target.value=e.target.value.replace(/[^а-я\s\d\.\,\!\?\"\-]/gi,""))}))})),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const n=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===n?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),((e,t,o)=>{const n=document.querySelector(e),a=document.querySelectorAll(t),r=document.querySelector(o);if(null===n||null===a||null===r)return;let l,c=0;for(let e=0;e<a.length;e++){const t=document.createElement("li");0===e&&t.classList.add("dot-active"),t.classList.add("dot"),r.append(t)}const s=document.querySelectorAll(".dot"),i=(e,t,o)=>{e[t].classList.remove(o)},d=(e,t,o)=>{e[t].classList.add(o)},u=()=>{i(a,c,"portfolio-item-active"),i(s,c,"dot-active"),c++,c>=a.length&&(c=0),d(a,c,"portfolio-item-active"),d(s,c,"dot-active")},m=(e=1500)=>{l=setInterval(u,e)};n.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(i(a,c,"portfolio-item-active"),i(s,c,"dot-active"),e.target.matches("#arrow-right")?c++:e.target.matches("#arrow-left")?c--:e.target.classList.contains("dot")&&s.forEach(((t,o)=>{e.target===t&&(c=o)})),c>=a.length&&(c=0),c<0&&(c=a.length-1),d(a,c,"portfolio-item-active"),d(s,c,"dot-active"))})),n.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(l)}),!0),n.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&m(2e3)}),!0),m(2e3)})(".portfolio-content",".portfolio-item",".portfolio-dots"),((t=100)=>{const o=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),a=document.querySelector(".calc-square"),r=document.querySelector(".calc-count"),l=document.querySelector(".calc-day"),c=document.getElementById("total");o.addEventListener("input",(o=>{o.target!==n&&o.target!==a&&o.target!==r&&o.target!==l||(()=>{const o=+n.options[n.selectedIndex].value,s=a.value;let i=0,d=1,u=1;r.value>1&&(d+=+r.value/10),l.value&&l.value<5?u=2:l.value&&l.value<10&&(u=1.5),i=o&&s?t*o*s*d*u:0,e({duration:1e3,timing:e=>e,draw(e){c.textContent=parseInt(e*i)}})})()}))})(100);const o=document.querySelectorAll("form");0!==o.length?o.forEach((e=>{t({formId:e.id,someElem:[{type:"block",id:"total"}]})})):console.log("Упс.. Формы потерялись..")})();