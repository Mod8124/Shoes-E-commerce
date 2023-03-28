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
</script>

<style lang="scss">
@import './scss/PhotoComponent.scss';
</style>
