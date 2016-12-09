<template>
  <section class="hero is-primary">
    <div class="hero-head">
      <div class="container">
        <nav class="nav">
          <h1 class="nav-left brand">
            <router-link class="nav-item is-brand" to="/">Teepluss</router-link>
          </h1>
          <div class="nav-center">
            <a class="nav-item" href="https://github.com/teepluss">
              <span class="icon">
                <i class="fa fa-github"></i>
              </span>
            </a>
            <a class="nav-item" href="https://www.facebook.com/jQueryTips/">
              <span class="icon">
                <i class="fa fa-facebook"></i>
              </span>
            </a>
          </div>
          <span id="nav-toggle" class="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div id="nav-menu" class="nav-right nav-menu">
            <a class="nav-item  is-active" href="https://vuejs.org/">Vue</a>
            <a class="nav-item" href="https://vuex.vuejs.org/en/">Vuex</a>
            <a class="nav-item" href="https://router.vuejs.org/en/">Vue Router</a>
            <span class="nav-item">
              <a class="button is-light is-outlined" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://bulma.io/" href="https://twitter.com/intent/tweet?text=Vue Router Example&amp;url=https://github.com/teepluss/vue-router-example">
                <span class="icon">
                  <i class="fa fa-twitter"></i>
                </span>
                <span>Tweet</span>
              </a>
              <a class="button is-primary is-inverted" href="https://github.com/teepluss/vue-router-example/archive/master.zip">
                <span class="icon">
                  <i class="fa fa-download"></i>
                </span>
                <span>Download</span>
              </a>
            </span>
          </div>
        </nav>

      </div>
    </div>
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column">
            <p class="title">
              Vue Router Example
            </p>
            <p class="subtitle">
             Basic <strong>route the path</strong> with Vue Router
            </p>
          </div>
          <div class="column is-narrow">
          <div class="quote">
            <div id="carbon" class="box" v-html="quoteContent"></div>
            <h5 class="level-right" v-html="quoteAuthor"></h5>
          </div>
          </div>
        </div>
      </div>
    </div>
    <hero-navigator></hero-navigator>
  </section>
</template>
<script>
import HeroNavigator from './HeroNavigator'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'hero',
  components: {
    HeroNavigator
  },
  mounted () {
    this.getRandomQuotes()
  },
  methods: {
    ...mapActions([
      'getRandomQuotes'
    ])
  },
  computed: {
    quoteAuthor () {
      return this.quote.title
    },
    quoteContent () {
      return this.quote.content
    },
    ...mapGetters([
      'quote'
    ])
  }
}
</script>
<style lang="scss">
$font-size: 14px;
$line-height: 1.4;
$lines-to-show: 3;
.quote {
  max-height: 100px;
  width: 355px;
}
.quote .box {
  margin-bottom: 5px;
}
.quote p {
  display: block;
  display: -webkit-box;
  height: $font-size*$line-height*$lines-to-show;
  color: #666;
  font-size: $font-size;
  line-height: $line-height;
  -webkit-line-clamp: $lines-to-show;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
