import { computed, defineComponent, ref } from 'vue';
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
    const store = useStore();
    const emailError = computed(() => store.state.userModule.errors.email);
    const passwordError = computed(() => store.state.userModule.errors.password);

    console.log(emailError);
    console.log(passwordError);
    const createAccount = () => {
      store.dispatch('userModule/register', {
        email: email.value,
        password: password.value,
      });
    };

    return {
      email,
      password,
      emailError,
      passwordError,
      createAccount,
    };
  },
});
