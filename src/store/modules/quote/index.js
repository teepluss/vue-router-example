import * as types from '../../mutation-types'
import quote from '../../../api/quote'
import _ from 'lodash'

export default {
  state: {
    quotes: [],
    quote: {}
  },
  mutations: {
    [types.RECIEVE_QUOTES] (state, quotes) {
      state.quotes = quotes
    },
    [types.RECIEVE_QUOTE] (state, quote) {
      state.quote = _.head(quote)
    }
  },
  actions: {
    getRandomQuotes ({ state, commit }) {
      quote.getRandomQuotes()
        .then((response) => {
          commit(types.RECIEVE_QUOTES, response.data)
          commit(types.RECIEVE_QUOTE, response.data)
        })

      setInterval(() => {
        commit(types.RECIEVE_QUOTE, _.shuffle(state.quotes))
      }, 10000)
    }
  },
  getters: {
    quote (state) {
      return state.quote
    }
  }
}
