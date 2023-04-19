import { computed, defineComponent, onUnmounted, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'SignUp',
  props: {
    changeView: {
      type: Function,
      required: true,
    },
  },
  setup() {
    const email = ref<string>('');
    const password = ref<string>('');
    const showPassword = ref<boolean>(false);
    const store = useStore();
    const emailError = computed(() => store.state.userModule.errors.email);
    const passwordError = computed(() => store.state.userModule.errors.password);

    const toggleShowPassword = () => {
      showPassword.value = !showPassword.value;
    };

    const createAccount = () => {
      store.dispatch('userModule/register', {
        email: email.value,
        password: password.value,
      });
    };

    onUnmounted(() => {
      store.commit('userModule/restartErrors');
    });

    return {
      email,
      password,
      showPassword,
      emailError,
      passwordError,
      createAccount,
      toggleShowPassword,
    };
  },
});
