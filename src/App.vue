<template>
  <div id="app">
    <hero></hero>
    <navigator></navigator>
    <router-view></router-view>
  </div>
</template>
<script>
import Hero from './components/partials/Hero'
import Navigator from './components/partials/Navigator'

export default {
  name: 'app',
  components: {
    Hero,
    Navigator
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
</style>
