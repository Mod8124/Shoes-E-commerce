import { useStore } from 'vuex';
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'MiniCard',
  setup() {
    const store = useStore();
    const shoes = computed(() => store.state.shoes);
    const deleteShoes = (index: number) => store.commit('deleteShoes', index);
    const restart = () => store.commit('restart');
    return {
      shoes,
      deleteShoes,
      restart,
    };
  },
});
