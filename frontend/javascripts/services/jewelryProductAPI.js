class JewelryProductApi {
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
            JewelryProduct.display(new JewelryProduct(json))
          })
          .catch(err => alert(err));
    }
}