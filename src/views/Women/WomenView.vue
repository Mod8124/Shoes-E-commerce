<template>
  <main>
    <h1>women</h1>
  </main>
  <!-- <div class="home">
    <Loading v-if="shoes.length < 1"></Loading>
    <Filter v-if="shoes.length > 1" />

    <main v-if="shoes.length > 1" class="homeShoes">
      <section class="types">
        <h1 class="types__title">Shoes ({{ shoes.length }})</h1>
        <article class="types__types" v-for="type in types" :key="type + 'eso'">
          <h4 class="types__select">{{ type }}</h4>
        </article>
      </section>

      <section class="home__container">
        <article class="home__product" v-for="shoe in shoes" :key="shoe.id">
          <router-link
            :to="
              shoe.id === 0
                ? { name: 'Product', params: { id: shoe.name } }
                : { name: 'Details', params: { id: shoe.name } }
            "
          >
            <Card :shoe="shoe" />
          </router-link>
        </article>
      </section>
    </main>
  </div> -->
</template>

<script lang="ts">
import WomenView from './logic/WomenView';
export default WomenView;
</script>

<style scoped lang="scss">
@import './scss/WomenView.scss';
</style>
