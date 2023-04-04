<template>
  <div class="card">
    <img :src="shoe.image" class="card__image" loading="lazy" :alt="shoe.name + 'image'" />
    <Price :shoe="shoe" />
  </div>
</template>

<script lang="ts">
import CardComponent from './logic/CardComponent';
export default CardComponent;
</script>

<style lang="scss">
@import './scss/CardComponent.scss';
</style>
