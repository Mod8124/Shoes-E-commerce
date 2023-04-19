<template>
  <div :class="view === '' ? 'accountAuth' : 'accountAuth accountAuth--favorites'">
    <div class="accountAuth__container" v-if="view === ''">
      <p class="accountAuth__para accountAuth__icon"><v-icon fill="hsl(220, 13%, 13%)" name="pr-user" />My Account</p>
      <p @click="changeView('favorites')" class="accountAuth__para accountAuth__icon">
        <v-icon fill="hsl(220, 13%, 13%)" name="hi-heart" />Favorites
      </p>
      <p @click="logout" class="accountAuth__para accountAuth__icon">
        <v-icon fill="hsl(220, 13%, 13%)" name="co-account-logout" />Log out
      </p>
    </div>

    <div v-if="view === 'favorites'" class="favorites__container">
      <div class="accountAuth__icon" @click="changeView('')"><v-icon name="md-keyboardarrowleft-outlined" /></div>
      <h3 :class="isFetching ? 'favorites__title favorites__title--active' : 'favorites__title'">Favorites</h3>
      <div class="favorites__loading">
        <v-icon v-if="isFetching" fill="hsl(26, 100%, 55%)" name="fa-spinner" scale="2" animation="spin-pulse" />
      </div>
      <p class="favorites__para favorites__para--sub" v-if="!isFetching && favorites.favorites.length < 1">
        You don’t have any favorites
      </p>
      <p class="favorites__para" v-if="!isFetching && favorites.favorites.length < 1">
        Did you know we update our collection every week?
      </p>

      <div class="favoritesCards" v-if="!isFetching">
        <article v-for="favorite in favorites.favorites" :key="favorite.id">
          <!-- start card favorite -->
          <div class="favoritesCard">
            <router-link
              :to="
                favorite.id === 1
                  ? { name: 'Product', params: { id: favorite.id } }
                  : { name: 'Details', params: { id: favorite.id } }
              "
            >
              <div class="favoritesCard__image">
                <img :src="favorite.image" :alt="'image' + favorite.name" />
              </div>
            </router-link>
            <router-link
              :to="
                favorite.id === 1
                  ? { name: 'Product', params: { id: favorite.id } }
                  : { name: 'Details', params: { id: favorite.id } }
              "
            >
              <div class="favoritesCard__details">
                <h5 class="favoritesCard__company">{{ favorite.company }}</h5>
                <p class="favoritesCard__para">{{ favorite.name }}</p>
              </div>
            </router-link>

            <div class="favoritesCard__delete">
              <button class="favoritesCard__deleteBtn" @click="handleDelete(favorite)">
                <v-icon name="la-trash-alt-solid" fill="hsl(219, 9%, 45%)" />
              </button>
            </div>
          </div>
          <!-- finish card favorite -->
        </article>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../Account/scss/AccountAuth.scss';
</style>

<script lang="ts">
import AccountAuth from './logic/AccountAuth';
export default AccountAuth;
</script>
