import GameListAPI from "@/api/GameListAPI"

const gameListAPI = new GameListAPI()

const state = {
    topGameCardData: [],
    slugData: '',
}

const getters = {
    getTopGameCardData(state) {
        return state.topGameCardData
    },
    getSlugData(state) {
        return state.slugData
    }
}

const actions = {
    async topGameCardDataAction({ commit }) {
        const data = await gameListAPI.getTopGameCardsFromAPI()
        commit("topGameCardDataMutations", data)
    },
    topGameCardSlugAction({ commit }, slug) {
        commit("topGameCardSlugMutations", slug)
    }
}

const mutations = {
    topGameCardDataMutations(state, data) {
        state.topGameCardData = data
    },
    topGameCardSlugMutations(state, slug) {
        state.slugData = slug
    }
}

export const topGameCard = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}