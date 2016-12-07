import Home from './components/pages/Home'
import Posts from './components/pages/Posts'
import Post from './components/pages/Post'

export default [
  { name: 'home', path: '/', component: Home },
  { name: 'posts', path: '/posts', component: Posts },
  { name: 'posts.view', path: '/posts/:id', component: Post }
]

