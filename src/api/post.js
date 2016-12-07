import axios from 'axios'

export default {
  getPosts () {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
  },
  getPost (id) {
    return axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
  }
}
