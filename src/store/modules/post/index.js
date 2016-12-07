import * as types from '../../mutation-types'
import post from '../../../api/post'

export default {
  state: {
    posts: [],
    post: {}
  },
  mutations: {
    [types.RECIEVE_POSTS] (state, posts) {
      state.posts = posts
    },
    [types.RECIEVE_POST] (state, post) {
      state.post = post
    }
  },
  getters: {
    posts (state) {
      return state.posts
    },
    post (state) {
      return state.post
    }
  },
  actions: {
    fetchPosts ({ commit }) {
      post.getPosts()
        .then((response) => {
          commit(types.RECIEVE_POSTS, response.data)
        })
    },
    getPost ({ commit }, id) {
      post.getPost(id)
        .then((response) => {
          commit(types.RECIEVE_POST, response.data)
        })
    }
  }
}
