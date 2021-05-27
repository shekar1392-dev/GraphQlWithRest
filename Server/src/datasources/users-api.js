const { RESTDataSource } = require('apollo-datasource-rest');

class UserApi extends RESTDataSource{
    constructor() {
        super();
        this.baseURL='http://localhost:8080/';
    }

    getAllUsers(){
        return this.get(`users`);
    }
    getUserById(userId){
        return this.get(`getUserById/${userId}`);
    }

}
module.exports = UserApi;