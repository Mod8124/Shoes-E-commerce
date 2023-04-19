<template>
  <main class="product">
    <section class="product__view">
      <Photo :mainShoe="true" />
      <Detail :shoe="shoe[0]" v-if="!isFetching" />
      <InfoSkeleton v-if="isFetching" />
    </section>

    <!-- start recommendations -->
    <section class="product__recommendations">
      <h5>Relational Product</h5>
      <h2>WE RECOMMEND</h2>

      <article class="product__container product__recommendationsContainer" v-if="isFetching">
        <article
          v-for="cardSkeleton in [...Array(4).keys()]"
          :key="cardSkeleton + 'product-skeleton'"
          class="home__product"
        >
          <CardSkeleton />
        </article>
      </article>
      <article class="product__container product__recommendationsContainer" v-if="!isFetching">
        <nav v-for="shoe in recommendations" :key="shoe.id + 'recommendations'">
          <router-link
            :to="
              shoe.id === 1
                ? { name: 'Product', params: { id: shoe.id } }
                : { name: 'Details', params: { id: shoe.id } }
            "
          >
            <CardComponent :shoe="shoe" />
          </router-link>
        </nav>
      </article>
    </section>
    <!-- end recommendations -->
  </main>
</template>

<script lang="ts">
import ProductLogic from './logic/ProductView';
export default ProductLogic;
</script>

<style lang="scss">
@import './scss/ProductView.scss';
</style>
