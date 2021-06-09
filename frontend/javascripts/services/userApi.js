class UserApi {
    static fetchUsers() {
        return fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then(json => {
            json.data.forEach(user => {
                const products = user.attributes.jewelry_product_ids
                const {id, username} = user.attributes;
                const newUser = new User(id, username, products);
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
        .then(json => {console.log(json)})
        // Add error message if name is taken
        .catch(err => console.log(err))
    }
}