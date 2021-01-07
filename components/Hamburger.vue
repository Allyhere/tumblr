<template>
  <button 
    class="hamburger hamburger--elastic"
    :class="isOpen ? 'is-active' : ''"
    type="button"
    @click="open">
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
  </button>  
</template>

<style lang="scss">
  .hamburger{
    transform: scale(.7);
    &-inner {
      background-color: currentColor !important;
      &::before,
      &::after {
        background-color: currentColor !important;
      }
    }
  }
</style>


<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    open() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>