import ShowProduct from '@/components/ShowProduct/ShowProduct.vue';
import { IShoe } from '@/interface/interface';
import { PropType, defineComponent, onMounted, onBeforeUnmount } from 'vue';

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
  setup() {
    onMounted(() => {
      document.body.style.overflow = 'hidden'; // Ensure overflow is initially set to auto
    });

    onBeforeUnmount(() => {
      document.body.style.overflow = 'auto'; // Restore overflow to auto when component is unmounted
    });
  },
});
