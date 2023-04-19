import { defineComponent, PropType, ref } from 'vue';
export default defineComponent({
  name: 'AccordionComponent',
  props: {
    title: {
      required: true,
      type: String as PropType<string>,
    },
    subTitle: {
      required: true,
      type: String as PropType<string>,
    },
    description: {
      required: true,
      type: String as PropType<string>,
    },
  },
  setup() {
    const isOpen = ref<boolean>(false);
    const toggleIsOpen = () => {
      isOpen.value = !isOpen.value;
    };
    return {
      isOpen,
      toggleIsOpen,
    };
  },
});
