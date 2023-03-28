import Card from '@/components/Card/CardComponent.vue';
import Filter from '@/components/FiltersComponents/Filter/FilterComponent.vue';
import Select from '@/components/FiltersComponents/Select/SelectComponent.vue';
import ByTypes from '@/components/FiltersComponents/ByTypes/ByTypes.vue';
import { computed, defineComponent, onMounted } from 'vue';
import Pagination from '@/components/Pagination/PaginationComponent.vue';
import CardSkeleton from '@/components/Skeleton/Card/CardSkeleton.vue';
import { useStore } from 'vuex';
import { IShoe } from '@/interface/interface';

export default defineComponent({
  name: 'CollectionsView',
  components: {
    Card,
    Filter,
    Select,
    ByTypes,
    Pagination,
    CardSkeleton,
  },
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch('getShoesData', {
        page: 1,
      });
    });
    const shoes = computed(() => store.getters.sortedSneakers);
    const showFilter = computed<boolean>(() => store.state.showFilter);
    const isFetching = computed<boolean>(() => store.state.isFetching);

    const categories = computed(() => {
      const unique = new Set();
      shoes.value.forEach((shoe: IShoe) => unique.add(shoe.type));
      return Array.from(unique);
    });

    const brands = computed(() => {
      const unique = new Set();
      shoes.value.forEach((shoe: IShoe) => unique.add(shoe.company));
      return Array.from(unique);
    });

    return {
      shoes,
      isFetching,
      categories,
      brands,
      showFilter,
    };
  },
});
