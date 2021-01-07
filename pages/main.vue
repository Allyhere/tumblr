<template>
 <div class="tumblr-landing">
    <main-header />
    <ul>
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <h2>{{ article.title }}</h2>
          <p>{{ article.description }}</p>
          <!--
          <img :src="article.img" />
          <div>
            <p>by {{ article.author.name }}</p>
          </div>
          -->
        </NuxtLink> 
      </li>
    </ul>
  </div>
</template>
<script>
import MainHeader from '~/components/MainHeader.vue'
export default {
  components: { MainHeader },
    async asyncData({ $content, params }) {
      const articles = await $content('articles', params.slug)
        .only(['title', 'description', 'img', 'slug', 'author'])
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        articles
      }
    },
  }
</script>

<style lang="scss">
  .tumblr-landing {
    min-height: 100vh;
    width: 100%;
    background-color: $blue;
    & > ul {
      background-color: $white;
      color: $black;;
    }
  }
</style>