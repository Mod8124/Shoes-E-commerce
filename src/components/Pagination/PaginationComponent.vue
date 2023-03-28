<template>
  <section class="pagination">
    {{ page }}
    <v-icon
      name="io-arrow-back-circle-sharp"
      fill="#FF6E00"
      scale="1.7"
      class="pagination__arrow"
      v-if="page === 2"
      @click="changePage(1)"
    />
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
    <v-icon
      @click="changePage(2)"
      name="io-arrow-forward-circle"
      fill="#FF6E00"
      scale="1.7"
      class="pagination__arrow"
      v-if="page === 1"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'PaginationComponent',
  setup() {
    const page = ref<number>(2);
    const store = useStore();
    const changePage = (number: number) => {
      page.value = number;
      store.dispatch('getShoesData', {
        page: page.value,
      });
    };
    return { page, changePage };
  },
});
</script>

<style lang="scss" scoped>
@import './scss/PaginationComponent.scss';
</style>
