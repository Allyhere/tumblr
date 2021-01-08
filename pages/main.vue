<template>
  <div class="tumblr-landing">
    <main-header />
    <div class="tumblr-content">
      <ul class="posts">
        <li v-for="article of articles" :key="article.slug"> 
          <Article :tags="article.tags" :authorImg="article.author.img">
            <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }" class="article__image-link">
              <img :src="article.img" class="article__image"/>
            </NuxtLink> 
            <h2 class="title">{{ article.title }}</h2>
            <p class="text">{{ article.description }}</p> 
            <div>
              <p class="text">by {{ article.author.name }}</p>
            </div>
          </Article>
        </li>
      </ul>
      <div class="bio">
        <h2 class="title">Camilo Micheletto</h2>
        <p class="text">perfil-tumblr</p>
        <ul class="bio__details">
          <li class="bio__details-item">
            <span class="text">Status</span>
            <span class="text">Empregado</span>
          </li>
          <li class="bio__details-item">
            <span class="text">Empresa</span>
            <span class="text">Concrete Solutions</span>
          </li>
          <li class="bio__details-item">
            <span class="text">Mora em</span>
            <span class="text">São Paulo, SP</span>
          </li>
          <li class="bio__details-item">
            <span class="text">Atua como</span>
            <span class="text">Desenvolvedor Fullstack</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import MainHeader from '~/components/MainHeader.vue'
export default {
  components: { MainHeader },
    async asyncData({ $content, params }) {
      const articles = await $content('articles', params.slug)
        .only(['title', 'description', 'img', 'slug', 'author', 'tags'])
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        articles
      }
    },
  }
</script>
