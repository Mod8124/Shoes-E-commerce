<template>
  <main class="pageError">
    <h2 class="pageError__title">Error page don't found <span class="page__span">404</span></h2>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; // @ is an alias to /src

export default defineComponent({
  name: 'ErrorView',
});
</script>

<style lang="scss">
@import './scss/ErrorView.scss';
</style>
