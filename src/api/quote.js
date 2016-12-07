import axios from 'axios'

export default {
  getRandomQuote () {
    return axios.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&rand=' + Math.random())
  }
}
