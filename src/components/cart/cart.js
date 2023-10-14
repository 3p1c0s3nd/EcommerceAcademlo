import subtotal from "./subtotal.js";

function cart() {
    const ul = document.getElementById('cart_list');
    const itemsCart = JSON.parse(localStorage.getItem('cart')) || [];

    subtotal();
    ul.innerHTML = "";
    for (const product of itemsCart) {
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

        const increment = li.querySelector('.increment');
        increment.addEventListener('click', () => {
            product.quantity++;
            localStorage.setItem('cart', JSON.stringify(itemsCart));
            cart();
        });

        const decrement = li.querySelector('.decrement');
        decrement.addEventListener('click', () => {
            if (product.quantity > 0) { product.quantity--;}

                localStorage.setItem('cart', JSON.stringify(itemsCart));
                
                if(product.quantity === 0){
                    const index = itemsCart.indexOf(product);
                    if(index !== -1){
                        itemsCart.splice(index, 1);//eliminamons el elemeneot de la lista
                    }
                }
                cart();
            
        });

        const remove = li.querySelector('.remove');
        remove.addEventListener('click', () => {
            const index = itemsCart.indexOf(product);
            if(index !== -1){
                itemsCart.splice(index, 1);//eliminamons el elemeneot de la lista
            }
            localStorage.setItem('cart', JSON.stringify(itemsCart));
            cart();
            //ul.innerHTML = "";
        })

    }

}

export default cart;