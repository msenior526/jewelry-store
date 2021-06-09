class JewelryProductApi {
    static fetchProducts() {
        return fetch("http://localhost:3000/jewelry_products")
        .then(resp => resp.json())
        .then(json => {
                return json.data.forEach((product) => {
                    let {id, name, price, quantity, size, jewelry_type, metal_type, font_family} =  product.attributes;
                    let user_id = product.attributes.user_id;
                    // let user =  User.findById(userId);
                    let jewelry = new JewelryProduct(id, name, price, quantity, size, jewelry_type, metal_type, font_family, user_id);
                    // debugger
                    JewelryProduct.display(jewelry);
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
            for (const property in json) {
              alert(`${property} ${json[property]}`)
            }
            debugger
              // let newJewels = new JewelryProduct(json);
              // debugger
              // newJewels.display();
          })
          .catch(err => alert(err));
    }
}