class JewelryProduct {

    static handleSubmit(e) {
            e.preventDefault();
            const user = User.currentUser.id;
            let formData = {
                name: nameInput().value,
                user_id: user,
                size: sizeInput().value,
                metal_type: metalInput().value,
                font_family: fontInput().value,
                jewelry_type: typeInput().value,
            }
            JewelryProductApi.createProducts(formData);
            e.target.reset();
            alert("Success! Scroll down to see your item!")
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

    static display = (prod) => {
        debugger
        let listItem = document.createElement('li')
        listItem.innerHTML = `
        <div class='product' id='prod-${prod.id}'>
        <h4>${prod.name}</h3>
        <p>Size: ${prod.size}</p>
        <p>Price: ${prod.price}</p>
        <p>Metal Type: ${prod.metal_type}</p>
        <p>Jewelry Type: ${prod.jewelry_type}</p>
        <button class='add-to-cart'> Add To Cart</button>
        </div>
        `
        jewelryList().appendChild(listItem);
            
        let div = document.querySelector(`div#prod-${prod.id}`)
        document.querySelector(`div#prod-${prod.id} button.add-to-cart`).addEventListener('click', (e) => Cart.addItemToCart(prod, e))
   }
}
