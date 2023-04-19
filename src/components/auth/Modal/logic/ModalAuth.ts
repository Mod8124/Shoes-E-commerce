import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
import LoginAuth from '../../Login/LoginAuth.vue';
import SignUp from '../../Signup/SignUp.vue';

export default defineComponent({
  name: 'ModalAuth',
  components: {
    LoginAuth,
    SignUp,
  },
  setup() {
    const view = ref<string>('LogIn');
    const changeView = (text: string) => {
      view.value = text;
    };
    onMounted(() => {
      document.body.style.overflow = 'hidden'; // Ensure overflow is initially set to auto
    });

    onBeforeUnmount(() => {
      document.body.style.overflow = 'auto'; // Restore overflow to auto when component is unmounted
    });

    return {
      view,
      changeView,
    };
  },
});
