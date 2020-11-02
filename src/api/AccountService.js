import HttpRequest from './http_request'
// import axios from "axios"

class AccountService extends HttpRequest {
    constructor(){
        // post for account spring boot application
        super('http://localhost:8085/')
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
}

export default AccountService