import HttpRequest from './http_request'

class GameDetailAPI extends HttpRequest {
  constructor () {
    // api api
    super('https://floating-reef-94055.herokuapp.com/')
  }

  async getGameDetailFromAPI () {
    // example path http://localhost:8080/gameDetail
    const {data} = await this.get('/')
    return data
  }
}

export default GameDetailAPI