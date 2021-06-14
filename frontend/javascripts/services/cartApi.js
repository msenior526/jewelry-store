class CartApi {
    static createCart(data) {
        return fetch(`http://localhost:3000/shopping_carts`, {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
              },
              body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(json => {debugger})
        .catch(err => console.log(err))
    }
}