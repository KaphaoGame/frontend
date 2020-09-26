import GameListAPI from "@/api/GameListAPI"

const gameListAPI = new GameListAPI()

const state = {
    topGameCardData: []
}

const getters = {
    getTopGameCardData(state){
        return state.topGameCardData
    }
}

const actions = {
    async topGameCardDataAction( {commit} ) {
        const data = await gameListAPI.getTopGameCardsFromAPI()
        commit("topGameCardDataMutations", data)
    }
}

const mutations = {
    topGameCardDataMutations(state, data){
       state.topGameCardData = data
    }
}

export const topGameCard = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}