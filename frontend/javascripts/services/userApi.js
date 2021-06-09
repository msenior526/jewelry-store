class UserApi {
    static fetchUsers() {
        return fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then(json => {
            json.data.forEach(user => {
                const {id, username} = user.attributes;
                const newUser = new User(id, username);
                return newUser;
            })
        })
    }
}