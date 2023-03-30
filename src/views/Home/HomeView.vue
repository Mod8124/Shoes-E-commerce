<template>
  <main class="home">
    <img class="home__img" src="/heroSection.jpg" alt="shoes__heroSection" />
    <section class="homeJoin">
      <h2 class="homeJoin__title">JOIN OUR SneakersClub & GET 15% OFF</h2>
      <p class="homeJoin__para">Be the first to get the latest news about trends, promotions and much more!</p>
      <button class="homeJoin__btn">Sign for free --></button>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
});
</script>

<style lang="scss" scoped>
@import './scss/HomeView.scss';
</style>
