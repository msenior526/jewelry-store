document.addEventListener('DOMContentLoaded', event => {

    JewelryProductApi.fetchProducts();
    UserApi.fetchUsers();
    User.handleSubmit();

    const renderJewelryForm = () => {
        const form = document.getElementById('jewelry-form');
        form.hidden = false;
        return form;
    }

    let personalizeLink = document.getElementById('personalize-link');

    
    const images = document.getElementsByClassName('jewelry-img')
    for (i = 0; i < images.length; i++) {
        images[i].addEventListener('click', e => { 
            return renderJewelryForm(jewelryForm())
        })
    }

    submitButton.addEventListener('click', event => {
        event.preventDefault();
        let formData = {
            name: nameInput.value,
            user: usernameInput.value,
            quantity: quantityInput.value,
            size: sizeInput.value,
            metal_type: metalInput.value,
            font_family: fontInput.value,
            jewelry_type: typeInput.value,
        }
        // debugger
        return JewelryProductApi.createProducts(formData);
    })
})
        