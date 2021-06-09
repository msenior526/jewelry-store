class UserApi {
    static fetctUsers() {
        return fetch('localhost:3000/users')
        .then(resp => {debugger})
    }
}