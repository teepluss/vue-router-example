<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-64x64">
        <img src="http://placehold.it/128x128">
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
          <br>
          <router-link :to="{ name: 'posts.view', params: { id: post.id }}">{{ post.title }}</router-link>
        </p>
      </div>
      <nav class="level">
        <div class="level-left">
          <a class="level-item">
            <span class="icon is-small"><i class="fa fa-reply"></i></span>
          </a>
          <a class="level-item">
            <span class="icon is-small"><i class="fa fa-retweet"></i></span>
          </a>
          <a class="level-item">
            <span class="icon is-small"><i class="fa fa-heart"></i></span>
          </a>
        </div>
      </nav>
    </div>
  </article>
</template>
<script>
export default {
  name: 'post-item',
  props: ['post']
}
</script>
