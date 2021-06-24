document.addEventListener('DOMContentLoaded', event => {
    
    Promise.all([
        fetch("http://localhost:3000/jewelry_products"),
        fetch("http://localhost:3000/users"),
        fetch("http://localhost:3000/shopping_carts")
    ]).then((responses) => {
        return Promise.all(responses.map((response) => {
            return response.json();
        }));
    }).then((data) => {
        data[1].data.forEach(user => {
            return new User(user.attributes);
        })
        data[0].data.forEach(product => {
            return JewelryProduct.display(new JewelryProduct(product.attributes));
        })
        data[2].forEach(cart => {
            new Cart(cart)
        })
    }).catch(err => console.log(err));

    submitUserBtn().addEventListener('submit', User.handleSubmit)
    submitButton().addEventListener('submit', JewelryProduct.handleSubmit)
    cartImg().addEventListener('click', Cart.display)
    
    xButton().addEventListener('click', event => {
        jewelryForm().style.display = 'none';
    })
    
    for (let i = 0; i < images().length; i++) {
        images()[i].addEventListener('click', JewelryProduct.renderJewelryForm)
    }

    document.querySelector('div#cart img').addEventListener('click', e => {
       e.target.parentElement.style.display = 'none';
       mainDiv().style.display = 'block';
    })
})
        