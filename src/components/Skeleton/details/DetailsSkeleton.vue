<template>
  <section class="detailsSkeleton">
    <PhotoSkeleton />
    <InfoSkeleton />
  </section>
</template>

<style lang="scss">
@keyframes pulse {
  50% {
    opacity: 0.5;
  }
}

.detailsSkeleton {
  width: 100%;
  min-height: 40vh;
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 48% 44%;
  justify-content: space-between;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
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
