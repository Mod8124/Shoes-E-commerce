<template>
  <article class="infoSkeleton">
    <div class="infoSkeleton__subTitle"></div>
    <div class="infoSkeleton__title"></div>
    <div class="infoSkeleton__description"></div>
    <div class="infoSkeleton__description"></div>
    <div class="infoSkeleton__description"></div>
    <PriceSkeleton />
    <div class="infoSkeletonButtons">
      <div class="infoSkeletonButtons__btn"></div>
      <div class="infoSkeletonButtons__btn"></div>
    </div>
    <div class="infoSkeleton__favorite"></div>
  </article>
</template>

<style lang="scss">
@import './scss/InfoSkeleton.scss';
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import PriceSkeleton from '../../Price/PriceSkeleton.vue';

export default defineComponent({
  name: 'InfoSkeleton',
  components: {
    PriceSkeleton,
  },
});
</script>
