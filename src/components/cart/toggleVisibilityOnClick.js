function toggleVisibilityOnClick(triggerElement, targetElement) {

    triggerElement.addEventListener('click', () => {
        //menuCart.classList.remove('main__section--cartActive');
        targetElement.classList.toggle('main__section--cartActive');
    })
}

export default toggleVisibilityOnClick;