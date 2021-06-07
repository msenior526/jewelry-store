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
        listItem.innerHTML = `
        <h3>${this.name}</h3>
        <p>Size: ${this.size}</p>
        <p>Price: ${this.price}</p>
        <p>quantity: ${this.quantity}</p>
        <p>metal_type: ${this.metalType}</p>
        <p>jewelry_type: ${this.jewelryType}</p>
        `
        return jewelryList.appendChild(listItem);
   }
}
