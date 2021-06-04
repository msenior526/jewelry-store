class JewelryProductApi {
    static fetchProducts() {
        return fetch("http://localhost:3000/jewelry_products")
        .then(resp => resp.json())
        .then(json => {
            return json.data.forEach((product) => {
                const {name, size, jewelry_type, metal_type} =  product.attributes
                let jewelry = new JewelryProduct(name, size, jewelry_type, metal_type);
                displayJewelry(jewelry);
            });
        })
    }
}