<template>
  <div id="posts-view">
    <div v-if="ready">
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </div>
    <div v-else>
      Loading.....
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'post',
  data () {
    return {
      ready: false
    }
  },
  mounted () {
    const id = this.$route.params.id
    this.$store.dispatch('getPost', id)
  },
  computed: {
    ...mapGetters([
      'post'
    ])
  },
  watch: {
    post (val, old) {
      this.ready = true
    }
  }
}
</script>
