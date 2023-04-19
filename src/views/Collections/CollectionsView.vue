<template>
  <main class="collections">
    <Filter />

    <!-- start main section -->
    <section class="collectionsShoes">
      <article class="types" v-if="showFilter">
        <h1 class="types__title">Shoes (30 results)</h1>
        <ByTypes byCategory />
        <Select genre></Select>
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
        <Select genre></Select>
        <ByTypes byBrand></ByTypes>
      </article>
      <!-- end filter mobile -->

      <section class="collections__containerr">
        <article class="collections__container" v-if="isFetching">
          <div v-for="cardSkeleton in [...Array(15).keys()]" :key="cardSkeleton" class="home__product">
            <CardSkeleton />
          </div>
        </article>

        <article
          :class="showFilter ? 'collections__container' : 'collections__container collections__container--active'"
          v-if="!isFetching"
        >
          <nav class="collections__product" v-for="shoe in shoes" :key="shoe.id + 'collections'">
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

        <h3 class="collections__empty" v-if="isEmpty">There are no shoes that match your current criteria</h3>

        <Pagination />
      </section>
      <!-- end main section -->
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
