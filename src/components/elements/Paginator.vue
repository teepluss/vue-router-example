<template>
  <nav class="pagination">
    <router-link
      class="button"
      :to="{ name: route, query: { page: parseInt(pagination.current_page) - 1 }}"
      :disabled="pagination.current_page <= 1">
      Previous
    </router-link>
    <router-link
      class="button"
      :to="{ name: route, query: { page: parseInt(pagination.current_page) + 1 }}"
      :disabled="pagination.current_page >= pagination.last_page">
      Next
    </router-link>
    <ul>
      <li v-for="page in pagesNumber">
        <router-link class="button" :to="{ name: route, query: { page: page }}" active-class="is-primary" exact>{{ page }}</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'paginator',
  props: {
    pagination: {
      type: Object,
      required: true
    },
    offset: {
      type: [String, Number],
      required: false,
      default: 4
    },
    route: {
      type: String,
      required: true
    }
  },
  computed: {
    pagesNumber () {
      const pagination = this.pagination
      if (!pagination.to) {
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
  }
}
</script>
