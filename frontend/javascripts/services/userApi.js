class UserApi {
    static fetchUsers() {
        return fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then(json => {
            json.data.forEach(user => {
                const newUser = new User(user.attributes);
                return newUser.display();
            })
        })
        .catch(err => alert(err))
    }

    static createUsers(data) {
        return fetch('http://localhost:3000/users', {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(json => {
            let user = new User(json);
            let newCart = new Cart(user.id)
            debugger
            // user.display();
        })
        // Add error message if name is taken
        .catch(err => console.log(err))
    }
}