class JewelryProductApi {
    static fetchProducts() {
        return fetch("http://localhost:3000/jewelry_products")
        .then(resp => resp.json())
        .then(json => {
                return json.data.forEach((product) => {
                    const {id, name, price, quantity, size, jewelry_type, metal_type} =  product.attributes
                    let jewelry = new JewelryProduct(id, name, price, quantity, size, jewelry_type, metal_type);
                    
            });
        })
        .catch(err => alert(err))
    }
}