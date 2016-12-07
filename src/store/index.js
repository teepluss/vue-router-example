import Vue from 'vue'
import Vuex from 'vuex'

import post from './modules/post'
import quote from './modules/quote'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    post,
    quote
  }
})
