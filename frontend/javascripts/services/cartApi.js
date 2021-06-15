class CartApi {
    static createCart(data) {
        debugger
        return fetch(`http://localhost:3000/shopping_carts`, {
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
}