import { IShoe } from '@/interface/interface';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'PriceComponent',
  props: {
    shoe: {
      type: Object as PropType<IShoe>,
      required: true,
    },
  },
});
