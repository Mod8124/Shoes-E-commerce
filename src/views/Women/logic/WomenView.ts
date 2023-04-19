import Card from '@/components/Card/CardComponent.vue';
import Filter from '@/components/FiltersComponents/Filter/FilterComponent.vue';
import ByTypes from '@/components/FiltersComponents/ByTypes/ByTypes.vue';
import CardSkeleton from '@/components/Skeleton/Card/CardSkeleton.vue';
import { computed, onMounted, onUnmounted } from '@vue/runtime-core';
import { useStore } from 'vuex';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WomenView',
  components: {
    Card,
    Filter,
    ByTypes,
    CardSkeleton,
  },
  setup() {
    const store = useStore();
    const shoes = computed(() => store.getters.sortedSneakers);
    const showFilter = computed(() => store.state.showFilter);
    const isFetching = computed<boolean>(() => store.state.isFetching);
    const isEmpty = computed(() => store.getters.checkIsEmpty);
    const closeShowFilter = () => store.commit('changeShowFilter');

    onMounted(() => {
      if (shoes.value.length < 1) {
        store.dispatch('getShoesData', {
          page: 1,
        });
      }

      store.dispatch('set_filters', {
        filterType: 'gender',
        filterValue: 'Women',
      });
    });

    onUnmounted(() => {
      store.dispatch('set_filters', {
        filterType: 'gender',
        filterValue: '',
      });
    });

    return {
      shoes,
      showFilter,
      isFetching,
      isEmpty,
      closeShowFilter,
    };
  },
});
