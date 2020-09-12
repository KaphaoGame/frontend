import Vue from 'vue'
import Vuex from 'vuex'
import GameDetailAPI from '@/api/GameDetailAPI'
const gamedetailAPI = new GameDetailAPI()

Vue.use(Vuex)

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
    context.commit('dataMutation', data)
    context.commit('dataIDMutation', data.gameDetailModel.id)
    context.commit('dataSlugMutation', data.gameDetailModel.slug)
    context.commit('dataGameNameMutation', data.gameDetailModel.gameName)
    context.commit('dataGameDescriptionMutation', data.gameDetailModel.gameDescription)
    context.commit('dataGameDescriptionRawMutation', data.gameDetailModel.gameDescription_raw)
    context.commit('dataGameReleaseDateMutation', data.gameDetailModel.gameReleaseDate)
    context.commit('dataGameImageURLMutation', data.gameDetailModel.gameImageURL)
    context.commit('dataMetacriticScoreMutation', data.gameDetailModel.metacriticScore)

  }
} 

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})