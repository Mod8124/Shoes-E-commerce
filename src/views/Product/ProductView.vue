<template>
  <main class="product">
    <section class="product__container">
      <Photo :mainShoe="true" />
      <Detail :shoe="shoe[0]" />
    </section>
  </main>
</template>

<script lang="ts">
import ProductLogic from './logic/ProductView';
export default ProductLogic;
</script>

<style lang="scss">
@import './scss/ProductView.scss';
</style>
