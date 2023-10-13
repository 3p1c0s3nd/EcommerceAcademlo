function toggleVisibilityOnClick(triggerElement, targetElement) {

    triggerElement.addEventListener('click', () => {
        const itemsCart = JSON.parse(localStorage.getItem('cart')) || [];
        if(itemsCart.length === 0){
            
            alert('No hay productos en el carrito');
            return;
        }
        //menuCart.classList.remove('main__section--cartActive');
        targetElement.classList.toggle('main__section--cartActive');
    })
}

export default toggleVisibilityOnClick;