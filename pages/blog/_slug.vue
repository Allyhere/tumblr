<template>
   <article>
    <NuxtLink to="/main">Voltar</NuxtLink>
    <h2 class="heading-2">{{ article.title }}</h2>
    <p class="text">{{ article.description }}</p>
    <img :src="article.img" :alt="article.alt" />
    <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>
    <nav>
      <ul>
        <li v-for="link of article.toc" :key="link.id">
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav>
    <nuxt-content :document="article" />
  </article>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      return { article }
      /**
       * Then we can use asyncData in our page component to fetch our article content before the page has been rendered.
       * We can have access to our content through the context by using the variable $content. As we want to fetch a dynamic page we also need to know which article to fetch with params.slug which is available to us through the context.
       */
    },
    methods: {
      formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
      }
    }
  }
</script>

<style>
  .nuxt-content h2 {
    font-weight: bold;
    font-size: 28px;
  }
  .nuxt-content h3 {
    font-weight: bold;
    font-size: 22px;
  }
  .nuxt-content p {
    margin-bottom: 20px;
  }
</style>