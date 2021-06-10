document.addEventListener('DOMContentLoaded', event => {

    const promise = new Promise(function(resolve, reject) {
        resolve(777);
        reject(555);
    })
    promise
    .then(UserApi.fetchUsers)
    .then(JewelryProductApi.fetchProducts)
   
    submitUserBtn.addEventListener('click', User.handleSubmit)
    submitButton.addEventListener('click', JewelryProduct.handleSubmit)
    
    xButton.addEventListener('click', event => {
        jewelryForm().hidden = true;
    })
    
    const renderJewelryForm = () => {
        jewelryForm().hidden = false;
    }
    
    const images = document.getElementsByClassName('jewelry-img')
    for (i = 0; i < images.length; i++) {
        images[i].addEventListener('click', e => { 
            return renderJewelryForm();
        })
    }
})
        