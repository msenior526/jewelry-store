class CartApi {
    static createCart(data) {
        return fetch("http://localhost:3000/shopping_carts", {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
              },
              body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(json => {
            const cart = new Cart(json);
            Cart.currentCart = cart;
            // User.currentUser.carts.push(Cart.findByUserId(User.currentUser.id))
        })
        .catch(err => console.log(err))
    }

    static updateCart(data) {
        const currentId = Cart.currentCart.id;
        return fetch(`http://localhost:3000/shopping_carts/${currentId}`, {
            method: 'PATCH', 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
              },
              body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(json => {
            User.displayPreviousCarts(json.jewelry_products)
            Cart.displayConfirmation()
        })
        .catch(err => console.log(err))
    }
}