class JewelryProductApi {
    static fetchProducts() {
        return fetch("http://localhost:3000/jewelry_products")
        .then(resp => resp.json())
        .then(json => {
                return json.data.forEach((product) => {
                    // let user =  User.findById(userId);
                    let jewelry = new JewelryProduct(product.attributes);
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
          //   // for (const property in json) {
          //   //   alert(`${property} ${json[property]}`)
          //   // }
            let newJewels = new JewelryProduct(json);
          //   // debugger
              JewelryProduct.display(newJewels);
          })
          .catch(err => alert(err));
    }
}