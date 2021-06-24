class User {
    static all = [];
    static currentUserId = null;
    
    constructor({id, username}) {
        this.id = id, 
        this.username = username,
        User.all.push(this)
    }

    get carts() {
        return Cart.all.filter(cart => cart.userId === User.currentUserId)
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
}