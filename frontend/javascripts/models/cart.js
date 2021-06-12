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
        this.products.reduce(prod => {
            debugger
            return start += prod.price;
        })
    }
}