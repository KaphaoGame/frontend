import HttpRequest from './http_request'
// import axios from "axios"

class AccountService extends HttpRequest {
    constructor(){
        // post for account spring boot application
        super('https://accountservice-kaphaogame.herokuapp.com/')
    }

    async createKaphaoGameAccount(formdata) {
        const response = await this.create("api/registerAccount", formdata)
        return response
    }

    async getKaphaoGameAccount() {
        const response = await this.get('api/getAllAccounts')
        return response
    }

    async loginKaphaoGameAccount(formdata) {
        const response = await this.create('api/loginAccount', formdata)
        return response.data
    }

    async editKaphaoGameAccount(formdata) {
        const response = await this.update("api/editAccount", formdata)
        return response
    }

    async deleteKaphaoGameAccount(username) {
        const response = await this.create("api/" + username, username)
        return response
    }
}

export default AccountService