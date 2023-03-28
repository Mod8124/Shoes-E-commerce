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
import Search from '@/components/FiltersComponents/Search/SearchComponent.vue';
import Select from '@/components/FiltersComponents/Select/SelectComponent.vue';
import ShowFilter from '../ShowFilter/ShowFilter.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'FilterComponent',
  components: {
    Search,
    Select,
    ShowFilter,
  },
  setup() {
    const search = ref<string>('');

    return {
      search,
    };
  },
});
</script>

<style scoped>
@import './scss/FilterComponent.scss';
</style>
