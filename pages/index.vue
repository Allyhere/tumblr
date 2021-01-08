<template>
  <div class="tumblr-login" ref="main">
    <div class="heading-1 tumblr-overlay__letter" ref="letter"><h2>C</h2></div>
    <div class="heading-1 tumblr-overlay__background" ref="overlay"></div>
    <h2 class="logo heading-1">C</h2>
    <ul class="pagination" ref="pagination">
      <li class="pagination__item" >
        <span class="pagination__item_icon pagination__item_icon--active"></span>
      </li>
      <li class="pagination__item">
        <span class="pagination__item_icon"></span>
      </li>
      <li class="pagination__item">
        <span class="pagination__item_icon"></span>
      </li>
      <li class="pagination__item">
        <span class="pagination__item_icon"></span>
      </li>
      <li class="pagination__item">
        <span class="pagination__item_icon"></span>
      </li>
    </ul>
    <div class="login">
      <h1 class="login__title heading-1">camilo</h1>
      <p class="login__text text">Venha pelas coisas que você adora. E fique pelas que você descobriu.</p>
      <NuxtLink to="/main">
        <button class="login__btn text mt-md">
          <span class="login__btn_text">Entrar</span>
        </button>
      </NuxtLink>
    </div>
    <p class="photo-desc text">Foto tirada por eu mesmo</p>
    <footer class="footer">
      <div class="footer__made">made with luv by camilo</div>
    </footer>
  </div>
</template>

<script>
import gsap from 'gsap';
export default {
  methods: {
    paginate() {
      const pages = this.$refs.pagination.children;
      const main = this.$refs.main;
      let i = 0;
      setInterval(() => {
        main.style.backgroundImage = 'url(' + require(`~/assets/images/${i + 1}.jpg`) + ')';

        pages.forEach(element => {
          element.children[0].classList.remove("pagination__item_icon--active");
        });

        pages[i].children[0].classList.add("pagination__item_icon--active");

        i < 4 ? i++ : i = 0
      }, 5000);
    },
    overlay() {
      const { overlay, letter } = this.$refs;
      const tl = gsap.timeline({
        repeat: 0,
        duration: 2
      });

      console.log(overlay)
      tl.to(letter.children[0], {
        backgroundPosition: "0px 500px",
        duration: 1,
      }, 1)
      tl.to(overlay, {
        scaleX: 0,
        duration: 1
      }, ">")
      tl.to(letter, {
        x: "700px",
        opacity: 0,
        duration: 1
      }, "-=1")
    }
  },
  mounted() {
    this.overlay();
    this.paginate();
  }
}
</script>
