<template>
  <nav class="main-header">
    <div class="main-header__search-container ">
      <h2 class="main-header__letter-logo heading-1">C</h2>
       <input
        v-model="searchQuery"
        type="search"
        autocomplete="off"
        placeholder="Buscar no Tumblr"
        class="main-header__search-bar text"
      />
      <iconDefault width="18" height="18" viewbox="0 0 14 14" iconName="search" class="main-header__search-icon">
        <path d="M1.676 5.7c0-2.2 1.873-4 4.042-4 2.268 0 4.043 1.8 4.043 4s-1.775 4-4.043 4c-2.169 0-4.042-1.8-4.042-4zm11.732 6.4L10.352 9c.69-.9 1.085-2.1 1.085-3.3 0-3.1-2.564-5.7-5.719-5.7C2.563 0 0 2.6 0 5.7s2.563 5.7 5.718 5.7c1.085 0 2.17-.4 3.057-.9l3.253 3.2c.197.2.493.3.789.3.296 0 .591-.1.789-.3.197-.2.394-.5.394-.8 0-.3-.296-.5-.592-.8z"></path>
      </iconDefault>
    </div>
    <ul class="main-header__menu-container ">
      <li class="main-header__menu-item">
        <a href="" class="main-header__menu-link main-header__menu-link--active">
          <iconDefault width="20" height="21" viewbox="0 0 20 21" iconName="home">
            <path d="M19.55 8.117L10.567.157a.967.967 0 0 0-1.056 0L.528 8.117C.211 8.327 0 8.746 0 9.06v11.312c0 .314.317.628.634.628H6.34v-6.389c0-.524.423-.943.952-.943h5.389c.528 0 .951.42.951.943V21h5.706c.317 0 .635-.314.635-.628V9.06c.105-.314-.106-.838-.423-.943"></path>
          </iconDefault>
        </a>
      </li>
      <li class="main-header__menu-item">
        <a href="" class="main-header__menu-link">
           <iconDefault width="15" height="21" viewbox="0 0 15 18.9" iconName="sobre">
            <path d="M7.5 8.8c2.6 0 4.7-2 4.7-4.4S10.1 0 7.5 0 2.8 2 2.8 4.4C2.9 6.8 5 8.8 7.5 8.8zm0 1.5c-4.2 0-7.5 3.2-7.5 7.4 0 .6.5 1.2 1.2 1.2h12.6c.7 0 1.2-.5 1.2-1.2 0-4.1-3.3-7.4-7.5-7.4z"></path>
          </iconDefault>
        </a>
      </li>
      <li class="main-header__menu-item main-header__menu-item--boxed">
        <a href="" class="main-header__menu-link">
          <iconDefault width="22" height="22" viewbox="0 0 16.8 16.8" iconName="contato">
             <path d="M1.2 11.9l-1.2 5 5-1.2 8.2-8.2-3.8-3.8-8.2 8.2zM10 6.3l-6.2 6.2-.6-.6 6.2-6.2c0-.1.6.6.6.6zM13.1 0l-2.5 2.5 3.7 3.7 2.5-2.5L13.1 0z"></path>
          </iconDefault>
        </a>
      </li>
    </ul>

    <!-- Mobile view -->

    <Hamburger @click.native="open" />
    <transition name="fade">
      <div class="main-header__drawer" v-if="isOpen">
        <ul class="main-header__menu-mobile main-header__menu-mobile--is-active">
          <li class="main-header__menu-item main-header__menu-item--boxed">
            <a href="" class="main-header__menu-link">
              <iconDefault width="22" height="22" viewbox="0 0 16.8 16.8" iconName="contato">
                <path d="M1.2 11.9l-1.2 5 5-1.2 8.2-8.2-3.8-3.8-8.2 8.2zM10 6.3l-6.2 6.2-.6-.6 6.2-6.2c0-.1.6.6.6.6zM13.1 0l-2.5 2.5 3.7 3.7 2.5-2.5L13.1 0z"></path>
              </iconDefault>
              <p class="text">Contato</p>
            </a>
          </li>
          <li class="main-header__menu-item">
            <a href="" class="main-header__menu-link main-header__menu-link--active">
              <iconDefault width="20" height="21" viewbox="0 0 20 21" iconName="home">
                <path d="M19.55 8.117L10.567.157a.967.967 0 0 0-1.056 0L.528 8.117C.211 8.327 0 8.746 0 9.06v11.312c0 .314.317.628.634.628H6.34v-6.389c0-.524.423-.943.952-.943h5.389c.528 0 .951.42.951.943V21h5.706c.317 0 .635-.314.635-.628V9.06c.105-.314-.106-.838-.423-.943"></path>
              </iconDefault>
              <p class="text">Home</p>
            </a>
          </li>
          <li class="main-header__menu-item">
            <a href="" class="main-header__menu-link">
              <iconDefault width="15" height="21" viewbox="0 0 15 18.9" iconName="sobre">
                <path d="M7.5 8.8c2.6 0 4.7-2 4.7-4.4S10.1 0 7.5 0 2.8 2 2.8 4.4C2.9 6.8 5 8.8 7.5 8.8zm0 1.5c-4.2 0-7.5 3.2-7.5 7.4 0 .6.5 1.2 1.2 1.2h12.6c.7 0 1.2-.5 1.2-1.2 0-4.1-3.3-7.4-7.5-7.4z"></path>
              </iconDefault>
              <p class="text">Sobre</p>
            </a>
          </li>
          <li class="main-header__menu-item main-header__menu-item--last">
            Feito por Camilo Micheletto
          </li>
        </ul>
      </div>
    </transition>
    <h2 class="main-header__letter-logo heading-2">C</h2>
    <CollapsibleInput />
  </nav>
</template>

<script>
import Hamburger from './Hamburger.vue';
import IconDefault from "./IconDefault.vue";
import CollapsibleInput from "./CollapsibleInput.vue";

/**
 * We then add a data property which will return 
 * the searchQuery which starts off as an empty 
 * string and the articles array which is also empty. 
 * We then use the watch method from Vue to watch 
 * our searchQuery function passing in the argument
 * of searchQuery. If there is no searchQuery then 
 * the articles array is empty and we just call 
 * return. If not we get our articles and await 
 * our $content passing in articles. We can now 
 * use the limit() method to limit the number of 
 * returned results and then we use the search()
 * method passing in our searchQuery as an argument 
 * and then we chain the fetch() method to the end.
 */
  export default {
  components: { IconDefault, Hamburger, CollapsibleInput },
    data() {
      return {
        isOpen: false,
        searchQuery: '',
        articles: []
      }
    },
    watch: {
      async searchQuery(searchQuery) {
        if (!searchQuery) {
          this.articles = []
          return
        }
        this.articles = await this.$content('articles')
          .limit(6)
          .search(searchQuery)
          .fetch()
      }
    },
    methods: {
      open () {
        this.isOpen = !this.isOpen;
      }
    }
  }
</script>

<style>

</style>