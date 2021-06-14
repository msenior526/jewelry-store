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
    
    const renderJewelryForm = (e) => {
        jewelryForm().style.display = 'block';
        switch (e.target.id) {
            case "ring-img":
                typeInput.value = "ring";
                break;
            case "necklace-img":
                typeInput.value = "necklace";
                break;
            case "bracelet-img":
                typeInput.value = "bracelet";
                break;
        }
    }
    
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', renderJewelryForm)
    }
})
        