import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import { account } from './accountModule';
import { gameDetail } from './gameDetailModule'
import { topGameCard } from './topGameCardModule'
import { newGameCard } from './newGameCardModule'
import { reviewService } from './reviewServiceModule'

Vue.use(Vuex)

export const store = new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  modules: {
      account,
      gameDetail,
      topGameCard,
      newGameCard,
      reviewService
  }
}); 