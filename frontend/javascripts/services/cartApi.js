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
            const cart = new Cart(json.data.attributes);
            Cart.currentCart = cart;
        })
        .catch(err => console.log(err))
    }

    static updateCart(data) {
        debugger
        return fetch(`https://localhost:3000/shopping_carts/${data.id}`, {
            method: 'PATCH', 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
              },
              body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(json => {debugger})
    }
}