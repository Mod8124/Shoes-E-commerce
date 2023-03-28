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
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ref } from '@vue/reactivity';
import { useStore } from 'vuex';
import Price from '@/components/Price/PriceComponent.vue';
import { ICarShoe } from '@/interface/interface';

export default defineComponent({
  props: ['shoe'],
  components: {
    Price,
  },
  setup(props) {
    const count = ref<number>(0);
    const store = useStore();
    const add = (product: ICarShoe) => store.commit('add', product);

    const addShopping = () => {
      if (count.value > 0) {
        const newOrder = {
          name: props.shoe.name,
          img: props.shoe.image,
          price: props.shoe.price,
          count: count.value,
        };

        add(newOrder);
        count.value = 0;
      }
    };

    return {
      count,
      addShopping,
    };
  },
});
</script>

<style lang="scss">
@import './scss/DetailComponent.scss';
</style>
