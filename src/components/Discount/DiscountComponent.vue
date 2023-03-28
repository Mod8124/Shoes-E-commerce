<template>
  <section class="discountComponent">
    <h3 class="discountComponent__title">
      🔸 <span class="discountComponent__span">{{ discountMsg[index][0].toUpperCase() }}</span>
      {{ discountMsg[index][1].toUpperCase() }} 🔸
    </h3>
  </section>
</template>

<script lang="ts">
import DiscountLogic from './logic/DiscountComponent';
export default DiscountLogic;
</script>

<style lang="scss" scoped>
@import './scss/DiscountComponent.scss';
</style>
