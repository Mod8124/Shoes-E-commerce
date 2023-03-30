import { defineComponent } from 'vue';
import { ref } from '@vue/reactivity';
import Modal from '@/components/Modal/ModalComponent.vue';
import ShowProduct from '@/components/ShowProduct/ShowProduct.vue';
import { onMounted } from '@vue/runtime-core';

export default defineComponent({
  name: 'PhotoComponent',
  props: ['shoe', 'mainShoe'],
  components: {
    Modal,
    ShowProduct,
  },
  setup() {
    const screenSize = ref(true);
    const showModal = ref(false);

    const changeShowModal = () => {
      showModal.value = !showModal.value;
    };

    onMounted(() => {
      window.addEventListener('resize', () => {
        if (window.innerWidth > 700) {
          screenSize.value = false;
        } else {
          screenSize.value = true;
        }
      });
      if (window.innerWidth > 700) {
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
