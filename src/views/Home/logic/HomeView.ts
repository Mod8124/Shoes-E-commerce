import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'HomeView',
  setup() {
    const store = useStore();
    const changeModalAuth = () => {
      store.dispatch('set_ModalAuth');
    };
    return {
      changeModalAuth,
    };
  },
});
