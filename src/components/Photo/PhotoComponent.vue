<template>
  <div class="photo">
    <!--start photo-->

    <div class="photo__especial" v-if="mainShoe">
      <!--start photo__especial-->
      <ShowProduct :showButtons="screenSize" :changeShowModal="screenSize === false ? changeShowModal : ''" />
      <Modal :main="true" v-if="showModal" title="Fall Limited Edition Sneakers" :close="changeShowModal" />
    </div>
    <!--end photo__especial-->

    <div v-if="!mainShoe && shoe" class="photo__normal">
      <img :src="shoe.image" :alt="shoe.name" @click="changeShowModal" class="photo__imgNormal" />
      <Modal :main="false" v-if="showModal" :title="shoe.name" :close="changeShowModal" :shoe="shoe" />
    </div>
  </div>
  <!--end photo-->
</template>

<script lang="ts">
import PhotoComponent from './logic/PhotoComponent';
export default PhotoComponent;
</script>

<style lang="scss">
@import './scss/PhotoComponent.scss';
</style>
