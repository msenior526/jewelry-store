class JewelryProduct {
    static all = []
    constructor({id, name,  price, size, jewelry_type, metal_type, font_family, user_id}) {
        this.id = id,
        this.name = name,
        this.price = price,
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

    static handleSubmit(e) {
            e.preventDefault();
            const user = User.currentUserId;
            let formData = {
                name: nameInput.value,
                user_id: user,
                quantity: quantityInput.value,
                size: sizeInput.value,
                metal_type: metalInput.value,
                font_family: fontInput.value,
                jewelry_type: typeInput.value,
            }
            JewelryProductApi.createProducts(formData);
            e.target.reset();
    }

    static renderJewelryForm = (e) => {
        jewelryForm().style.display = 'block';
        switch (e.target.id) {
            case "ring-img":
                typeInput.value = "ring";
                break;
            case "necklace-img":
                typeInput.value = "necklace";
                break;
            case "bracelet-img":
                typeInput.value = "bracelet";
                break;
        }
    }

    static findById(id) {
        return this.all.filter(prod => prod.id === id)
    }



    static display = (prod) => {
        let user = User.findById(prod.userId);
        let listItem = document.createElement('li')
        listItem.innerHTML = `
        <div class='product' id='prod-${prod.id}'>
        <h4>${prod.name}</h3>
        <p>Created by: ${user.username}</p>
        <p>Size: ${prod.size}</p>
        <p>Price: ${prod.price}</p>
        <p>Metal Type: ${prod.metalType}</p>
        <p>Jewelry Type: ${prod.jewelryType}</p>
        <button class='add-to-cart'> Add To Cart</button>
        </div>
        `
        jewelryList.appendChild(listItem);
            
        let div = document.querySelector(`div#prod-${prod.id}`)
        switch(prod.jewelryType) {
            case "necklace":
                div.style.backgroundImage = "url('images/rose-gold-necklace.jpg')";
              break;
            case "ring":
                div.style.backgroundImage = "url('images/silver-ring.jpg')";
                break;
                case "bracelet":
                    div.style.backgroundImage = "url('images/gold-bracelet.jpeg')";
              break;
            default:
                div.style.backgroundImage = "url('images/rose-gold-necklace.jpg')";
          }

        document.querySelector(`div#prod-${prod.id} button.add-to-cart`).addEventListener('click', (e) => Cart.addItemToCart(prod, e))
   }
}
