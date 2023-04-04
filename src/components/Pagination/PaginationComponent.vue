<template>
  <section class="pagination">
    <button
      @click="changePage(1)"
      :class="page === 1 ? 'pagination__button pagination__button--active' : 'pagination__button'"
    >
      1
    </button>
    <button
      @click="changePage(2)"
      class="pagination__button"
      :class="page === 2 ? 'pagination__button pagination__button--active' : 'pagination__button'"
    >
      2
    </button>
  </section>
</template>

<script lang="ts">
import PaginationComponent from './logic/PaginationComponent';
export default PaginationComponent;
</script>

<style lang="scss" scoped>
@import './scss/PaginationComponent.scss';
</style>
