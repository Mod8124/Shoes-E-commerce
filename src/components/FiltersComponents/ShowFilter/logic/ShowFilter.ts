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
