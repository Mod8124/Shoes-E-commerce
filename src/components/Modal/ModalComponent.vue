<template>
  <section class="modal">
    <div class="modal__container">
      <div class="modal__close">
        <svg @click="close" class="modal__closeSvg" width="14" height="15" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="#69707D"
            fill-rule="evenodd"
          />
        </svg>
      </div>

      <ShowProduct :showButtons="true" v-if="main" />

      <div class="modal__imageMainImg" v-if="!main">
        <img :src="shoe.image" :alt="title" class="modal__imgMain" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import ModalComponent from './logic/ModalComponent';
export default ModalComponent;
</script>

<style lang="scss" scoped>
@import './scss/ModalComponent.scss';
</style>
