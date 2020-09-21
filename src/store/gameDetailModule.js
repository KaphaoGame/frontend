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
    async dataAction(context){
        const data = await gamedetailAPI.getGameDetailFromAPI()
        console.log(data)
        context.commit('dataMutation', data[0])
        context.commit('dataIDMutation', data[0].gameDetailModel.id)
        context.commit('dataSlugMutation', data[0].gameDetailModel.slug)
        context.commit('dataGameNameMutation', data[0].gameDetailModel.gameName)
        context.commit('dataGameDescriptionMutation', data[0].gameDetailModel.gameDescription)
        context.commit('dataGameDescriptionRawMutation', data[0].gameDetailModel.gameDescription_raw)
        context.commit('dataGameReleaseDateMutation', data[0].gameDetailModel.gameReleaseDate)
        context.commit('dataGameImageURLMutation', data[0].gameDetailModel.gameImageURL)
        context.commit('dataMetacriticScoreMutation', data[0].gameDetailModel.metacriticScore)
    }
} 

export const gameDetail = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}