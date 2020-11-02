import HttpRequest from './http_request'

class ReviewServiceAPI extends HttpRequest {
    constructor(){
        super('http://localhost:8000')
    }

    async getCommentFromAPI () {
        const response = await this.get('/api/firebaseapi')
        return response
    }

}

export default ReviewServiceAPI