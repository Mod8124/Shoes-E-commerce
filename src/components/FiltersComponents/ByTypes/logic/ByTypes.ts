import { computed, defineComponent, onMounted, PropType, ref } from 'vue';
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
    const filtersCategory = computed(() => store.state.filters['category']);
    const filtersBrand = computed(() => store.state.filters['brand']);
    const selectCategory = ref<string>('');
    const selectBrand = ref<string>('');

    onMounted(() => {
      if (filtersCategory.value !== '') selectCategory.value = filtersCategory.value;

      if (filtersBrand.value !== '') selectBrand.value = filtersBrand.value;
    });

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
