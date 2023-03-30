<template>
  <article class="nav__list nav__list--mobile">
    <p class="nav__subtitle">Cart</p>

    <div class="nav__listCartNotEmpty" v-if="shoes.length > 0">
      <div class="nav__listShopping" v-for="(shoe, index) in shoes" :key="index">
        <!--nav__listShopping-->

        <div class="nav__listShoppingImg">
          <img :src="shoe.img" :alt="shoe.name" class="nav__imgShopping" />
        </div>

        <div class="nav__listShoppingDetails">
          <p class="nav__listShoppingName">{{ shoe.name }}</p>
          <p class="nav__listShoppingPrices">
            ${{ shoe.price }} x {{ shoe.count }}
            <span class="nav__listShoppingPrices nav__listShoppingPrices--strong">number</span>
          </p>
        </div>

        <div class="nav__iconDelete">
          <button @click="deleteShoes(index)" class="nav__listShoppingDelete">
            <img src="@/assets/images/icon-delete.svg" alt="icon-delete" class="nav__listShoppingDeleteIcon" />
          </button>
        </div>
      </div>
      <!--nav__listShopping-->
    </div>

    <div class="nav__listCartEmpty" v-else>
      <p class="nav__listCartEmptyPara">Your cart is empty</p>
    </div>

    <div class="nav__check" v-if="shoes.length > 0">
      <button @click="restart" class="nav__checkBtn">Checkout</button>
    </div>
  </article>
</template>

<script lang="ts">
import MiniCard from './logic/MiniCard';
export default MiniCard;
</script>

<style lang="scss">
@import './scss/MiniCard.scss';
</style>
