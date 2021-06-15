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
        mainDiv.innerHTML = "";
        const div =  document.createElement('div');
        div.id = 'cart';
        mainDiv.appendChild(div);
        const span = document.createElement('span');
        span.innerText = 'x';
        div.appendChild(span);
        if (currentCart.products.length === 0) {
           div.innerHTML = `
            <span>&times</span>
            <h2>YOUR CART</h2>
            <div class='content'>
            <p>You have no items in your cart. Start shopping.</p>
            </div>
            ` 
        } else {
            const price = currentCart.calculatePrice()
            div.innerHTML = `
            <span>&times</span>
            <h2>YOUR CART</h2>
            <div class='content'>
            <ul id='cart-product-list'></ul>
            <h5>Subtotal: ${price}</h6>
            </div>
            ` 
            currentCart.products.forEach((product) => Cart.displayProduct(product))
        }
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
    
    static displayProduct(product) {
        const ul = document.getElementById('cart-product-list');
        const li = document.createElement('li');
        li.id = `prod-${product.id}`;
        let removeButton = document.createElement('button');
        removeButton.textContent = "Remove"
        li.innerHTML = `
        <p>${product.name}</p>
        <p>${product.jewelryType}</p>
        <p>${product.metalType}</p>
        <p>${product.size}</p>
        `
        ul.appendChild(li);
        li.appendChild(removeButton);
        removeButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            let currentCart = Cart.findByUserId(User.currentUserId);
            for( let i = 0; i < currentCart.products.length; i++){ 
                if ( currentCart.products[i] === product) { 
                    currentCart.products.splice(i, 1); 
                }
            }
            debugger
            ul.removeChild(e.target.parentElement);
            console.log(currentCart.products)
        })
    }
}