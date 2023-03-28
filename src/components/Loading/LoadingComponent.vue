<template>
  <section class="loading">
    <h2 class="loading__title">Loading....</h2>

    <div class="loading__barContainer">
      <div class="loading__bar"></div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'LoadingComponent',
  components: {},
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
@import './scss/LoadingComponent.scss';
</style>
