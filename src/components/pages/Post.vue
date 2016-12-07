<template>
  <section id="pages-post" class="section">
    <div class="container">
      <div v-if="ready">
        <div class="level">
          <h2 class="title level-left">
            {{ post.title }}
          </h2>
          <div class="level-right">
            <a class="button is-small is-outlined" @click.prevent="goBack">
              Go back
            </a>
          </div>
        </div>
        <div class="content">{{ post.body }}</div>
      </div>
      <div v-else>
        Loading.....
      </div>
    </div>
  </section>
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
  methods: {
    goBack () {
      this.$router.back()
    }
  },
  watch: {
    post (val, old) {
      this.ready = true
    }
  }
}
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
