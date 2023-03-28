import { defineComponent } from 'vue';
// import fetchShoes from '@/fetch/fetchByGenre';
// import Card from '@/components/Card/Card';
// import Filter from '@/components/Filter/Filter';
// import Loading from '@/components/Loading/loading';
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'MenView',
  components: {
    // Card,
    // Filter,
    // Loading,
  },
  setup() {
    console.log('hello');
    // const { shoes, load } = fetchShoes('men');
    // load();
    // const store = useStore();
    // const showFilter = computed(() => store.state.showFilter);
    // const types = computed(() => {
    //   let unique = new Set();
    //   shoes.value.forEach((shoe) => unique.add(shoe.type));
    //   return Array.from(unique);
    // });
    // return {
    //   shoes,
    //   types,
    //   showFilter,
    // };
  },
});
