import axios from 'axios'

export default {
  getRandomQuotes () {
    return axios.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=20&rand=' + Math.random())
  }
}
