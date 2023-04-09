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
    const showMenu = ref<boolean>(false);
    const store = useStore();
    const shoes = computed(() => store.state.cartModule.shoes);
    const showMiniCard = ref<boolean>(false);
    const active = ref<boolean>(false);
    const prevScroll = ref<number>(0);
    const navBar = ref<HTMLDivElement | null>(null);

    const isModalAuth = computed<boolean>(() => store.state.isModalAuth);

    const changeMiniCard = () => {
      showMiniCard.value = !showMiniCard.value;
    };

    const toggleMenu = () => {
      showMenu.value = !showMenu.value;
    };

    function handleScroll() {
      const currentScroll = window.pageYOffset;
      const navBarHeight = navBar.value?.offsetHeight || 0;
      if (prevScroll.value > currentScroll && currentScroll !== navBarHeight) {
        if (navBar.value !== null) {
          navBar.value.style.top = '0px';
          active.value = true;
        }
      } else {
        if (navBar.value !== null) {
          navBar.value.style.top = `-${navBarHeight}px`;
          active.value = false;
        }
      }
      prevScroll.value = currentScroll;
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
      navBar,
    };
  },
});
