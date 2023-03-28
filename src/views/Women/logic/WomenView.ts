import { defineComponent } from 'vue';
// import fetchShoes from '@/fetch/fetchByGenre';
// import Card from '@/components/Card/Card';
// import Loading from '@/components/Loading/loading';
// import Filter from '@/components/Filter/Filter';

export default defineComponent({
  name: 'WomenView',
  components: {
    // Card,
    // Loading,
    // Filter,
  },
  setup() {
    console.log('hello');
    // const { shoes, load } = fetchShoes('women');
    // load();
    // const types = computed(() => {
    //   let unique = new Set();
    //   shoes.value.forEach((shoe) => unique.add(shoe.type));
    //   return Array.from(unique);
    // });
    // return {
    //   shoes,
    //   types,
    // };
  },
});
