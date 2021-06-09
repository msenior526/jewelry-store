class User {
    static all = [];
    constructor(id, username) {
        this.id = id, 
        this.username = username
    }

    display() {
        let listItem = document.createElement('li')
        listItem.innerHTML = `
        <h3>${this.username}</h3>
        `
        return userList.appendChild(listItem);
    }

    static handleSubmit() {
        submitUserBtn.addEventListener('click', e => {
            e.preventDefault;
            debugger
        }
        )
    }
}