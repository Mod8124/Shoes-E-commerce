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
    <select class="price__select" v-model="filterSort">
      <option v-for="option in optionsSelect" :value="option.value" :key="option.value" class="price__option">
        {{ option.label }}
      </option>
    </select>
  </article>
</template>

<script lang="ts">
import SelectComponent from './logic/SelectComponent';
export default SelectComponent;
</script>

<style scoped lang="scss">
@import './scss/SelectComponent.scss';
</style>
