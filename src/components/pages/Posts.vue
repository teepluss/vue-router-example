<template>
  <div>
    <ul>
      <li v-for="post in posts">
        <router-link :to="{ name: 'posts.view', params: { id: post.id }}">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'posts',
  computed: {
    ...mapGetters([
      'posts'
    ])
  },
  mounted () {
    this.$store.dispatch('fetchPosts')
  }
}
</script>
