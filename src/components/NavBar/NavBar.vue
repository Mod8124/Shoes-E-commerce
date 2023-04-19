<template>
  <header :class="active ? 'nav nav-mobile nav--active' : 'nav nav--mobile'">
    <!--start nav-->

    <div :class="active ? 'nav__desktop nav__desktop--active' : 'nav__desktop'" ref="navBar">
      <!--nav__desktop-->
      <div class="nav__logo nav__logo-desktop">
        <router-link to="/">
          <img src="@/assets/images/logo.svg" alt="logo-svg" />
        </router-link>
      </div>

      <nav class="nav__links">
        <router-link to="/Collections" class="nav__link nav__link--noSpace">Collections</router-link>
        <router-link to="/Men" class="nav__link">Men</router-link>
        <router-link to="/Women" class="nav__link">Women</router-link>
        <router-link to="/" class="nav__link">About</router-link>
        <router-link to="/" class="nav__link">Contact</router-link>
      </nav>

      <div class="nav__cart nav__cart--desktop">
        <div class="nav__cartShopping nav__cartShopping--desktop">
          <img
            src="@/assets/images/icon-cart.svg"
            alt="icon-cart"
            class="nav__shoppingIconCart"
            @click="changeMiniCard"
          />
          <span class="nav__cartNumber nav__cartNumber--desktop" @click="changeMiniCard" v-if="shoes.length > 0">{{
            shoes.length
          }}</span>
        </div>

        <div class="avatar__icon">
          <v-icon name="pr-user" fill="#69707D" scale="1.5" class="avatar__Icon" @click="changeModalAuth" />
          <article class="auth" v-if="isModalAuth && isLogin">
            <AccountAuth />
          </article>
        </div>
      </div>

      <div class="nav__miniCard nav__miniCard--desktop" v-if="showMiniCard">
        <MiniCard />
      </div>
    </div>
    <!--end nav__desktop-->

    <!--nav__mobile-->
    <div class="nav__mobile">
      <div class="nav__container">
        <div class="nav__mobileContainer">
          <div :class="showMenu ? 'hambu hambu--active' : 'hambu'" @click="toggleMenu"></div>

          <div class="nav__mobileLinksContainer" v-if="showMenu">
            <div class="nav__mobileLinks">
              <nav class="nav__linksMobile">
                <router-link to="/Collections" class="nav__linkMobile">Collections</router-link>
                <router-link to="/Men" class="nav__linkMobile">Men</router-link>
                <router-link to="/Women" class="nav__linkMobile">Women</router-link>
                <router-link to="/" class="nav__linkMobile">About</router-link>
                <router-link to="/" class="nav__linkMobile">Contact</router-link>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <!--end nav__mobile-->

      <div class="nav__logo nav__logo--mobile">
        <router-link to="/">
          <img src="@/assets/images/logo.svg" alt="logo-svg" />
        </router-link>
      </div>

      <div class="nav__cart">
        <div class="nav__cartShopping">
          <img src="@/assets/images/icon-cart.svg" alt="icon-cart" @click="changeMiniCard" />
          <span class="nav__cartNumber" v-if="shoes.length > 0">{{ shoes.length }}</span>
        </div>

        <div class="nav__avatarImg">
          <!-- <img src="@/assets/images/image-avatar.png" alt="avatar" class="nav__avatar" /> -->
          <v-icon name="pr-user" fill="#69707D" scale="1.5" class="avatar__Icon" @click="changeModalAuth" />
          <article class="auth" v-if="isModalAuth && isLogin">
            <AccountAuth />
          </article>
        </div>
      </div>

      <div class="nav__miniCard" v-if="showMiniCard">
        <MiniCard />
      </div>
    </div>
    <!--end nav__mobile-->
    <Transition name="fade">
      <section class="auth" v-if="isModalAuth && !isLogin">
        <ModalAuth />
      </section>
    </Transition>
  </header>
  <!--end nav-->
</template>

<script lang="ts">
import NavBar from './logic/NavBar';
export default NavBar;
</script>

<style lang="scss">
@import './scss/NavBar.scss';
</style>
