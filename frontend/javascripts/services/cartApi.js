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
        .then(resp.json())
    }
}