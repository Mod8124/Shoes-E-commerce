<template>
  <section>
    <article v-if="byBrand" class="genre">
      <h3 class="genre__title">Brands {{ selectBrand !== '' ? '(1)' : '' }}</h3>
      <div class="types__types" v-for="brand in BRANDS" :key="brand + 'brands'">
        <h4
          :class="selectBrand === brand ? 'types__select types__select--active' : 'types__select'"
          @click="getBrand(brand)"
        >
          {{ brand.toLowerCase() }}
        </h4>
      </div>
    </article>

    <article v-if="byCategory">
      <div class="types__types" v-for="category in TYPES" :key="category">
        <h4
          :class="selectCategory === category ? 'types__select types__select--active' : 'types__select'"
          @click="getCategory(category)"
        >
          {{ category }}
        </h4>
      </div>
    </article>
  </section>
</template>

<script lang="ts">
import ByTypes from './logic/ByTypes';
export default ByTypes;
</script>

<style scoped lang="scss">
@import './scss/ByTypes.scss';
</style>
