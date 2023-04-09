import { defineComponent, PropType } from 'vue';
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
    const add = (product: ICartShoe) => store.commit('cartModule/add', product);

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
      count,
      addShopping,
    };
  },
});
