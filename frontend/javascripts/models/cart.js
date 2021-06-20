class Cart {
    static all = [];
    static currentCart = null;
    constructor({id, user_id}) {
        this.id = id,
        this.userId = user_id,
        this.products = [],
        Cart.all.push(this)
    }

    static addItemToCart(item) {
        const cart =  document.getElementById('cart');
        Cart.currentCart.products.push(item);
        console.log(Cart.currentCart.products);
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
        mainDiv.style.display = 'none';
        document.getElementById('cart').style.display = 'block';
        if (Cart.currentCart.products.length === 0) {
           document.getElementById('cart-products').innerHTML = `
            <p>You have no products in your cart. Start shopping now!`;
        } else {
            document.getElementById('cart-products').innerHTML = 
            `
            <ul id='products'></ul>
            `;
            const price = Cart.currentCart.calculatePrice()
            Cart.currentCart.products.forEach((product) => Cart.displayProduct(product))
            const button = document.createElement('button');
            button.textContent = 'Checkout'
            document.getElementById('cart-products').appendChild(button);
            button.addEventListener('click', Cart.checkout)
        }
    }
    
    static checkout(e) {
        e.preventDefault();
        let jewelry_product_ids = Cart.currentCart.products.map(product => {
            return product.id;
        })
        let data = {
            shopping_cart: {
                jewelry_product_ids: jewelry_product_ids
            }
        }
        CartApi.updateCart(data);
        debugger
        // OR JewelryProduct.updateProduct(data);
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
        `
        ul.appendChild(li);
        li.appendChild(removeButton);
        removeButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            for( let i = 0; i < Cart.currentCart.products.length; i++){ 
                if ( Cart.currentCart.products[i] === product) { 
                    Cart.currentCart.products.splice(i, 1); 
                }
            }
            ul.removeChild(e.target.parentElement);
            console.log(Cart.currentCart.products)
        })
    }
}