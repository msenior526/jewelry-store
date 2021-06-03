class JewelryProduct {
    constructor(name, metal_type, jewelry_type) {
        this.name = name,
        this.metal_type = metal_type,
        this.jewelry_type = jewelry_type
    }

    static fetchProducts() {
        let jewelryList = document.getElementById('jewelry-list')
        return fetch("http://localhost:3000/jewelry_products")
        .then(resp => resp.json())
        .then(json => {
            return json.data.forEach((product) => {
                document.appendChild(product);
            })
        })
    }

    static form() {
        return `
            <h4>Form for Custom Jewelry</h4>
            <img src='images/ring-size-chart.jpeg' alt="Ring Size Chart" id="ring-size-chart">
            <form>
                <label for='name'>Name:</label>
                <input type='text' id="custom-name" placeholder="Custom Name"><br>
        
                <label for='font-family'>Font Family:</label>
                <input type='text' id='custom-font-family'><br>
        
                <label for='metal-type'>Metal-type:</label>
                <input type='text' id='custom-metal-type'><br>
        
                <label for='size'>Size:</label>
                <input type='text' id='custom-size'><br>
        
                <label for='quantity'>Quantity:</label>
                <input type='number' id='custom-quantity'><br>

                <input type='submit' value="Add To Cart">
            </form>`;
    }
}

JewelryProduct.fetchProducts();