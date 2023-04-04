import ShowProduct from '@/components/ShowProduct/ShowProduct.vue';
import { IShoe } from '@/interface/interface';
import { PropType, defineComponent } from 'vue';

export default defineComponent({
  name: 'ModalComponent',
  props: {
    title: {
      required: true,
      type: String as PropType<string>,
    },
    main: {
      required: true,
      type: Boolean as PropType<boolean>,
    },
    close: {
      required: true,
      type: Function,
    },
    shoe: {
      required: true,
      type: Object as PropType<IShoe>,
    },
  },
  components: {
    ShowProduct,
  },
});
