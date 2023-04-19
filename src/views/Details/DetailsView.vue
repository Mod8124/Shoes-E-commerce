<template>
  <main class="details">
    <DetailsSkeleton v-if="isFetching" />

    <section class="details__view" v-if="!isFetching">
      <Photo :mainShoe="false" :shoe="shoe[0]" />
      <Detail :shoe="shoe[0]" />
    </section>

    <section class="details__recommendations">
      <h5>Relational Product /</h5>
      <h2>WE RECOMMEND</h2>

      <article class="details__container details__recommendationsContainer" v-if="isFetching">
        <article
          v-for="cardSkeleton in [...Array(4).keys()]"
          :key="cardSkeleton + 'details-skeleton'"
          class="home__product"
        >
          <CardSkeleton />
        </article>
      </article>
      <article class="details__container details__recommendationsContainer" v-if="!isFetching">
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
  </main>
</template>

<script lang="ts">
import DetailsView from './logic/DetailsView';
export default DetailsView;
</script>

<style lang="scss">
@import './scss/DetailsView.scss';
</style>
