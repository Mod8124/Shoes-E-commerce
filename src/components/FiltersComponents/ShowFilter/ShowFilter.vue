<template>
  <article class="showFilter">
    <h4 class="showFilter__title" @click="changeFilter">{{ showFilter ? 'Show' : 'Hide' }} Filters</h4>
    <img class="showFilter__icon" src="@/assets/images/icon-setting2.svg" alt="icon-setting" />
  </article>
</template>

<script lang="ts">
import ShowFilter from './logic/ShowFilter';
export default ShowFilter;
</script>

<style lang="scss">
@import './scss/ShowFilter.scss';
</style>
