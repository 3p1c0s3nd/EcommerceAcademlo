import localStorageCart from "./localStorageCart.js"
import cart from "../../../src/components/cart/cart.js"

function mezclarArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
function detail() {

  const params = window.location.search
  
  //obtencion del id
  const productId = Number(params.split('=')[1]) //5
  console.log(params.split('=')[1]);
  if(params.split('=')[1] == undefined){
    window.location = './index.html';
  }
  
  document.querySelector(".flotante").style.display = "none";
  const sectionDetail = document.querySelector('#section_detail')

  const ul = document.createElement('ul')
  ul.classList.add('section__ul')
  ul.classList.add('ul')

  const li = document.createElement('li')
  li.classList.add('ul__li--detail')

  async function productApi() {

    const url = 'https://ecommercebackend.fundamentos-29.repl.co/'

    const res = await fetch(url)
    try {
      const data = await res.json()
      const arrayrelacionados = [];
      
      for (const product of data) {
        if (product.id === productId) {
          console.log(product);
          li.innerHTML +=
            `
            <div class="ul__div--li">
              <h1 class="ul__h1--div">${product.name}</h1>
              <h2 class="ul__h2--div">$${product.price}.00</h2>
              <p class="ul__p--div">Colores</p>
              <img src=${product.image} alt=${product.name} class="ul__img--div">
        
        
              <div class="ul__div--div">
                <h3 class="ul__h3--div">Tallas</h3>
                <h4 class="ul__h4--div">Guía de tallas</h4>
              </div>
        
              <div class="ul__div--buttons div">
                <button class="div__button--sizes "> S </button>
                <button class="div__button--sizes"> M </button>
                <button class="div__button--sizes"> L </button>
                <button class="div__button--sizes"> XL </button>
                <button class="div__button--sizes"> 2XL </button>
                <button class="div__button--sizes"> 3XL </button>
              </div>
        
              <button class="ul__button--div">
                Añadir al carrito
              </button>
      
          </div>
      
          <figure class="ul__figure">
            <img src=${product.image} alt=${product.name} class="ul__img--figure">
          </figure>
          
          `
          const divButtonSizes = document.querySelectorAll('.div__button--sizes')
          //console.log(divButtonSizes); //6 elementos que tienen esa clase

          let size = null

          divButtonSizes.forEach((button) => {

            button.addEventListener(('click'), function () {

              divButtonSizes.forEach((btn) => {
                btn.classList.remove('div__button--active')
              })

              button.classList.add('div__button--active')
              size = button.textContent
              console.log(size);

            })

          })

          const ulButtonDiv = document.querySelector('.ul__button--div')

          ulButtonDiv.addEventListener(('click'), () => {
            localStorageCart(size,divButtonSizes, productId, product.name, product.price, product.image);
            size = null;
            cart();
            const cartDisplay = document.querySelector('#menu_cart');
            cartDisplay.classList.add('main__section--cartActive');
          })

        }else{
          arrayrelacionados.push(product);
        }
        
      }

     
      ////Seccion Productos Relacionados
      const ulRelacionados = document.querySelector('#ul__api');
      let contador = 1;
      mezclarArray(arrayrelacionados);
      arrayrelacionados.forEach((product) => {
        if(contador > 5){
          return;
        }
        const nuevoli = document.createElement('li');
        nuevoli.classList.add('ul__li');
        nuevoli.onclick = () => {
          window.location = `../../../detail.html?id=${product.id}`
        }
        nuevoli.innerHTML += `
                      <img src=${product.image} alt=${product.name} class='ul__img'>
          
                      <div class='ul__div'>
                        <h2 class='ul__h2'>${product.name}</h2>
                        <h3 class='ul__h3'>$${product.price}.00</h3>
                      </div>
        `;
        ulRelacionados.appendChild(nuevoli);
        contador++;
      })


    } catch (error) {
      console.log(error);
    }


    

  }



  sectionDetail.appendChild(ul)
  ul.appendChild(li)

  productApi()

  //const carrito = document.querySelector(".bx-cart");
  //carrito.onclick = mostrarCarrito;
}

function mostrarCarrito(){
    const flotante = document.querySelector('#ul__flotante');
    flotante.innerHTML = "";
    const leercart = localStorage.getItem("cart");
    const leercart2 = JSON.parse(leercart);
    if(leercart2 == null){
      alert("Debe agregar productos al carrito para poder visualizarlos primero");
      return;
    }

    let element =  document.querySelector(".flotante");
    let elementStyle = window.getComputedStyle(element);
    let valordisplay = elementStyle.getPropertyValue('display');
    if(valordisplay == "none"){
      document.querySelector(".flotante").style.display = "flex";
    }else{
      document.querySelector(".flotante").style.display = "none";
    }
    
    leercart2.forEach((product) => {
      const li = document.createElement('li');
      li.classList.add('ul__li');
      li.classList.add('ul__li_flotante');
      li.innerHTML += `
      <img src=${product.image} alt=${product.name} class='ul__img__flotante'>
      
      <div class='ul__div '>
      <h2 class=''>Talla: ${product.size}</h2>
        <h2 class='ul__h2'>${product.name}</h2>
        <h3 class='ul__h3'>$${product.price}.00</h3>
      </div>
      `;
      flotante.appendChild(li);
    })
}

export default detail