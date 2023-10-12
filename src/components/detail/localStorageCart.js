function localStorageCart(size, buttons) {

    if (!size) {
      console.error('No size assigned ❌ ');
      throw new Error('No size assigned ❌ ')
    }

    buttons.forEach((btn) => {
      btn.classList.remove('div__button--active');
    })
  
  
  }
  
  export default localStorageCart