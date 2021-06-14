class Cart {
    static all = [];
    constructor(user_id) {
        this.userId = user_id,
        this.products = [],
        Cart.all.push(this)
    }

    static addItemToCart(item) {
        alert(`${item.name} ${item.jewelryType} was added to your cart`)
        // const cart = Cart.findByUserId(User.currentUserId);
        // cart.products.push(item);
        // console.log(cart.products);
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
        alert('this is your shopping cart')
        // debugger
        // if ((cartId.products.length === 0) || (cartId.products == undefined)) {
        //     cart.innerText = "You have no products i nyour csrt. Start shopping now."
        // } else {
        //     cartId.products.forEach(item => {
        //         const li = document.createElement('li');
        //         const removeButton = document.createElement('button');
        //         removeButton.innerText = 'Remove'
        //         li.innerHTML = `
        //             <p>${item.name}</p>
        //             <p>${item.jewelryType}</p>
        //             <p>${item.metalType}</p>
        //             <p>${item.size}</p>
        //             ${removeButton}
        //         `
        //         
        //         
        //         cart.appendChild(li);
        //         removeButton.addEventListener('click', Cart.removeFromCart(prod, e))
        //     })
        //      <p>Subtotal${cartId.calculatePrice()}</p>
        //      let button = document.createElement('button');
        //      button.id = 'checkout';
        //      button.innerText = 'Checkout';
        //      cart.appendChild(button);
        //      button.addEventListener('click', Cart.checkout)
        // }
    }

    static checkout(e) {
        e.preventDefault();
        let data = {
            products: thisCart.products,
            user_id: thisCart.userId
        }
        CartApi.createCart(data);
    }

    static removeFromCart(prod, e) {
        e.preventDefault();
        thisCart.products.splice(prod);
    }
}