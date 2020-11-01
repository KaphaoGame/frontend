import GameListAPI from "@/api/GameListAPI"

const gameListAPI = new GameListAPI()

const state = {
    newGameCardData: [],
    slugData: '',
}

const getters = {
    getNewGameCardData(state) {
        return state.newGameCardData
    },
    getSlugData(state) {
        return state.slugData
    }
}

const actions = {
    async newGameCardDataAction({ commit }) {
        const data = await gameListAPI.getNewGameCardsFromAPI()
        commit("newGameCardDataMutations", data)
    },
    newGameCardSlugAction({ commit }, slug) {
        commit("newGameCardSlugMutations", slug)
    }
}

const mutations = {
    newGameCardDataMutations(state, data) {
        state.newGameCardData = data
    },
    newGameCardSlugMutations(state, slug) {
        state.slugData = slug
    }
}

export const newGameCard = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}