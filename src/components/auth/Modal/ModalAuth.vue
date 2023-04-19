<template>
  <section class="modalAuth">
    <LoginAuth v-if="view === 'LogIn'" :changeView="changeView" />
    <SignUp v-if="view === 'SignUp'" :changeView="changeView" />
  </section>
</template>

<script lang="ts">
import ModalAuth from './logic/ModalAuth';
export default ModalAuth;
</script>

<style lang="scss">
@import './scss/ModalAuth.scss';
</style>
