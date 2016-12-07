<template>
  <div class="hero-foot">
    <div class="container">
      <nav class="tabs is-boxed">
        <ul>
            <router-link tag="li" to="/" active-class="is-active" exact>
              <a>Home</a>
            </router-link>
            <router-link tag="li" to="/posts" active-class="is-active">
              <a>Posts</a>
            </router-link>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: 'hero-navigator'
}
</script>
