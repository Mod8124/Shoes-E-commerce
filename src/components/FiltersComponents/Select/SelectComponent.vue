<template>
  <article v-if="genre" class="genre">
    <div class="genre__container">
      <h3 class="genre__title">Gender {{ pickedGender !== '' ? '(1)' : '' }}</h3>
      <input
        type="checkbox"
        class="genre__input"
        id="men"
        v-model="pickedGender"
        true-value="Men"
        false-value=""
        @change="filterByGenre(pickedGender)"
      />
      <label for="men" class="genre__label">Men</label>
    </div>

    <div class="genre__container">
      <input
        type="checkbox"
        class="genre__input"
        id="women"
        v-model="pickedGender"
        true-value="Women"
        false-value=""
        @change="filterByGenre(pickedGender)"
      />
      <label for="women" class="genre__label">Women</label>
    </div>
  </article>

  <article v-if="price" class="price">
    <label for="low" class="price__title">Sort By:</label>
    <select class="price__select" v-model="pickedPrice" @change="sortByPrice(pickedPrice)">
      <option value="" class="price__option">Featured</option>
      <option value="high" class="price__option">Price: High-Low</option>
      <option value="low" class="price__option">Price: Low-High</option>
    </select>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'SelectComponent',
  components: {},
  props: {
    genre: {
      require: false,
      type: Boolean as PropType<boolean>,
    },
    price: {
      required: false,
      type: Boolean as PropType<boolean>,
    },
  },
  setup() {
    const pickedPrice = ref<string>('');
    const pickedGender = ref<string>('');
    const store = useStore();

    const filterByGenre = (gender: string) => {
      store.dispatch('set_filters', {
        filterType: 'gender',
        filterValue: gender,
      });
    };

    const sortByPrice = (price: string) => {
      store.dispatch('set_filters', {
        filterType: 'sort',
        filterValue: price,
      });
    };

    return {
      pickedPrice,
      pickedGender,
      sortByPrice,
      filterByGenre,
    };
  },
});
</script>

<style scoped lang="scss">
@import './scss/SelectComponent.scss';
</style>
