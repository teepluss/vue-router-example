<template>
  <div id="app" v-cloak>
    <hero></hero>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>
<script>
import 'bulma/bulma.sass'
import Hero from './components/partials/Hero'
import Foot from './components/partials/Foot'

export default {
  name: 'app',
  components: {
    Hero,
    Foot
  },
  mounted () {
    //
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
