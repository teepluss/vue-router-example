import _ from 'lodash'
import * as types from '../../mutation-types'
import post from '../../../api/post'

export default {
  state: {
    posts: {
      pagination: {},
      data: []
    },
    post: {}
  },
  mutations: {
    [types.RECIEVE_POSTS] (state, posts) {
      state.posts = posts
    },
    [types.RECIEVE_POST] (state, post) {
      post.body = post.body.repeat(20)
      state.post = post
    }
  },
  getters: {
    posts (state) {
      return state.posts.data
    },
    post (state) {
      return state.post
    },
    postsPagination (state) {
      return state.posts.pagination
    }
  },
  actions: {
    fetchPosts ({ commit }, page) {
      post.getPosts(page)
        .then((response) => {
          const perPage = 20
          const items = response.data
          const pages = _.chunk(items, perPage)

          const data = {
            pagination: {
              total: items.length,
              per_page: perPage,
              current_page: page,
              last_page: pages.length,
              next_page_url: null,
              prev_page_url: null,
              from: perPage * (page - 1),
              to: perPage * page
            },
            data: pages[page - 1]
          }
          commit(types.RECIEVE_POSTS, data)
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
