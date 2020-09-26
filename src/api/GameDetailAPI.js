import HttpRequest from './http_request'

class GameDetailAPI extends HttpRequest {
  constructor () {
    super('https://gamedetail-kaphaogame-94055.herokuapp.com/')
  }

  async getGameDetailFromAPI (slug) {
    const {data} = await this.get('/?name=' + slug)
    return data
  }
}

export default GameDetailAPI