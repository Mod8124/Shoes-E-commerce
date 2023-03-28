<template>
  <div class="card">
    <img :src="shoe.image" class="card__image" loading="lazy" :alt="shoe.name" />
    <Price :shoe="shoe" />
  </div>
</template>

<script lang="ts">
import Price from '../Price/PriceComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardComponent',
  props: {
    shoe: {
      type: Object,
      required: true,
    },
  },
  components: {
    Price,
  },
});
</script>

<style lang="scss">
@import './scss/CardComponent.scss';
</style>
