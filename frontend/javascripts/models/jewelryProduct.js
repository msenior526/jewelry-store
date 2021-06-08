class JewelryProduct {
    static all = []
    constructor(id, name,  price, quantity, size, jewelry_type, metal_type, font_family, userId) {
        this.id = id,
        this.name = name,
        this.price = price,
        this.quantity = quantity,
        this.size = size,
        this.jewelryType = jewelry_type,
        this.metalType = metal_type,
        this.fontFamily = font_family,
        this.userId = userId,
        JewelryProduct.all.push(this)
    }

    get user() {

    }

    display() {
        let listItem = document.createElement('li')
        listItem.innerHTML = `
        <h3>${this.name}</h3>
        <p>Created by: ${this.userId}</p>
        <p>Size: ${this.size}</p>
        <p>Price: ${this.price}</p>
        <p>quantity: ${this.quantity}</p>
        <p>metal_type: ${this.metalType}</p>
        <p>jewelry_type: ${this.jewelryType}</p>
        `
        return jewelryList.appendChild(listItem);
   }
}
