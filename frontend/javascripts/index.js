document.addEventListener('DOMContentLoaded', event => {

    JewelryProductApi.fetchProducts()

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
})
        