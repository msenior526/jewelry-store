class User {
    static all = [];
    static currentUserId = null;
    
    constructor({id, username}) {
        this.id = id, 
        this.username = username,
        User.all.push(this)
    }

    display() {
        let listItem = document.createElement('li')
        listItem.innerHTML = `
        <h3>${this.username}</h3>
        `
        return userList.appendChild(listItem);
    }

    static handleSubmit(e) {
            e.preventDefault();
            let formData = {
                username: document.getElementById('username').value,
                password: passwordInput
            }
            UserApi.createUsers(formData);
            e.target.reset();
            mainDiv.style.display = "block"
            enterSpaDiv.style.display = 'none'
    }

    static findByName(username) {
        return this.all.find(user => user.username === username)
    }

    static findById(id) {
        return this.all.find(user => user.id === id)
    }
}