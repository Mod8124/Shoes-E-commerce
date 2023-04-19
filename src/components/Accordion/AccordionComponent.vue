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
import AccordionComponent from './logic/AccordionComponent';
export default AccordionComponent;
</script>
