class JewelryProductApi {
    static fetchProducts() {
        return fetch("http://localhost:3000/jewelry_products")
        .then(resp => resp.json())
        .then(json => {
                return json.data.forEach((product) => {
                    const {id, name, price, quantity, size, jewelry_type, metal_type, font_family} =  product.attributes;
                    const userId = product.attributes.user.id;
                    // debugger
                    let jewelry = new JewelryProduct(id, name, price, quantity, size, jewelry_type, metal_type, userId, font_family);
                    jewelry.display();
            });
        })
        .catch(err => alert(err))
    }

    static createProducts(data) {
        return fetch("http://localhost:3000/jewelry_products",  {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(data)
          })
          .then(resp => resp.json())
          .then(json => {
            debugger
              let newJewels = new JewelryProduct(json);
          })
          .catch(err => alert(err));
    }
}