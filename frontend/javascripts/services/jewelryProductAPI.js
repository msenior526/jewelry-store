class JewelryProductApi {
    static fetchProducts() {
        return fetch("http://localhost:3000/jewelry_products")
        .then(resp => resp.json())
        .then(json => {
                return json.data.forEach((product) => {
                    const {id, name, price, quantity, size, jewelry_type, metal_type} =  product.attributes;
                    let jewelry = new JewelryProduct(id, name, price, quantity, size, jewelry_type, metal_type);
                    jewelry.display();
            });
        })
        .catch(err => alert(err))
    }

    static createProducts() {
        debugger
        return fetch("http://localhost:3000/jewelry_products",  {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(data)
          });
    }
}