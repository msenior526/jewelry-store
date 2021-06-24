class User {
    static all = [];
    static currentUser = null;
    
    constructor({id, username}) {
        this.id = id, 
        this.username = username,
        this.carts = []
        User.all.push(this)
    }

    display() {
        let listItem = document.createElement('li')
        listItem.innerHTML = `
        <h4>${this.username}</h3>
        `
        return userList().appendChild(listItem);
    }

    static handleSubmit(e) {
            e.preventDefault();
            let formData = {
                username: document.getElementById('user-username').value,
                password: passwordInput().value
            }
            UserApi.createUsers(formData);
            e.target.reset();
            mainDiv().style.display = "block"
            enterSpaDiv().style.display = 'none'
            document.querySelector('h1.brand').addEventListener('click', e => {
                mainDiv().style.display = "block"
                document.getElementById('cart').style.display = 'none';
            })
    }

    static findById(id) {
        return this.all.find(user => user.id === id)
    }

    static displayPreviousCarts(carts) {

        const ul = document.createElement('ul');
        document.getElementById('user-carts').appendChild(ul);
        for( let i = 0; i < carts.length; i++){ 
            if (carts[i].products.length === 0) { 
                carts.slice(i, 1); 
            } else if (carts[i].products.length >= 1) {
                const div = document.createElement('div');
                div.id = `cart-${carts[i].id}`;
                div.innerText = `Shopping cart`
                ul.appendChild(div);
                carts[i].products.forEach(product => {
                const li = document.createElement('li');
                li.id = `prod-${product.id}`;
                li.innerHTML = `
                <p>${product.name}</p>
                <p>${product.jewelry_type}</p>
                <p>$${product.price}</p>
                `
                div.appendChild(li);
                debugger
            })
            }
        }
    }
    
}