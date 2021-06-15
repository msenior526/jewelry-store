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
        let removeButton = document.createElement('button');
        removeButton.textContent = "Remove"
        li.innerHTML = `
        <p>${item.name}</p>
        <p>${item.jewelryType}</p>
        <p>${item.metalType}</p>
        <p>${item.size}</p>
        `
        cart.appendChild(li);
        li.appendChild(removeButton);
        let product = item;
        removeButton.addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();
            for( let i = 0; i < currentCart.products.length; i++){ 
                if ( currentCart.products[i] === product) { 
                    currentCart.products.splice(i, 1); 
                }
            }
            cart.removeChild(e.target.parentElement);
            console.log(currentCart.products)
        })
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
        const cart =  document.getElementById('cart');
        const price = document.createElement('p');
        const currentCart = Cart.findByUserId(User.currentUserId);
        price.textContent = `Subtotal $${currentCart.calculatePrice()}`
        cart.appendChild(price);
            let button = document.createElement('button');
            button.id = 'checkout';
            button.innerText = 'Checkout';
            cart.appendChild(button);
            cart.style.display = 'block';
            button.addEventListener('click', Cart.checkout)
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

    // static removeFromCart(e) {
    //     e.preventDefault();
    //     debugger
    //     cart.removeChild(e.target.parentElement);
    // }
}