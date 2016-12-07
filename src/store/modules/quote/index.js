import * as types from '../../mutation-types'
import quote from '../../../api/quote'
import _ from 'lodash'

export default {
  state: {
    quote: []
  },
  mutations: {
    [types.RECIEVE_QUOTE] (state, quote) {
      state.quote = _.head(quote)
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
