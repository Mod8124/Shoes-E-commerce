import { computed, defineComponent, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'SearchComponent',
  setup() {
    const store = useStore();
    const filterSearch = computed<string>(() => store.state.filters['search']);
    const search = ref<string>('');

    onMounted(() => {
      if (filterSearch.value !== '') search.value = filterSearch.value;
    });

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
