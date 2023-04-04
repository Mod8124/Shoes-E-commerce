import { defineComponent } from 'vue';
import { discountMsg } from '@/helpers/DiscountMsg';
import { ref } from 'vue';
import { onMounted } from 'vue';

export default defineComponent({
  name: 'DiscountComponent',
  setup() {
    const index = ref<number>(0);

    const next = () => {
      if (index.value === discountMsg.length - 1) {
        index.value = 0;
        return;
      }
      index.value++;
      console.log(index);
    };

    onMounted(() => {
      setInterval(next, 7000);
    }); // Change image every 7 seconds

    return {
      index,
      discountMsg,
    };
  },
});
