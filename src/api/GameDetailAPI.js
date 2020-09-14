import HttpRequest from './http_request'

class GameDetailAPI extends HttpRequest {
  constructor () {
    super('https://gamedetail-kaphaogame-94055.herokuapp.com/')
  }

  async getGameDetailFromAPI () {
    const {data} = await this.get('/?name=marvels-avengers')
    return data
  }
}

export default GameDetailAPI