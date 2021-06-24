class User {
    static all = [];
    static currentUser = null;
    
    constructor({id, username, shopping_carts}) {
        this.id = id, 
        this.username = username,
        this.carts = [],
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

    static displayPreviousCarts(products) {
        const ul = document.createElement('ul');
        document.getElementById('user-carts').appendChild(ul);
                products.forEach(product => {
                const li = document.createElement('li');
                li.id = `prod-${product.id}`;
                li.innerHTML = `
                <p>${product.name}</p>
                <p>${product.jewelry_type}</p>
                <p>$${product.price}</p>
                `
                ul.appendChild(li);
            })
    }
    
}