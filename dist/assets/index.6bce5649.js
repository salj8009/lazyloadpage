(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const u=n=>n.isIntersecting,g=n=>{const t=n.target,a=t,o=t.dataset.src;a.src=o,c.unobserve(t)},c=new IntersectionObserver(n=>{n.filter(u).forEach(g)}),p=n=>{c.observe(n)};document.querySelector("#app").innerHTML=`
  <div>
    <header>
      <h3>Manipulaci\xF3n del DOM.</h3>
      <h1>Lazy Load</h1>
      <h4>Plugin en Vanilla JavaScript para cargar imagenes con lazy load.</h4>
    </header>
    <main>
      <section>
          <article>
          <p>Las imagenes agregadas no se descargan hasta que sean visibles en la pantalla.</p>
          <p>Agrega una nueva imagen al final de la lista.</p>
          <button id="btn-cargar">Agregar Imagen</button>
          <p class="limpiar-content">Limpiar</p>
        </article>
      </section>
      <section id="container-imges">
        <figure>
          <img class="img-random" src="" alt="">
        </figure>
      </section>
    </main>
  </div>
`;const l="https://dog.ceo/api/breeds/image/random",f=document.querySelector(".img-random"),h=document.querySelector("#btn-cargar"),i=document.createDocumentFragment(),d=document.querySelector("#container-imges");async function m(n){return await(await fetch(n)).json()}const y=async n=>{const t=await m(`${n}`);f.src=t.message};y(l);h.addEventListener("click",()=>{(async t=>{try{const a=await m(`${t}`),o=document.createElement("FIGURE"),e=document.createElement("IMG");e.dataset.src=a.message,o.appendChild(e),i.appendChild(o),d.appendChild(i),p(e)}catch{console.log("error")}})(l)});const b=document.querySelector(".limpiar-content"),I=()=>{d.innerHTML=""};b.addEventListener("click",I);
