class JewelryProductApi {
    static fetchProducts() {
        return fetch("http://localhost:3000/jewelry_products")
        .then(resp => resp.json())
        .then(json => {
            return json.data.forEach((product) => product);
        })
    }
}