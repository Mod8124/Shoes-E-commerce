<template>
  <div class="showProduct">
    <div class="showProduct__mainImg">
      <div class="showProduct__arrow showProduct__arrow--left" @click.prevent="prev" v-if="showButtons">
        <svg class="showProduct__arrowSvg showProduct--left" width="12" height="18" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" />
        </svg>
      </div>

      <img
        :src="getImage(originalImgs[count])"
        alt="Fall Limited Edition Sneakers"
        class="showProduct__origalIms"
        v-if="showButtons"
      />
      <img
        :src="getImage(originalImgs[count])"
        alt="Fall Limited Edition Sneakers"
        @click="changeShowModal"
        v-if="!showButtons"
        class="showProduct__origalIms showProduct__origalIms--less"
      />

      <div class="showProduct__arrow showProduct__arrow--right" @click.prevent="next" v-if="showButtons">
        <svg class="showProduct__arrowSvg showProduct--right" width="13" height="18" xmlns="http://www.w3.org/2000/svg">
          <path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" />
        </svg>
      </div>
    </div>

    <div class="showProduct__imageThubnail">
      <div
        :class="count === index ? 'showPoduct__thubnail showPoduct__thubnail--active' : 'showPoduct__thubnail'"
        v-for="(img, index) in imgs"
        :key="index"
      >
        <img
          :src="getImage(img)"
          :alt="img"
          @click="changeCount(index)"
          :class="count === index ? 'showProduct__cardImg showProduct__cardImg--active' : 'showProduct__cardImg'"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
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
</script>

<style></style>
