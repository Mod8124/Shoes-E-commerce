<template>
  <section class="detailsSkeleton">
    <PhotoSkeleton />
    <InfoSkeleton />
  </section>
</template>

<style lang="scss">
@import './scss/DetailsSkeleton.scss';
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import InfoSkeleton from './info/InfoSkeleton.vue';
import PhotoSkeleton from './photo/PhotoSkeleton.vue';

export default defineComponent({
  name: 'DetailsSkeleton',
  components: {
    InfoSkeleton,
    PhotoSkeleton,
  },
});
</script>
