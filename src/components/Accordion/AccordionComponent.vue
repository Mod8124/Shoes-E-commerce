<template>
  <article class="accordion">
    <h4 @click="toggleIsOpen" class="accordion__title">
      {{ title }} <v-icon name="hi-minus-sm" v-if="isOpen" fill="hsl(220, 13%, 13%)" />
      <v-icon name="hi-solid-plus" fill="hsl(220, 13%, 13%)" v-else />
    </h4>
    <p v-if="isOpen" class="accordion__para">{{ subTitle }}</p>
    <p v-if="isOpen" class="accordion__para">{{ description }}</p>
  </article>
</template>

<style lang="scss">
@import './scss/AccordionComponent.scss';
</style>

<script lang="ts">
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
</script>
