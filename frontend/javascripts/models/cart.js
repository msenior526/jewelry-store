class Cart {
    static all = [];
    constructor(user_id) {
        this.userId = user_id,
        this.products = [],
        Cart.all.push(this)
    }

    static addItemToCart(item) {
        const currentCart = Cart.findByUserId(User.currentUserId);
        const cart =  document.getElementById('cart');
        currentCart.products.push(item);
        console.log(currentCart.products);
        const li = document.createElement('li');
        li.id = `prod-${item.id}`;
        let button = document.createElement('button');
        button.textContent = "Remove"
        li.innerHTML = `
        <p>${item.name}</p>
        <p>${item.jewelryType}</p>
        <p>${item.metalType}</p>
        <p>${item.size}</p>
        `
        cart.appendChild(li);
        li.appendChild(button);
        button.addEventListener('click', Cart.removeFromCart)
    }

    static findByUserId(id) {
        return this.all.find(cart => cart.userId === id)
    }

    calculatePrice() {
        return this.products.reduce((total, prod) => {
            return total += prod.price;
        }, 0)
    }

    static display() {
        const currentCart = Cart.findByUserId(User.currentUserId);
        const cart =  document.getElementById('cart');
        const price = document.createElement('p');
            price.textContent = `Subtotal $${currentCart.calculatePrice()}`
            let button = document.createElement('button');
            button.id = 'checkout';
            button.innerText = 'Checkout';
            cart.appendChild(price);
            cart.appendChild(button);
            button.addEventListener('click', Cart.checkout)
            cart.hidden = false;
    }

    static checkout(e) {
        e.preventDefault();
        let thisCart = Cart.findByUserId(User.currentUserId);
        let jewelry_product_ids = thisCart.products.map(product => {
            return product.id;
        })
        let data = {
            user_id: thisCart.userId,
            jewelry_product_ids: jewelry_product_ids
        }
        CartApi.createCart(data);
        // OR JewelryProduct.updateProduct(data);
    }

    static removeFromCart(e) {
        debugger
        e.preventDefault();
        e.target.parentElement
    }
}