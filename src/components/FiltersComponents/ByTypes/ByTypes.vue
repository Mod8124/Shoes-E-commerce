<template>
  <section>
    <article v-if="byBrand" class="genre">
      <h3 class="genre__title">Brands {{ selectBrand !== '' ? '(1)' : '' }}</h3>
      <div class="types__types" v-for="brand in BRANDS" :key="brand + 'brands'">
        <h4
          :class="selectBrand === brand ? 'types__select types__select--active' : 'types__select'"
          @click="getBrand(brand)"
        >
          {{ brand.toLowerCase() }}
        </h4>
      </div>
    </article>

    <article v-if="byCategory">
      <div class="types__types" v-for="category in TYPES" :key="category">
        <h4
          :class="selectCategory === category ? 'types__select types__select--active' : 'types__select'"
          @click="getCategory(category)"
        >
          {{ category }}
        </h4>
      </div>
    </article>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { useStore } from 'vuex';
import { featured } from '@/helpers/featured';

export default defineComponent({
  name: 'ByTypes',
  props: {
    byBrand: {
      require: true,
      type: Boolean as PropType<boolean>,
    },
    byCategory: {
      require: true,
      type: Boolean as PropType<boolean>,
    },
  },
  setup() {
    const store = useStore();
    const selectCategory = ref<string>('');
    const selectBrand = ref<string>('');

    const { TYPES, BRANDS } = featured();

    const getCategory = (category: string) => {
      selectCategory.value = selectCategory.value === category ? '' : category;
      store.dispatch('set_filters', {
        filterType: 'category',
        filterValue: selectCategory,
      });
    };

    const getBrand = (brand: string) => {
      selectBrand.value = selectBrand.value === brand ? '' : brand;
      store.dispatch('set_filters', {
        filterType: 'brand',
        filterValue: selectBrand,
      });
    };

    return {
      getBrand,
      getCategory,
      TYPES,
      BRANDS,
      selectCategory,
      selectBrand,
    };
  },
});
</script>

<style scoped lang="scss">
@import './scss/ByTypes.scss';
</style>
