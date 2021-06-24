class UserApi {
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
            let user = new User(json.data.attributes);
            User.currentUser = user;
            const userData = { user_id: user.id}
            CartApi.createCart(userData)
        })
        .catch(err => console.log(err))
    }
}