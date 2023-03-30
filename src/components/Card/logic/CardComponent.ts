import Price from '@/components/Price/PriceComponent.vue';
import { defineComponent, PropType } from 'vue';
import { IShoe } from '@/interface/interface';

export default defineComponent({
  name: 'CardComponent',
  props: {
    shoe: {
      type: Object as PropType<IShoe>,
      required: true,
    },
  },
  components: {
    Price,
  },
});
