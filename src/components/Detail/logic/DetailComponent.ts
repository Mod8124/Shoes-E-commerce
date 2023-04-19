import { computed, defineComponent, PropType } from 'vue';
import { ref } from '@vue/reactivity';
import { useStore } from 'vuex';
import Price from '@/components/Price/PriceComponent.vue';
import { ICartShoe, IShoe } from '@/interface/interface';

export default defineComponent({
  props: {
    shoe: {
      type: Object as PropType<IShoe>,
      required: true,
    },
  },
  components: {
    Price,
  },
  setup(props) {
    const count = ref<number>(0);
    const store = useStore();
    const isLogin = computed(() => store.state.userModule.isLogin);
    const add = (product: ICartShoe) => store.commit('cartModule/add', product);
    const isFavorite = ref(false);
    const addFavorites = (shoe: IShoe) => {
      const { id, name, image, company } = shoe;
      if (!isLogin.value) return;
      store.dispatch('userModule/addFavorites', {
        id,
        name,
        image,
        company,
      });
      isFavorite.value = true;
      setTimeout(() => (isFavorite.value = false), 2000);
    };

    const addShopping = () => {
      if (count.value > 0) {
        const newOrder = {
          name: props.shoe.name,
          img: props.shoe.image,
          price: props.shoe.price,
          count: count.value,
        };

        add(newOrder);
        count.value = 0;
      }
    };

    return {
      isFavorite,
      count,
      addShopping,
      addFavorites,
    };
  },
});
