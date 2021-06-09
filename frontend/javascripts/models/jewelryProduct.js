class JewelryProduct {
    static all = []
    constructor({id, name,  price, quantity, size, jewelry_type, metal_type, font_family, user_id}) {
        this.id = id,
        this.name = name,
        this.price = price,
        this.quantity = quantity,
        this.size = size,
        this.jewelryType = jewelry_type,
        this.metalType = metal_type,
        this.fontFamily = font_family,
        this.userId = user_id,
        JewelryProduct.all.push(this)
    }

    get username() {
        return User.findById(this.userId).username
    }

    static handleSubmit = () => {
        submitButton.addEventListener('click', event => {
            event.preventDefault();
            const user = User.findByName(`${usernameInput.value}`)
            let formData = {
                name: nameInput.value,
                user_id: user.id,
                quantity: quantityInput.value,
                size: sizeInput.value,
                metal_type: metalInput.value,
                font_family: fontInput.value,
                jewelry_type: typeInput.value,
            }
            JewelryProductApi.createProducts(formData);
            return jewelryForm().hidden = true;

        })
    }

    static findById(id) {
        return this.all.filter(prod => prod.id === id)
    }



    static display = (prod) => {
        let listItem = document.createElement('li')
        // debugger
        let user = User.findById(prod.userId)
        listItem.innerHTML = `
        <h3>${prod.name}</h3>
        <p>Created by: ${user.username}</p>
        <p>Size: ${prod.size}</p>
        <p>Price: ${prod.price}</p>
        <p>quantity: ${prod.quantity}</p>
        <p>metal_type: ${prod.metalType}</p>
        <p>jewelry_type: ${prod.jewelryType}</p>
        `
        return jewelryList.appendChild(listItem);
   }
}
