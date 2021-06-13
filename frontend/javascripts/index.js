document.addEventListener('DOMContentLoaded', event => {

    const promise = new Promise(function(resolve, reject) {
        resolve(777);
        reject(555);
    })
    promise
    .then(UserApi.fetchUsers)
    .then(JewelryProductApi.fetchProducts)
   
    submitUserBtn.addEventListener('submit', User.handleSubmit)
    submitButton.addEventListener('submit', JewelryProduct.handleSubmit)
    cartImg.addEventListener('click', Cart.display)
    
    xButton.addEventListener('click', event => {
        jewelryForm().style.display = 'none';
    })
    
    const renderJewelryForm = () => {
        jewelryForm().style.display = 'block';
    }
    
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', renderJewelryForm)
    }
})
        