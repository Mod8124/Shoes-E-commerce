<template>
  <article class="signUp">
    <div class="signUp__iconBack">
      <v-icon name="md-keyboardarrowleft-outlined" class="auth__icon" @click="changeView('LogIn')" scale="1.1" />
    </div>
    <div class="signUp__cta">
      <h2 class="signUp__title">Create Account</h2>
      <p class="auth__para auth__para--sign">Free shipping, free returns, and rewards.</p>
      <input
        :class="emailError.length > 0 ? 'authInput authInput--active' : 'authInput'"
        type="text"
        placeholder="Email Address"
        v-model="email"
        autocomplete="email"
      />
      <p class="signUp__error">{{ emailError }}</p>
      <input
        :class="
          passwordError.length > 0 ? 'authInput authInput--active authInput--margin' : 'authInput authInput--margin'
        "
        type="text"
        placeholder="Password"
        v-model="password"
      />
      <p class="signUp__error">{{ passwordError }}</p>
      <p class="auth__para auth__para--privacy">
        By creating an account, you agree to Sneakers' <button class="auth__accountBtn">Privacy Policy</button> and
        <button class="auth__accountBtn">Terms of Use</button>.
      </p>
      <div class="logIn__btnContainer">
        <button class="logIn__btn" @click="createAccount">Create Account</button>
      </div>
    </div>
  </article>
</template>

<style lang="scss">
@import './scss/SignUp.scss';
</style>

<script lang="ts">
import SignUp from './logic/SignUp';
export default SignUp;
</script>
