<template>
  <div class="nav__list nav__list--mobile">
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
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { computed } from 'vue';
export default {
  name: 'NavBar',
  computed: {},
  setup() {
    const store = useStore();
    const shoes = computed(() => store.state.shoes);
    const deleteShoes = (index: number) => store.commit('deleteShoes', index);
    const restart = () => store.commit('restart');
    return {
      shoes,
      deleteShoes,
      restart,
    };
  },
};
</script>

<style lang="scss">
@import './scss/MiniCard.scss';
</style>
