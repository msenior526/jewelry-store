class Cart {
    static all = [];
    constructor(user_id) {
        this.userId = user_id,
        this.products = [],
        Cart.all.push(this)
    }

    static addItemToCart(item) {
        const cart = Cart.findByUserId(User.currentUserId);
        cart.products.push(item);
        console.log(cart.products);
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
        const cartId = Cart.findByUserId(User.currentUserId);
        const cart =  document.getElementById('cart');
        if ((cartId.products.length === 0) || (cartId.products == undefined)) {
            cart.innerText = "You have no products i nyour csrt. Start shopping now."
        } else {
            cartId.products.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <p>${item.name}</p>
                    <p>${item.jewelryType}</p>
                    <p>${item.metalType}</p>
                    <p>${item.size}</p>
                    <button id="remove">Remove</button>
                `
                cart.appendChild(li);
                document.getElementById('remove').addEventListener('click', Cart.removeFromCart)
            })
            const price = document.createElement('p');
            price.textContent = `Subtotal $${cartId.calculatePrice()}`
            let button = document.createElement('button');
            button.id = 'checkout';
            button.innerText = 'Checkout';
            cart.appendChild(price);
            cart.appendChild(button);
            button.addEventListener('click', Cart.checkout)
        }
    }

    static checkout(e) {
        e.preventDefault();
        let thisCart = Cart.findByUserId(User.currentUserId);
        debugger 
        let data = {
            products: thisCart.products,
            user_id: thisCart.userId
        }
        CartApi.createCart(data);
        // OR JewelryProduct.updateProduct(data);
    }

    static removeFromCart(prod, e) {
        e.preventDefault();
        e.target.parentElement
    }
}