import { computed, defineComponent, PropType } from 'vue';
import { ref } from 'vue';
import { useStore } from 'vuex';
import { IFilters } from '@/interface/interface';

export default defineComponent({
  name: 'SelectComponent',
  components: {},
  props: {
    genre: {
      require: false,
      type: Boolean as PropType<boolean>,
    },
    price: {
      required: false,
      type: Boolean as PropType<boolean>,
    },
  },
  setup() {
    const pickedPrice = ref<string>('');
    const pickedGender = ref<string>('');
    const store = useStore();
    const filterSort = computed<IFilters>({
      get: () => store.state.filters['sort'],
      set: (value) =>
        store.dispatch('set_filters', {
          filterType: 'sort',
          filterValue: value,
        }),
    });

    const optionsSelect = [
      { value: '', label: 'Featured' },
      { value: 'high', label: 'Price: High-Low' },
      { value: 'low', label: 'Price: Low-High' },
    ];

    const filterByGenre = (gender: string) => {
      store.dispatch('set_filters', {
        filterType: 'gender',
        filterValue: gender,
      });
    };

    return {
      pickedPrice,
      pickedGender,
      filterByGenre,
      filterSort,
      optionsSelect,
    };
  },
});
