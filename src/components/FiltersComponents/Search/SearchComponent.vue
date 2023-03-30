<template>
  <article class="search">
    <img class="search__img" src="@/assets/images/icon-search.svg" alt="icon-search" />
    <input class="search__input" v-model="search" @keyup="getSearch" type="text" placeholder="Search" />
  </article>
</template>

<script lang="ts">
import SearchComponent from './logic/SearchComponent';
export default SearchComponent;
</script>

<style scoped lang="scss">
@import './scss/SearchComponent.scss';
</style>
