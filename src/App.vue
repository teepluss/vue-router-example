<template>
  <div id="app" v-cloak>
    <hero :quote="quote"></hero>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>
<script>
import 'bulma/bulma.sass'
import Hero from './components/partials/Hero'
import Foot from './components/partials/Foot'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    Hero,
    Foot
  },
  mounted () {
    this.getRandomQuote()
    setInterval(() => {
      this.getRandomQuote()
    }, 10000)
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
[v-cloak] {
  display: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1.brand {
  font-size: 2em;
  color: #FFFFFF;
}

</style>
