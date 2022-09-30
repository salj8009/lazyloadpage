import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import { registerImage } from './lazy';

document.querySelector('#app').innerHTML = `
  <div>
    <header>
      <h3>Manipulación del DOM.</h3>
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
`

const API = 'https://dog.ceo/api/breeds/image/random';

const imgRandom = document.querySelector('.img-random');
const btnCargar = document.querySelector('#btn-cargar');

const fragmento = document.createDocumentFragment();
const containerImges= document.querySelector('#container-imges');

async function fetchData(URLapi){
  const response = await fetch(URLapi);
  const data = await response.json(); 
  return data;
}

const imagenInicial = async(URLapi) => {
  const imagen = await fetchData(`${URLapi}`);
  imgRandom.src = imagen.message;
}

imagenInicial(API);



btnCargar.addEventListener('click' , () => {
  const muestraImagenes = async(URLapi) => {
    try {
      const imagen = await fetchData(`${URLapi}`);
      //imgRandom.src = imagen.message;
  
      const figura = document.createElement('FIGURE');
      const imagenNew = document.createElement('IMG');
    
      imagenNew.dataset.src = imagen.message;
    
      figura.appendChild(imagenNew);
    
      fragmento.appendChild(figura);
    
      containerImges.appendChild(fragmento);

     registerImage(imagenNew); 
      
    } catch (error) {
      console.log('error')
    }
  }  
 
  muestraImagenes(API); 
  
});

const limpiarContent = document.querySelector('.limpiar-content');

const limpiarContenedor = () => {
  containerImges.innerHTML = '';
}

limpiarContent.addEventListener('click' , limpiarContenedor);