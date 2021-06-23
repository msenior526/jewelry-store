document.addEventListener('DOMContentLoaded', event => {

    const promise = new Promise(function(resolve, reject) {
        resolve(555);
        reject(777);
    })
    promise
    .then(UserApi.fetchUsers)
    .then(JewelryProductApi.fetchProducts)
    .catch(err => console.log(err))
    
    submitUserBtn.addEventListener('submit', User.handleSubmit)
    submitButton.addEventListener('submit', JewelryProduct.handleSubmit)
    cartImg.addEventListener('click', Cart.display)
    
    xButton.addEventListener('click', event => {
        jewelryForm().style.display = 'none';
    })
    
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', JewelryProduct.renderJewelryForm)
    }

    document.querySelector('div#cart img').addEventListener('click', e => {
       e.target.parentElement.style.display = 'none';
       mainDiv.style.display = 'block';
    })
})
        