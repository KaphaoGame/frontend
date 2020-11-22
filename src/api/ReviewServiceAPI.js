import HttpRequest from './http_request'

class ReviewServiceAPI extends HttpRequest {
    constructor(){
        super('https://reviewservice-kaphaogame.herokuapp.com/')
    }

    async getCommentsFromAPI (gameTag) {
        const response = await this.get('/api/review/' + gameTag)
        return response
    }

    async createReview(formdata) {
        const response = await this.create('/api/review', formdata)
        return response
    }

    async deleteReview(gameTagAndUsername) {
        const response = await this.create('/api/review/' + gameTagAndUsername, gameTagAndUsername)
        return response
    }
}

export default ReviewServiceAPI