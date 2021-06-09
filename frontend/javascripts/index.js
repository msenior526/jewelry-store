document.addEventListener('DOMContentLoaded', event => {

    const promise = new Promise(function(resolve, reject) {
        resolve(777);
        reject(555);
    })
    promise
    .then(UserApi.fetchUsers)
    .then(JewelryProductApi.fetchProducts)
   
    User.handleSubmit();
    JewelryProduct.handleSubmit();
   
    const renderJewelryForm = () => {
        const form = document.getElementById('jewelry-form');
        form.hidden = false;
        return form;
    }
    
    const images = document.getElementsByClassName('jewelry-img')
    for (i = 0; i < images.length; i++) {
        images[i].addEventListener('click', e => { 
            return renderJewelryForm(jewelryForm())
        })
    }
})
        