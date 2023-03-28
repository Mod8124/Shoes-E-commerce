<template>
  <main class="details">
    <section class="details__view">
      <Photo :mainShoe="false" :shoe="shoe[0]" />
      <Detail :shoe="shoe[0]" />
    </section>
  </main>
</template>

<script lang="ts">
import DetailsView from './logic/DetailsView';
export default DetailsView;
</script>

<style lang="scss">
@import './scss/DetailsView.scss';
</style>
