import { useStore } from 'vuex';
import { computed, ref, defineComponent } from 'vue';
import MiniCard from '@/components/MiniCard/MiniCard.vue';
import ModalAuth from '@/components/auth/Modal/ModalAuth.vue';

export default defineComponent({
  name: 'NavBar',
  components: {
    MiniCard,
    ModalAuth,
  },
  setup() {
    const showMenu = ref(false);
    const store = useStore();
    const shoes = computed(() => store.state.shoes);
    const showMiniCard = ref(false);
    const active = ref(false);

    const isModalAuth = computed<boolean>(() => store.state.isModalAuth);

    const changeMiniCard = () => {
      showMiniCard.value = !showMiniCard.value;
    };

    const toggleMenu = () => {
      showMenu.value = !showMenu.value;
    };

    function handleScroll() {
      if (window.scrollY > 1) {
        active.value = true;
      } else {
        active.value = false;
      }
    }

    const changeModalAuth = () => {
      store.dispatch('set_ModalAuth');
    };

    window.addEventListener('scroll', handleScroll);

    return {
      showMenu,
      shoes,
      showMiniCard,
      changeMiniCard,
      toggleMenu,
      active,
      isModalAuth,
      changeModalAuth,
    };
  },
});
