import { useStore } from 'vuex';
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'MiniCard',
  setup() {
    const store = useStore();
    const shoes = computed(() => store.state.cartModule.shoes);
    const deleteShoes = (index: number) => store.commit('cartModule/deleteShoes', index);
    const restart = () => store.commit('cartModule/restart');
    return {
      shoes,
      deleteShoes,
      restart,
    };
  },
});
