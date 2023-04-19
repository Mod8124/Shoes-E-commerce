import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import { ref, computed, onUnmounted } from 'vue';

export default defineComponent({
  name: 'LoginAuth',
  props: ['changeView'],
  setup() {
    const store = useStore();
    const email = ref<string>('');
    const password = ref<string>('');
    const showPassword = ref<boolean>(false);
    const emailError = computed<string>(() => store.state.userModule.errors.email);
    const passwordError = computed<string>(() => store.state.userModule.errors.password);
    const isFetching = computed<boolean>(() => store.state.userModule.isFetching);

    const toggleShowPassword = () => {
      showPassword.value = !showPassword.value;
    };

    onUnmounted(() => {
      store.commit('userModule/restartErrors');
    });

    const login = () => {
      store.dispatch('userModule/login', {
        email: email.value,
        password: password.value,
      });
    };

    const closeModal = () => {
      store.dispatch('set_ModalAuth');
    };
    return {
      email,
      password,
      showPassword,
      closeModal,
      emailError,
      passwordError,
      login,
      isFetching,
      toggleShowPassword,
    };
  },
});
