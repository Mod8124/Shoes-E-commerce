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
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'PriceComponent',
  props: {
    shoe: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style lang="scss">
@import './scss/PriceComponent.scss';
</style>
