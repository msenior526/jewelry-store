class JewelryProduct {
    static all = []
    constructor(id, name,  price, quantity, size, jewelryType, metalType) {
        this.id = id,
        this.name = name,
        this.price = price,
        this.quantity = quantity,
        this.size = size,
        this.metalType = metalType,
        this.jewelryType = jewelryType,
        JewelryProduct.all.push(this)
    }

    display() {
        let listItem = document.createElement('li')
        return this.all.forEach(product => {
            listItem.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: ${product.price}</p>
        <p>quantity: ${product.quantity}</p>
        <p>metal_type: ${product.metalType}</p>
        <p>jewelry_type: ${product.jewelryType}</p>
        `
        jewelryList.appendChild(listItem);
        })
   }
}
