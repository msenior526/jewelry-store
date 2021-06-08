class JewelryProduct {
    static all = []
    constructor(id, username, name,  price, quantity, size, jewelryType, metalType, userId) {
        this.id = id,
        this.username = username,
        this.name = name,
        this.price = price,
        this.quantity = quantity,
        this.size = size,
        this.metalType = metalType,
        this.jewelryType = jewelryType,
        JewelryProduct.all.push(this)
    }

    get user() {

    }

    display() {
        let listItem = document.createElement('li')
        listItem.innerHTML = `
        <h3>${this.name}</h3>
        <p>Created by: ${this.username}</p>
        <p>Size: ${this.size}</p>
        <p>Price: ${this.price}</p>
        <p>quantity: ${this.quantity}</p>
        <p>metal_type: ${this.metalType}</p>
        <p>jewelry_type: ${this.jewelryType}</p>
        `
        return jewelryList.appendChild(listItem);
   }
}
