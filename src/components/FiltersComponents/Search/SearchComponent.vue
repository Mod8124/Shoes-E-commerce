<template>
  <article class="search">
    <img class="search__img" src="@/assets/images/icon-search.svg" alt="icon-search" />
    <input class="search__input" v-model="search" @keyup="getSearch" type="text" placeholder="Search" />
  </article>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'SearchComponent',
  setup() {
    const store = useStore();
    const search = ref<string>('');

    const getSearch = () => {
      store.dispatch('set_filters', {
        filterType: 'search',
        filterValue: search.value,
      });
    };
    return {
      search,
      getSearch,
    };
  },
});
</script>

<style scoped lang="scss">
@import './scss/SearchComponent.scss';
</style>
