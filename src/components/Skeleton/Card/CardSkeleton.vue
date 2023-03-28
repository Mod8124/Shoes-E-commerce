<template>
  <article class="cardSkeleton">
    <div class="cardSkeleton__image"></div>
    <PriceSkeleton />
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PriceSkeleton from '../Price/PriceSkeleton.vue';
export default defineComponent({
  name: 'CardSkeleton',
  components: {
    PriceSkeleton,
  },
});
</script>

<style lang="scss">
@import './scss/CardSkeleton.scss';
</style>
