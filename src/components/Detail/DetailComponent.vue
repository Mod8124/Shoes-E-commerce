<template>
  <section class="detail" v-if="shoe">
    <h2 class="detail__company">{{ shoe.company }}</h2>
    <h1 class="detail__name">{{ shoe.name }}</h1>

    <p class="detail__description">{{ shoe.description }}</p>

    <Price :shoe="shoe" />

    <div class="detail__add">
      <div class="detail__buttons">
        <button @click="count > 0 ? count-- : (count = 0)" class="detail__btn detail__btn--minus">
          <img src="@/assets/images/icon-minus.svg" alt="icon-minus" class="detail__minusIcon" />
        </button>

        <span class="detail__count">{{ count }}</span>

        <button @click="count++" class="detail__btn detail__btn--plus">
          <img src="@/assets/images/icon-plus.svg" alt="icon-plus" class="detail__plusImg" />
        </button>
      </div>

      <div class="detail__addtoCart">
        <button @click="addShopping" class="detail__addTocartBtn">
          <img src="@/assets/images/icon-cart-white.svg" alt="icon-cart-white" class="detail__addToCartBtn" />Add to
          cart
        </button>
      </div>
    </div>
    <button class="detail__favoriteBtn" @click="addFavorites(shoe)">
      <v-icon name="hi-heart" fill="hsl(26, 100%, 55%)" scale="1.1" v-if="!isFavorite" />
      <v-icon name="hi-solid-heart" fill="hsl(26, 100%, 55%)" scale="1.1" v-if="isFavorite" />
      {{ isFavorite ? 'Adding' : 'Favorite' }}
    </button>
  </section>
</template>

<script lang="ts">
import DetailComponent from './logic/DetailComponent';
export default DetailComponent;
</script>

<style lang="scss">
@import './scss/DetailComponent.scss';
</style>
