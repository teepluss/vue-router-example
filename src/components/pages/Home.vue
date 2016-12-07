<template>
  <section id="pages-home" class="section">
    <div class="container">
      This is and home page.
      <router-link :to="{ name: 'posts' }">Posts Example</router-link>
    </div>
  </section>
</template>
<script>
export default {
  name: 'home',
  mounted () {
    //
  }
}
</script>
