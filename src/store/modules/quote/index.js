import * as types from '../../mutation-types'
import quote from '../../../api/quote'

export default {
  state: {
    quote: null
  },
  mutations: {
    [types.RECIEVE_QUOTE] (state, quote) {
      state.quote = quote
    }
  },
  actions: {
    getRandomQuote ({ commit }) {
      quote.getRandomQuote()
        .then((response) => {
          commit(types.RECIEVE_QUOTE, response.data)
        })
    }
  },
  getters: {
    quote (state) {
      return state.quote
    }
  }
}
