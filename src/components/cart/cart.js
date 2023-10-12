function cart(){
    const ul = document.getElementById('cart_list');
    const itemsCart = JSON.parse(localStorage.getItem('cart')) || [];

   for(const product of itemsCart){
    const li = document.createElement('li');
    li.classList.add('section__li--cart');
    li.innerHTML = `
        <img src=${product.image} alt=${product.name} class='section__img--cart'>

        <div class='section__div--cart'>
            <h3 class='section__h3--cart'>${product.name}</h3>
            <h4 class='section__h4--cart'>$${product.price}.00</h4>
            <p class='section__p--cart'>Talla ${product.size}</p>

            <div class='section__div--buttonCart'>
                <div class='section__div--modified'>
                    <button class='decrement'>-</button>
                    <h4 class='quantity'>${product.quantity}</h4>
                    <button class='increment'>+</button>
                </div>
                <button class='remove'>
                    <li class='bx bx-trash' style='color:#737171 ;'></li>
                </button>
            </div>
        </div>

    `;
    ul.appendChild(li);
   }

}

export default cart;