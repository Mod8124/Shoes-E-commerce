<template>
  <header :class="active ? 'nav nav-mobile nav--active' : 'nav nav--mobile'">
    <!--start nav-->

    <div :class="active ? 'nav__desktop nav__desktop--active' : 'nav__desktop'">
      <!--nav__desktop-->
      <div class="nav__logo nav__logo-desktop">
        <router-link to="/">
          <img src="@/assets/images/logo.svg" alt="logo-svg" />
        </router-link>
      </div>

      <nav class="nav__links">
        <router-link to="/Collections" class="nav__link nav__link--noSpace">Collections</router-link>
        <router-link to="/Men" class="nav__link">Men</router-link>
        <router-link to="/Women" class="nav__link">Women</router-link>
        <router-link to="/" class="nav__link">About</router-link>
        <router-link to="/" class="nav__link">Contact</router-link>
      </nav>

      <div class="nav__cart nav__cart--desktop">
        <div class="nav__cartShopping nav__cartShopping--desktop">
          <img
            src="@/assets/images/icon-cart.svg"
            alt="icon-cart"
            class="nav__shoppingIconCart"
            @click="changeMiniCard"
          />
          <span class="nav__cartNumber nav__cartNumber--desktop" @click="changeMiniCard" v-if="shoes.length > 0">{{
            shoes.length
          }}</span>
        </div>

        <!-- <img src="@/assets/images/image-avatar.png" alt="avatar" class="nav__avatar nav__avatar--desktop" /> -->
        <div class="avatar__icon">
          <v-icon name="pr-user" fill="#69707D" scale="1.5" class="avatar__Icon" @click="changeModalAuth" />
        </div>
      </div>

      <div class="nav__miniCard nav__miniCard--desktop" v-if="showMiniCard">
        <MiniCard />
      </div>
    </div>
    <!--end nav__desktop-->

    <div class="nav__mobile">
      <!--nav__mobile-->

      <div class="nav__container">
        <div class="nav__mobileContainer">
          <div :class="showMenu ? 'hambu hambu--active' : 'hambu'" @click="toggleMenu"></div>

          <div class="nav__mobileLinksContainer" v-if="showMenu">
            <div class="nav__mobileLinks">
              <nav class="nav__linksMobile">
                <router-link to="/" class="nav__linkMobile">Collections</router-link>
                <router-link to="/" class="nav__linkMobile">Men</router-link>
                <router-link to="/" class="nav__linkMobile">Women</router-link>
                <router-link to="/" class="nav__linkMobile">About</router-link>
                <router-link to="/" class="nav__linkMobile">Contact</router-link>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <!--end nav__mobile-->

      <div class="nav__logo nav__logo--mobile">
        <img src="@/assets/images/logo.svg" alt="logo-svg" />
      </div>

      <div class="nav__cart">
        <div class="nav__cartShopping">
          <img src="@/assets/images/icon-cart.svg" alt="icon-cart" @click="changeMiniCard" />
          <span class="nav__cartNumber" v-if="shoes.length > 0">{{ shoes.length }}</span>
        </div>

        <div class="nav__avatarImg">
          <img src="@/assets/images/image-avatar.png" alt="avatar" class="nav__avatar" />
        </div>
      </div>

      <div class="nav__miniCard" v-if="showMiniCard">
        <MiniCard />
      </div>
    </div>
    <!--end nav__mobile-->

    <section class="auth" v-if="isModalAuth">
      <ModalAuth />
    </section>
  </header>
  <!--end nav-->
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { computed, ref, defineComponent } from 'vue';
import MiniCard from '@/components/MiniCard/MiniCard.vue';
import ModalAuth from '../auth/Modal/ModalAuth.vue';
export default defineComponent({
  name: 'NavBar',
  components: {
    MiniCard,
    ModalAuth,
  },
  setup() {
    const showMenu = ref(false);
    const store = useStore();
    const shoes = computed(() => store.state.shoes);
    const showMiniCard = ref(false);
    const active = ref(false);

    const isModalAuth = computed<boolean>(() => store.state.isModalAuth);

    const changeMiniCard = () => {
      showMiniCard.value = !showMiniCard.value;
    };

    const toggleMenu = () => {
      showMenu.value = !showMenu.value;
    };

    function handleScroll() {
      if (window.scrollY > 1) {
        active.value = true;
      } else {
        active.value = false;
      }
    }

    const changeModalAuth = () => {
      store.dispatch('set_ModalAuth');
    };

    window.addEventListener('scroll', handleScroll);

    return {
      showMenu,
      shoes,
      showMiniCard,
      changeMiniCard,
      toggleMenu,
      active,
      isModalAuth,
      changeModalAuth,
    };
  },
});
</script>

<style lang="scss">
@import './scss/NavBar.scss';
</style>
