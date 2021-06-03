class JewelryProductApi {
    static fetchProducts() {
        let jewelryList = document.getElementById('jewelry-list')
        return fetch("http://localhost:3000/jewelry_products")
        .then(resp => resp.json())
        .then(json => {
            return json.data.forEach((product) => {
                console.log(product);
            })
        })
    }
}