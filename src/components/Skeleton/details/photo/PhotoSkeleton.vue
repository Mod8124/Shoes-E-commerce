<template>
  <article class="photoSkeleton">
    <div class="photoSkeleton__image"></div>
  </article>
</template>

<style lang="scss">
@import './scss/PhotoSkeleton.scss';
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PhotoSkeleton',
});
</script>
