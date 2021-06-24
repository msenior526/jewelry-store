class Cart {
    static all = [];
    static currentCart = null;
    static currentCartProducts = null;

    constructor({id, user_id}) {
        this.id = id,
        this.userId = user_id,
        this.products = [],
        Cart.all.push(this)
    }

    static addItemToCart(item) {
        const cart =  document.getElementById('cart');
        Cart.currentCart.products.push(item);
        Cart.currentCartProducts = Cart.currentCart.products;
        console.log(Cart.currentCartProducts);
        alert("Item added to cart!");
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
        mainDiv().style.display = 'none';
        document.getElementById('cart').style.display = 'block';
        if (Cart.currentCartProducts.length === 0) {
           document.getElementById('cart-products').innerHTML = `
            <p>You have no products in your cart. Start shopping now!`;
        } else {
            document.getElementById('cart-products').innerHTML = 
            `
            <ul id='products'></ul>
            `;
            const price = Cart.currentCart.calculatePrice()
            Cart.currentCartProducts.forEach((product) => Cart.displayProduct(product))
            const button = document.createElement('button');
            const h5 = document.createElement('h5');
            h5.id = 'subtotal';
            h5.textContent = `Subtotal: $${Cart.currentCart.calculatePrice()}`
            button.textContent = 'Checkout'
            document.getElementById('cart-products').appendChild(h5);
            document.getElementById('cart-products').appendChild(button);
            button.addEventListener('click', Cart.checkout)
        }
    }
    
    static checkout(e) {
        e.preventDefault();
        let jewelry_product_ids = Cart.currentCartProducts.map(product => {
            return product.id;
        })
        let data = {
            shopping_cart: {
                jewelry_product_ids: jewelry_product_ids
            }
        }
        CartApi.updateCart(data);
    }
    
    static displayProduct(product) {
        const ul = document.getElementById('products');
        const li = document.createElement('li');
        li.id = `prod-${product.id}`;
        let removeButton = document.createElement('button');
        removeButton.textContent = "Remove"
        li.innerHTML = `
        <p>${product.name}</p>
        <p>${product.jewelryType}</p>
        <p>${product.metalType}</p>
        <p>${product.size}</p>
        <p>$${product.price}</p>
        `
        ul.appendChild(li);
        li.appendChild(removeButton);
        removeButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            for( let i = 0; i < Cart.currentCartProducts.length; i++){ 
                if ( Cart.currentCartProducts[i] === product) { 
                    Cart.currentCartProducts.splice(i, 1); 
                }
            }
            ul.removeChild(e.target.parentElement);
            Cart.updatePrice();
            console.log(Cart.currentCartProducts)
        })
    }

    static updatePrice() {
        return document.getElementById('subtotal').textContent = `Subtotal: $${Cart.currentCart.calculatePrice()}`;
    }

    static displayConfirmation() {
        document.querySelector('nav img').style.display = 'none';
        document.querySelector('nav ul li.nav-element').style.display = 'none';
        document.getElementById('cart').innerHTML = `
        <div id= 'confirmation-msg'>
            <h2>THANK YOU FOR SHOPPING WITH US AT THE JEWELRY STORE!</h2>
            <div id='cart-products'>
            <ul id='products'>
            </ul>
            </div>
        </div>`
        const ul = document.getElementById('products');
        Cart.currentCartProducts.forEach(product => {
        const li = document.createElement('li');
        li.innerHTML = `
        <p>${product.name}</p>
        <p>${product.jewelry_type}</p>
        <p>${product.metal_type}</p>
        <p>${product.size}</p>
        <p>$${product.price}</p>
        `
        return ul.appendChild(li);
        })
        const price = document.createElement('h5');
        price.textContent = `Subtotal: $${ Cart.currentCart.calculatePrice()}`
        document.getElementById('cart').appendChild(price);
    }
}