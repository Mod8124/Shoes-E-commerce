<template>
  <article class="logIn">
    <div class="logIn__iconClose">
      <v-icon class="logIn__icon" name="md-close-round" @click="closeModal" scale="1.1" />
    </div>
    <form class="logIng__cta" @submit.prevent="login">
      <div class="logIn__imageContainer">
        <img src="@/assets/shoes_log.svg" alt="shoes-icon" />
      </div>
      <h2 class="logIn__title">Log In to SneakersClub</h2>
      <input
        type="text"
        placeholder="Email Address"
        autocomplete="email"
        :class="emailError.length > 0 ? 'logIn__input logIn__input--active' : 'logIn__input'"
        v-model="email"
      />
      <p class="logIn__error">{{ emailError }}</p>
      <div class="logIn__inputContainer">
        <input
          :type="showPassword ? 'text' : 'password'"
          autocomplete="current-password"
          placeholder="Password"
          :class="
            passwordError.length > 0
              ? 'logIn__input logIn__input--active logIn__input--margin'
              : 'logIn__input logIn__input--margin'
          "
          v-model="password"
        />
        <v-icon
          class="logIn__inputICon"
          fill="hsl(219, 9%, 45%)"
          scale="1.1"
          :name="showPassword ? 'bi-eye' : 'bi-eye-slash'"
        />
      </div>
      <p class="logIn__error">{{ passwordError }}</p>
      <div class="logIn__btnContainer">
        <button class="logIn__btn" v-if="!isFetching" type="submit">Log In</button>
        <button class="logIn__btn" v-if="isFetching">
          <v-icon name="fa-spinner" v-if="isFetching" fill="white" animation="spin-pulse" />
        </button>
      </div>
      <p class="logIn__para">
        Don't have an account?
        <button type="button" class="logIn__accountBtn" @click="changeView('SignUp')">Register</button>
      </p>
    </form>
  </article>
</template>

<style lang="scss">
@import './scss/LoginAuth.scss';
</style>

<script lang="ts">
import LoginAuth from './logic/LoginAuth';
export default LoginAuth;
</script>
