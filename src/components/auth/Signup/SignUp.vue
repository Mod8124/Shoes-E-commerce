<template>
  <article class="signUp">
    <div class="signUp__iconBack">
      <v-icon name="md-keyboardarrowleft-outlined" lass="auth__icon" @click="changeView('LogIn')" scale="1.1" />
    </div>
    <div class="signUp__cta">
      <h2 class="signUp__title">Create Account</h2>
      <p class="auth__para auth__para--sign">Free shipping, free returns, and rewards.</p>
      <input class="authInput" type="text" placeholder="Email Address" />
      <input class="authInput" type="text" placeholder="Password" />
      <p class="auth__para auth__para--privacy">
        By creating an account, you agree to Sneakers' <button class="auth__accountBtn">Privacy Policy</button> and
        <button class="auth__accountBtn">Terms of Use</button>.
      </p>
      <div class="logIn__btnContainer">
        <button class="logIn__btn">Create Account</button>
      </div>
    </div>
  </article>
</template>

<style lang="scss">
@import './scss/SignUp.scss';
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SignUp',
  props: ['changeView'],
  setup() {
    return {};
  },
});
</script>
