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
            User.currentUserId = user.id;
            new Cart(user.id)

            // user.display();
        })
        // error message?
        .catch(err => console.log(err))
    }
}