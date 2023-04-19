<template>
  <main class="women">
    <Filter />

    <!-- star main section -->
    <section class="womenShoes">
      <article class="types" v-if="showFilter">
        <h1 class="types__title">Women's Shoes ({{ shoes.length }})</h1>
        <ByTypes byCategory />
        <ByTypes byBrand></ByTypes>
      </article>

      <!-- start filter mobile -->
      <article class="typesMobile" v-if="!showFilter">
        <div class="typesMobile__details">
          <h4 class="typesMobile__title">Filters</h4>
          <v-icon
            class="typesMobile__icon"
            fill="hsl(220, 13%, 13%)"
            scale="1.4"
            name="md-close-round"
            @click="closeShowFilter"
          ></v-icon>
        </div>
        <ByTypes byCategory />
        <ByTypes byBrand></ByTypes>
      </article>
      <!-- end filter mobile -->

      <section class="women__container" v-if="isFetching">
        <article v-for="cardSkeleton in [...Array(15).keys()]" :key="cardSkeleton" class="home__product">
          <CardSkeleton />
        </article>
      </section>

      <section class="women__containerr">
        <article class="women__container" v-if="isFetching">
          <div v-for="cardSkeleton in [...Array(15).keys()]" :key="cardSkeleton" class="home__product">
            <CardSkeleton />
          </div>
        </article>

        <article
          :class="showFilter ? 'women__container' : 'women__container women__container--active'"
          v-if="!isFetching"
        >
          <nav class="women__product" v-for="shoe in shoes" :key="shoe.id + 'women'">
            <router-link
              :to="
                shoe.id === 1
                  ? { name: 'Product', params: { id: shoe.id } }
                  : { name: 'Details', params: { id: shoe.id } }
              "
            >
              <Card :shoe="shoe" />
            </router-link>
          </nav>
        </article>

        <h3 class="women__empty" v-if="isEmpty">There are no shoes that match your current criteria</h3>
      </section>
      <!-- end  main section -->
    </section>
  </main>
</template>

<script lang="ts">
import WomenView from './logic/WomenView';
export default WomenView;
</script>

<style scoped lang="scss">
@import './scss/WomenView.scss';
</style>
