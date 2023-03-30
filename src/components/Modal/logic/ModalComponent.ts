import ShowProduct from '@/components/ShowProduct/ShowProduct.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ModalComponent',
  props: ['title', 'main', 'close', 'shoe'],
  components: {
    ShowProduct,
  },
});
