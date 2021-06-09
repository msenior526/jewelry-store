class UserApi {
    static fetchUsers() {
        return fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then(json => {
            json.data.forEach(user => {
                const {id, username} = user.attributes;
                const newUser = new User(id, username);
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
        .then(resp => {debugger})
        .catch(err => alert(err))
    }
}