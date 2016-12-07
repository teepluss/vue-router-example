<template>
  <div id="app">
    <hero :quote="quote"></hero>
    <router-view></router-view>
  </div>
</template>
<script>
import Hero from './components/partials/Hero'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    Hero
  },
  mounted () {
    this.getRandomQuote()
  },
  computed: {
    ...mapGetters([
      'quote'
    ])
  },
  methods: {
    ...mapActions([
      'getRandomQuote'
    ])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1.brand {
  font-size: 2em;
  color: #FFFFFF;
}
.quote {
  max-width: 500px;
  color: #666;
}
</style>
