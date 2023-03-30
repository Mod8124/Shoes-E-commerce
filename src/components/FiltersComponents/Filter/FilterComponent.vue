<template>
  <section class="filter">
    <Search></Search>
    <article class="filters">
      <ShowFilter></ShowFilter>
      <Select price></Select>
    </article>
  </section>
</template>

<script lang="ts">
import FilterComponent from './logic/FilterComponent';
export default FilterComponent;
</script>

<style scoped>
@import './scss/FilterComponent.scss';
</style>
