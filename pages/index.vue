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
        duration: 4
      });

      console.log(overlay)
      tl.to(letter.children[0], {
        backgroundPosition: "0px 500px",
        duration: 3,
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

<style lang="scss">

.tumblr-login {
  display: grid;
  grid-template-rows: 40px 1fr 40px;
  height: 100vh;
  width: 100%;
  background-color: $blue;
  background-image: url('~assets/images/1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  overflow: hidden;
  .logo {
    color: $white;
    grid-area: 1 / 1 / 2 / 2;
    align-self: start;
    padding: 5px 0 0 15px;
  }
  .pagination {
    grid-area: 2 / 1 / 3 / 2;
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    height: fit-content;
    width: 10px;
    display: flex;
    flex-direction: column;
    gap: 18px 0;
    &__item {
      &_icon {
        display: block;
        width: 18px;
        height: 18px;
        border: 3.5px solid rgba(240, 240, 240, .3);
        border-radius: 50% 50%;
        cursor: pointer;
        transition: border .3s ease-in;
        &:hover { border-color: $white; }
        &--active {
          transition: background .3s ease-in-out;
          background-color: $white;
        }
      }
    }
  }

  .login {
    grid-area: 2 / 1 / 3 / 2;
    
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
    width: clamp(26ch, 60vw, 32ch);
    color: $white;
    text-align: center;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    a { width: 100%; }
    &__btn {
      cursor: pointer;
      width: 100%;
      height: 44px;
      background-color: $white;

      font-weight: 600;
      position: relative;
      &::before {
        content: '';
        height: 100%;
        width: 100%;
        background: $primary;
        position: absolute;
        left: 0;
        top: 0;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform .4s ease-in-out;
      }
      &:hover::before {
        transform: scaleX(1);
      }
      &_text {
        display: grid;
        place-items: center;
        color: $black;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
        &:hover { color: $white; }
        transition: color .4s ease-in-out;
      }
    }
  }

  .photo-desc {
    color: $white;
    grid-area: 2 / 1 / 3 / 2;
    position: absolute;
    bottom: 15px;
    right: 15px;
  }
  .footer {
    grid-area: 3 / 1 / 4 / 2;
    display: grid;
    place-items: center;
    background-color: $success;
    color: $white;
  }
}

.tumblr-overlay {
  &__background {
    display: grid;
    place-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    transform-origin: right;
    background-color: $blue;
  }
  &__letter {
    color: $white;
    font-size: 5rem;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 3;
    transform-origin: right;
    transform: translate(-50%, -50%);
    h2 {
      -webkit-text-fill-color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
      background-image: $gradient-top;
      background-position: 0 134px;
      background-size: 100% 500px;
    }
  }
}
</style>
