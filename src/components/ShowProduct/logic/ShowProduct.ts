import { defineComponent } from 'vue';
import Imgs from '@/helpers/imgs';
import { ref } from '@vue/reactivity';
export default defineComponent({
  name: 'ShowProduct',
  components: {},
  props: ['showButtons', 'changeShowModal'],
  setup() {
    const { originalImgs, imgs } = Imgs();
    const count = ref(0);

    const getImage = (pic: string) => {
      return require('@/assets/images/' + pic);
    };

    const next = () => {
      if (count.value < 3) {
        count.value++;
        console.log('hola', count.value);
      }
      console.log('adios');
    };

    const prev = () => {
      if (count.value > 0) {
        count.value--;
      }
    };

    const changeCount = (index: number) => {
      count.value = index;
    };

    return {
      originalImgs,
      imgs,
      count,
      getImage,
      next,
      prev,
      changeCount,
    };
  },
});
