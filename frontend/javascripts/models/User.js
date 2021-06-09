class User {
    static all = [];
    constructor(id, username, products = []) {
        this.id = id, 
        this.username = username,
        this.products = products
        User.all.push(this)
    }

    display() {
        let listItem = document.createElement('li')
        listItem.innerHTML = `
        <h3>${this.username}</h3>
        `
        return userList.appendChild(listItem);
    }

    static handleSubmit() {
        submitUserBtn.addEventListener('click', event => {
            debugger
            event.preventDefault;
            let formData = {
                username: document.getElementById('username').value
            }
            return UserApi.createUsers(formData);
        })
    }

    static findByName(username) {
        return this.all.find(user => user.username === username)
    }

    static findById(id) {
        return this.all.find(user => user.id === id)
    }
}