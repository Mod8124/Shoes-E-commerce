import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'HomeView',
  setup() {
    const store = useStore();
    const isLogin = computed<boolean>(() => store.state.userModule.isLogin);
    const changeModalAuth = () => {
      if (!isLogin.value) store.dispatch('set_ModalAuth');
    };
    return {
      changeModalAuth,
    };
  },
});
