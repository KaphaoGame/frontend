import HttpRequest from './http_request'

class GameListAPI extends HttpRequest {
  constructor () {
    super('https://gamelist-kaphaogame-4278.herokuapp.com/')
  }

  async getTopGameCardsFromAPI () {
    const {data} = await this.get('/')
    return data
  }
}

export default GameListAPI