import HttpRequest from './http_request'

class ReviewServiceAPI extends HttpRequest {
    constructor(){
        super('http://localhost:8086')
    }

    async getCommentsFromAPI (gameTag) {
        const response = await this.get('/api/review/' + gameTag)
        return response
    }

    async createReview(formdata) {
        const response = await this.create('/api/review', formdata)
        return response
    }

    async editReview(formdata) {
        const response = await this.update('/api/review', formdata)
        return response
    }

}

export default ReviewServiceAPI