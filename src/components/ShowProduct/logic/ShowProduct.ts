import { defineComponent } from 'vue';
import Imgs from '@/helpers/imgs';
import { ref } from '@vue/reactivity';
export default defineComponent({
  name: 'ShowProduct',
  components: {},
  props: ['showButtons', 'changeShowModal'],
  setup() {
    const { originalImgs, imgs } = Imgs();
    const count = ref<number>(0);

    const getImage = (pic: string) => {
      return require('@/assets/images/' + pic);
    };

    const next = () => {
      const MAXINDEX = 3;
      if (count.value < MAXINDEX) {
        count.value++;
      }
    };

    const prev = () => {
      const MININDEX = 0;
      if (count.value > MININDEX) {
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
