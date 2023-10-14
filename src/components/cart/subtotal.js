const subtotal = () => {
    const subTotalId = document.getElementById('sub_total');
    const itemsCart = JSON.parse(localStorage.getItem('cart')) || [];

    let total = 0;

    itemsCart.map((producto) => {
        let sub_total = producto.price * producto.quantity;  //cantidad por precio
        total += sub_total;  
    });

    subTotalId.innerHTML = `$${total.toFixed(2)}`;

}


export default subtotal;