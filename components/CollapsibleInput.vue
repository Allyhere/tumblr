<template>
  <div class="input-collapsible__container">
    <input
      v-if="isOpen === true"
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Buscar no Tumblr"
      class="input-collapsible__search text"
      :class="isOpen === true ? 'input-collapsible__search--is-active' : ''"
      />
      <iconDefault v-if="isOpen === false" width="18" height="18" viewbox="0 0 14 14" iconName="search" class="input-collapsible__search-icon"
      @click.native="open">
        <path d="M1.676 5.7c0-2.2 1.873-4 4.042-4 2.268 0 4.043 1.8 4.043 4s-1.775 4-4.043 4c-2.169 0-4.042-1.8-4.042-4zm11.732 6.4L10.352 9c.69-.9 1.085-2.1 1.085-3.3 0-3.1-2.564-5.7-5.719-5.7C2.563 0 0 2.6 0 5.7s2.563 5.7 5.718 5.7c1.085 0 2.17-.4 3.057-.9l3.253 3.2c.197.2.493.3.789.3.296 0 .591-.1.789-.3.197-.2.394-.5.394-.8 0-.3-.296-.5-.592-.8z">
        </path>
      </iconDefault>
      <iconDefault v-else width="18" height="18" viewbox="0 0 16 16" iconName="close" class="input-collapsible__search-icon"
      @click.native="open">
        <path d="M9.527 8l6.164-6.188a1.066 1.066 0 0 0 0-1.5 1.053 1.053 0 0 0-1.495 0L8 6.531 1.805.311a1.053 1.053 0 0 0-1.495 0 1.064 1.064 0 0 0 0 1.5L6.473 8 .31 14.188a1.064 1.064 0 0 0 0 1.501 1.052 1.052 0 0 0 1.495 0L8 9.47l6.195 6.22a1.052 1.052 0 0 0 1.495 0 1.066 1.066 0 0 0 0-1.5L9.527 8z"></path>
      </iconDefault>
  </div>
</template>

<script>
import IconDefault from "./IconDefault.vue";
export default {
  components: { IconDefault },
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
    open() {
      console.log(this.isOpen);
      this.isOpen = !this.isOpen;
    }
  }
}
</script>