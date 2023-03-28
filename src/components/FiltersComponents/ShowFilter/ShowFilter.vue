<template>
  <article class="showFilter">
    <h4 class="showFilter__title" @click="changeFilter">{{ showFilter ? 'Show' : 'Hide' }} Filters</h4>
    <img class="showFilter__icon" src="@/assets/images/icon-setting2.svg" alt="icon-setting" />
  </article>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { computed, defineComponent } from 'vue';
export default defineComponent({
  name: 'ShowFilter',
  setup() {
    const store = useStore();
    const showFilter = computed(() => store.state.showFilter);
    const changeFilter = () => store.commit('changeShowFilter');

    return {
      showFilter,
      changeFilter,
    };
  },
});
</script>

<style lang="scss">
@import './scss/ShowFilter.scss';
</style>
