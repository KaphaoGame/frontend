import Vue from 'vue'
import Vuex from 'vuex'

import { account } from './accountModule';
import { gameDetail } from './gameDetailModule'
import { topGameCard } from './topGameCardModule'
import { newGameCard } from './newGameCardModule'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
      account,
      gameDetail,
      topGameCard,
      newGameCard
  }
});