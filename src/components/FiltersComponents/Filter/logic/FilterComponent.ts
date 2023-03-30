import Search from '@/components/FiltersComponents/Search/SearchComponent.vue';
import Select from '@/components/FiltersComponents/Select/SelectComponent.vue';
import ShowFilter from '@/components/FiltersComponents/ShowFilter/ShowFilter.vue';
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
