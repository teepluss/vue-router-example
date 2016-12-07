<template>
  <section id="pages-posts" class="section">
    <div class="container">
      <post-item v-for="item in items" :post="item" :key="item.id"></post-item>
    </div>
    <nav class="pagination">
      <router-link
        class="button"
        :to="{ name: 'posts', query: { page: parseInt(pagination.current_page) - 1 }}"
        :disabled="pagination.current_page <= 1">
        Previous
      </router-link>
      <router-link
        class="button"
        :to="{ name: 'posts', query: { page: parseInt(pagination.current_page) + 1 }}"
        :disabled="pagination.current_page >= pagination.last_page">
        Next
      </router-link>
      <ul>
        <li v-for="page in pagesNumber">
          <router-link class="button" :to="{ name: 'posts', query: { page: page }}" active-class="is-primary" exact>{{ page }}</router-link>
        </li>
      </ul>
    </nav>
  </section>
</template>
<script>
import PostItem from '../elements/PostItem'
import { mapState, mapGetters } from 'vuex'
import _ from 'lodash'

export default {
  name: 'posts',
  data () {
    return {
      offset: 4
    }
  },
  components: {
    PostItem
  },
  computed: {
    ...mapState([
      'post'
    ]),
    ...mapGetters({
      items: 'posts',
      pagination: 'postsPagination'
    }),
    pagesNumber () {
      const pagination = this.pagination
      if (!_.has(pagination, 'to')) {
        return []
      }
      let from = pagination.current_page - this.offset
      if (from < 1) {
        from = 1
      }

      let to = from + (this.offset * 2)
      if (to >= pagination.last_page) {
        to = pagination.last_page
      }

      let pagesArray = []
      while (from <= to) {
        pagesArray.push(from)
        from++
      }
      return pagesArray
    }
  },
  mounted () {
    const page = this.$route.query.page
    if (!page) {
      this.$router.replace({
        name: 'posts', query: { page: 1 }
      })
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
