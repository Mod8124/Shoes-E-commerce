<template>
  <main class="collections menView">
    <Filter />

    <section class="collectionsShoes">
      <article class="types" v-if="showFilter">
        <h1 class="types__title">Men's Shoes ({{ shoes.length }})</h1>
        <ByTypes byCategory />
        <ByTypes byBrand></ByTypes>
      </article>

      <section class="collections__container" v-if="isFetching">
        <article v-for="cardSkeleton in [...Array(15).keys()]" :key="cardSkeleton" class="home__product">
          <CardSkeleton />
        </article>
      </section>

      <section class="collections__container" v-if="!isFetching">
        <article class="collections__product" v-for="shoe in shoes" :key="shoe.id + 'genre'">
          <router-link
            :to="
              shoe.id === 0
                ? { name: 'Product', params: { id: shoe.id } }
                : { name: 'Details', params: { id: shoe.id } }
            "
          >
            <Card :shoe="shoe" />
          </router-link>
        </article>
      </section>
    </section>
  </main>
</template>

<script lang="ts">
import MenView from './logic/MenView';
export default MenView;
</script>

<style lang="scss" scoped>
@import './scss/MenView.scss';
</style>
