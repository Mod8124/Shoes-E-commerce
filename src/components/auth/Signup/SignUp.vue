<template>
  <article class="signUp">
    <div class="signUp__iconBack">
      <v-icon name="md-keyboardarrowleft-outlined" class="signUp__icon" @click="changeView('LogIn')" scale="1.1" />
    </div>
    <form class="signUp__cta" @submit.prevent="createAccount">
      <h2 class="signUp__title">Create Account</h2>
      <p class="signUp__para auth__para--sign">Free shipping, free returns, and rewards.</p>
      <input
        :class="emailError.length > 0 ? 'signUp__input signUp__input--active' : 'signUp__input'"
        type="text"
        placeholder="Email Address"
        v-model="email"
        autocomplete="email"
      />
      <p class="signUp__error">{{ emailError }}</p>
      <div class="signUp__inputContainer">
        <input
          :class="
            passwordError.length > 0
              ? 'signUp__input signUp__input--active signUp__input--margin'
              : 'signUp__input signUp__input--margin'
          "
          :type="showPassword ? 'text' : 'password'"
          autocomplete="current-password"
          placeholder="Password"
          v-model="password"
        />
        <v-icon
          @click="toggleShowPassword"
          class="signUp__inputICon"
          fill="hsl(219, 9%, 45%)"
          scale="1.1"
          :name="showPassword ? 'bi-eye' : 'bi-eye-slash'"
        />
      </div>
      <p class="signUp__error">{{ passwordError }}</p>
      <p class="signUp__para signUp__para--privacy">
        By creating an account, you agree to Sneakers' <button class="signUp__accountBtn">Privacy Policy</button> and
        <button class="signUp__accountBtn">Terms of Use</button>.
      </p>
      <div class="signUp__btnContainer">
        <button class="signUp__btn" type="submit">Create Account</button>
      </div>
    </form>
  </article>
</template>

<style lang="scss">
@import './scss/SignUp.scss';
</style>

<script lang="ts">
import SignUp from './logic/SignUp';
export default SignUp;
</script>
