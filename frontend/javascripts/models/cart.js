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
        // const cartId = Cart.findByUserId(User.currentUserId);
        const cart =  document.getElementById('cart');
        // debugger
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
                    <p>Subtotal${cartId.calculatePrice()}</p>
                `
                return cart.appendChild(li);
            })
        }

    }
}