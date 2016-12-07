<template>
  <section class="hero is-primary">
    <div class="hero-head">
      <div class="container">
        <nav class="nav">
          <h1 class="nav-left brand">
            <router-link class="nav-item is-brand" to="/">Teepluss</router-link>
          </h1>

    <div class="nav-center">
      <a class="nav-item" href="https://github.com/teepluss">
        <span class="icon">
          <i class="fa fa-github"></i>
        </span>
      </a>
      <a class="nav-item" href="https://www.facebook.com/jQueryTips/">
        <span class="icon">
          <i class="fa fa-facebook"></i>
        </span>
      </a>
    </div>

    <span id="nav-toggle" class="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>

    <div id="nav-menu" class="nav-right nav-menu">
      <a class="nav-item  is-active" href="https://vuejs.org/">
        Vue Docs
      </a>
      <a class="nav-item" href="https://vuex.vuejs.org/en/">
        Vuex Docs
      </a>
      <a class="nav-item" href="https://router.vuejs.org/en/">
        Vue Router Docs
      </a>


        <span class="nav-item">
          <a class="button is-light is-outlined" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://bulma.io/" href="https://twitter.com/intent/tweet?text=Vue Router Example&amp;url=https://github.com/teepluss/vue-router-example">
            <span class="icon">
              <i class="fa fa-twitter"></i>
            </span>
            <span>Tweet</span>
          </a>
          <a class="button is-primary is-inverted" href="https://github.com/jgthms/bulma/archive/0.2.3.zip">
            <span class="icon">
              <i class="fa fa-download"></i>
            </span>
            <span>Download</span>
          </a>
        </span>

    </div>
  </nav>

      </div>
    </div>

    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column">
            <p class="title">
              Documentation
            </p>
            <p class="subtitle">
              Everything you need to <strong>create a website</strong> with Bulma
            </p>
          </div>
          <div class="column is-narrow">
            <div id="carbon" class="box">
            /sss
  </div>

          </div>
        </div>
      </div>
    </div>

    <div class="hero-foot">
      <div class="container">
        <nav class="tabs is-boxed">
          <ul>
            <li>
              <a href="/documentation/overview/start/">Overview</a>
            </li>
            <li>
              <a href="http://bulma.io/documentation/modifiers/syntax">Modifiers</a>
            </li>
            <li>
              <a href="http://bulma.io/documentation/grid/columns">Grid</a>
            </li>
            <li class="is-active">
              <a href="http://bulma.io/documentation/elements/box/">Elements</a>
            </li>
            <li>
              <a href="http://bulma.io/documentation/components/card/">Components</a>
            </li>
            <li>
              <a href="http://bulma.io/documentation/layout/container/">Layout</a>
            </li>
          </ul>
        </nav></div>
      </div>

  </section>
</template>
<script>
export default {
  name: 'hero'
}
</script>
