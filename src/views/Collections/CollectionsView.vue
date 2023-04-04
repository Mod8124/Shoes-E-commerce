<template>
  <main class="collections">
    <Filter />

    <section class="collectionsShoes">
      <article class="types" v-if="showFilter">
        <h1 class="types__title">Shoes (30 results)</h1>
        <ByTypes byCategory />
        <Select genre></Select>
        <ByTypes byBrand></ByTypes>
      </article>

      <section class="collections__container" v-if="isFetching">
        <article v-for="cardSkeleton in [...Array(15).keys()]" :key="cardSkeleton" class="home__product">
          <CardSkeleton />
        </article>
      </section>

      <section class="collections__container" v-if="!isFetching">
        <nav class="collections__product" v-for="shoe in shoes" :key="shoe.id + 'collections'">
          <router-link
            :to="
              shoe.id === 0
                ? { name: 'Product', params: { id: shoe.id } }
                : { name: 'Details', params: { id: shoe.id } }
            "
          >
            <Card :shoe="shoe" />
          </router-link>
        </nav>
        <!-- <Pagination /> -->
      </section>
    </section>
  </main>
</template>

<script lang="ts">
import HomeView from './logic/CollectionsView';
export default HomeView;
</script>

<style lang="scss">
@import './scss/CollectionsView.scss';
</style>
