<template>
  <article class="logIn">
    <div class="logIn__iconClose">
      <v-icon class="auth__icon" name="md-close-round" @click="closeModal" scale="1.1" />
    </div>
    <div class="logIng__cta">
      <div class="logIn__imageContainer">
        <img class="logIn__image" src="/shoes_log.svg" alt="log_shoesImage" />
      </div>
      <h2 class="auth__title">Log In to SneakersClub</h2>
      <input type="text" placeholder="Email Address" class="authInput" />
      <input type="text" placeholder="Password" class="authInput" />
      <div class="logIn__btnContainer">
        <button class="logIn__btn">Log In</button>
      </div>
      <p class="auth__para">
        Don't have an account? <button class="auth__accountBtn" @click="changeView('SignUp')">Register</button>
      </p>
    </div>
  </article>
</template>

<style lang="scss">
@import './scss/LoginAuth.scss';
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'LoginAuth',
  props: ['changeView'],
  setup() {
    const store = useStore();
    const closeModal = () => {
      store.dispatch('set_ModalAuth');
    };
    return {
      closeModal,
    };
  },
});
</script>
