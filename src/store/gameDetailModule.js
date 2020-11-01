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
        platforms: [],
        genres: [],
        gameVideoURL: {},
        gameDevelopers: [],
        gamePublishers: [],
        gameTags: [],
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
    dataPlatformsMutation(state, updatePlatforms){
        state.data.platforms = updatePlatforms
    },
    dataGenresMutation(state, updateGenres){
        state.data.genres = updateGenres
    },
    dataGameVideoURLMutation(state, updateGameVideoURL){
        state.data.gameVideoURL = updateGameVideoURL
    },
    dataGameDevelopersMutation(state, updateGameDevelopers){
        state.data.gameDevelopers = updateGameDevelopers
    },
    dataGamePublishersMutation(state, updateGamePublishers){
        state.data.gamePublishers = updateGamePublishers
    },
    dataGameTagsMutation(state, updateGameTags){
        state.data.gameTags = updateGameTags
    }
}

const getters = {
    getData(state){
        return state.data
    },
    getDataGameName(state) {
        return state.data.gameName
    },
    getDataGameImageURL(state) {
        return state.data.gameImageURL
    },
    getDataMetacritic(state) {
        return state.data.metacriticScore
    },
    getDataGameDescription(state) {
        return state.data.gameDescription_raw
    },
    getDataPlatforms(state) {
        var platforms_name = []
        state.data.platforms.forEach(element => {
            platforms_name.push(element.platform.name)
        });
        return platforms_name
    },
    getDataGameDevelopers(state) {
        var gameDevelopers = []
        state.data.gameDevelopers.forEach(element => {
            gameDevelopers.push(element.name)
        });
        return gameDevelopers
    },
    getDataGenres(state) {
        var genres = []
        state.data.genres.forEach(element => {
            genres.push(element.name)
        })
        return genres
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
        commit('dataPlatformsMutation', data[0].gameDetailModel.platforms)
        commit('dataGenresMutation', data[0].gameDetailModel.genres)
        commit('dataGameVideoURLMutation', data[0].gameDetailModel.gameVideoURL)
        commit('dataGameDevelopersMutation', data[0].gameDetailModel.gameDevelopers)
        commit('dataGamePublishersMutation', data[0].gameDetailModel.gamePublishers)
        commit('dataGameTagsMutation', data[0].gameDetailModel.gameTags)
    }
} 

export const gameDetail = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}