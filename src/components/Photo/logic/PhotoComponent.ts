import { defineComponent, PropType } from 'vue';
import { ref } from '@vue/reactivity';
import Modal from '@/components/Modal/ModalComponent.vue';
import ShowProduct from '@/components/ShowProduct/ShowProduct.vue';
import { onMounted } from '@vue/runtime-core';
import { IShoe } from '@/interface/interface';

export default defineComponent({
  name: 'PhotoComponent',
  props: {
    shoe: {
      required: true,
      type: Object as PropType<IShoe>,
    },
    mainShoe: {
      required: true,
      type: Boolean as PropType<boolean>,
    },
  },
  components: {
    Modal,
    ShowProduct,
  },
  setup() {
    const screenSize = ref<boolean>(true);
    const showModal = ref<boolean>(false);

    const changeShowModal = () => {
      showModal.value = !showModal.value;
    };

    onMounted(() => {
      const endMobilWith = 700;

      window.addEventListener('resize', () => {
        if (window.innerWidth > endMobilWith) {
          screenSize.value = false;
        } else {
          screenSize.value = true;
        }
      });
      if (window.innerWidth > endMobilWith) {
        screenSize.value = false;
      } else {
        screenSize.value = true;
      }
    });

    return {
      showModal,
      changeShowModal,
      screenSize,
    };
  },
});
