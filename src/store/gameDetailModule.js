import GameDetailAPI from '@/api/GameDetailAPI'
const gamedetailAPI = new GameDetailAPI()

const state = {
    data: {
        id: null,
        slug: null,
        gameName: null,
        gameDescription: null,
        gameDescription_raw: null,
        gameReleaseDate: null,
        gameImageURL: null,
        metacriticScore: null,
    } 
}

const mutations = {
    dataMutation(state, updateData){
        state.data = updateData
    },
    dataIDMutation(state, updateID){
        state.data.id = updateID
    },
    dataSlugMutation(state, updateID){
        state.data.slug = updateID
    },
    dataGameNameMutation(state, updateID){
        state.data.gameName = updateID
    },
    dataGameDescriptionMutation(state, updateID){
        state.data.gameDescription = updateID
    },
    dataGameDescriptionRawMutation(state, updateID){
        state.data.gameDescription_raw = updateID
    },
    dataGameReleaseDateMutation(state, updateID){
        state.data.gameReleaseDate = updateID
    },
    dataGameImageURLMutation(state, updateID){
        state.data.gameImageURL = updateID
    },
    dataMetacriticScoreMutation(state, updateID){
        state.data.metacriticScore = updateID
    },
}

const getters = {
    getData(state){
        return state.data
    }
}

const actions = {
    async dataAction( {commit}, slug ){
        const data = await gamedetailAPI.getGameDetailFromAPI(slug)
        commit('dataMutation', data[0])
        commit('dataIDMutation', data[0].gameDetailModel.id)
        commit('dataSlugMutation', data[0].gameDetailModel.slug)
        commit('dataGameNameMutation', data[0].gameDetailModel.gameName)
        commit('dataGameDescriptionMutation', data[0].gameDetailModel.gameDescription)
        commit('dataGameDescriptionRawMutation', data[0].gameDetailModel.gameDescription_raw)
        commit('dataGameReleaseDateMutation', data[0].gameDetailModel.gameReleaseDate)
        commit('dataGameImageURLMutation', data[0].gameDetailModel.gameImageURL)
        commit('dataMetacriticScoreMutation', data[0].gameDetailModel.metacriticScore)
    }
} 

export const gameDetail = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}