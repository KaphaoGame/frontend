import ReviewServiceAPI from '@/api/ReviewServiceAPI'
const reviewserviceAPI = new ReviewServiceAPI()

const state = {
    commentData:{
        comments: [],    
    }
}

const mutations = {
    commentDataMutation(state, updateCommentData){
        state.commentData = updateCommentData
    },
}

const getters = {
    getCommentData(state){
        return state.commentData
    }
}

const actions = {
    async commentDataAction({commit}, gameTag){
        const data = await reviewserviceAPI.getCommentFromAPI(gameTag)
        console.log(data.data)
        commit('commentDataMutation', data.data)
        
    }
}

export const reviewService = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
}