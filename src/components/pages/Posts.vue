<template>
  <section id="pages-posts" class="section">
    <div class="container">
      <post-item v-for="item in items" :post="item" :key="item.id"></post-item>
    </div>
    <paginator
      :pagination="pagination"
      route="posts">
      </paginator>
  </section>
</template>
<script>
import Paginator from '../elements/Paginator'
import PostItem from '../elements/PostItem'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'posts',
  components: {
    PostItem,
    Paginator
  },
  computed: {
    ...mapState([
      'post'
    ]),
    ...mapGetters({
      items: 'posts',
      pagination: 'postsPagination'
    })
  },
  mounted () {
    const page = this.$route.query.page
    if (!page) {
      this.$router.replace({
        name: 'posts', query: { page: 1 }
      })
      return false
    }
    this.$store.dispatch('fetchPosts', page)
  },
  watch: {
    '$route' (to, from) {
      const page = to.query.page
      this.$store.dispatch('fetchPosts', page)
    }
  }
}
</script>
