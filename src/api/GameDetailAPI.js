import HttpRequest from './http_request'

class GameDetailAPI extends HttpRequest {
  constructor () {
    // api api
    super('https://git.heroku.com/frozen-stream-73034.git')
  }

  async getGameDetailFromAPI () {
    // example path http://localhost:8080/gameDetail
    const {data} = await this.get('/')
    return data
  }
}

export default GameDetailAPI