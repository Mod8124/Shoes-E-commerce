import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'PaginationComponent',
  setup() {
    const page = ref<number>(1);
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
