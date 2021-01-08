<template>
<div class="article__image-container">
  <img :src="authorImg" alt="Foto do autor do post" class="article__thumb article__thumb--outer">
  <article class="article__container">
    <div class="article__header">
      <div class="article__author">
        <img :src="authorImg" alt="Foto do autor do post" class="article__thumb article__thumb--inner">
        <h3 class="article__user text">camilomicheletto</h3>
      </div>
      <div class="article__options-container">
        <button class="article__options-toggle" @click="openOptions">
          <iconDefault width="18" height="10" viewbox="0 0 17.5 3.9" iconName="post options">
            <path d="M17.5 1.9c0 1.1-.9 1.9-1.9 1.9-1.1 0-1.9-.9-1.9-1.9S14.5 0 15.6 0c1 0 1.9.9 1.9 1.9m-6.8 0c0 1.1-.9 1.9-1.9 1.9-1.1.1-2-.8-2-1.9 0-1 .9-1.9 2-1.9s1.9.9 1.9 1.9m-6.8 0c0 1.1-.9 2-2 2-1 0-1.9-.9-1.9-2S.9 0 1.9 0c1.1 0 2 .9 2 1.9"></path>
          </iconDefault>
        </button>
        <ul class="article__options-list" v-if="options">
          <li class="text-small article__options-list__item">Postado em 08/01/2021 - 09:38</li>
          <li class="article__options-list__separator"><hr /></li>
          <li class="text article__options-list__item">Copiar Link </li>
          <li class="text article__options-list__item">Lorem, ipsum dolor </li>
          <li class="text article__options-list__item">Lorem, ipsum dolor </li>
        </ul>
      </div>
    </div>
    <section class="article__main">
      <slot />
    </section>
    <footer class="article__footer">
      <p class="text-small article__tags">{{ 
        [...this.tags].map(tag => `#${tag}`).join(", ")
      }}</p>
      <iconDefault width="21" height="21" viewbox="0 0 17 18.1" iconName="share">
        <path d="M12.8.2c-.4-.4-.8-.2-.8.4v2H2c-2 0-2 2-2 2v5s0 1 1 1 1-1 1-1v-4c0-1 .5-1 1-1h9v2c0 .6.3.7.8.4L17 3.6 12.8.2zM4.2 17.9c.5.4.8.2.8-.3v-2h10c2 0 2-2 2-2v-5s0-1-1-1-1 1-1 1v4c0 1-.5 1-1 1H5v-2c0-.6-.3-.7-.8-.4L0 14.6l4.2 3.3z"></path>
      </iconDefault>
    </footer>
  </article>  
</div>
</template>

<script>
import iconDefault from "./IconDefault";
export default {
  components: { iconDefault },
  props: ['tags', 'authorImg'],
  data() {
    return {
      options: false
    }
  },
  methods: {
    openOptions() {
      this.options = !this.options;
    }
  }
  
}
</script>