<template>
  <div class="price">
    <p class="price__endprice">
      ${{ shoe.endprice }} <span class="price__porcent">{{ shoe.discount }}%</span>
    </p>
    <div class="price__price">
      <p class="price__pricePara">${{ shoe.price }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import PriceComponent from './logic/PriceComponent';
export default PriceComponent;
</script>

<style lang="scss">
@import './scss/PriceComponent.scss';
</style>
