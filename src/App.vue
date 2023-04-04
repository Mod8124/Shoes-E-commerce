<template>
  <NavBar />
  <DiscountComponent />
  <router-view />
  <FooterComponent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar/NavBar.vue';
import DiscountComponent from './components/Discount/DiscountComponent.vue';
import FooterComponent from './components/Footer/FooterComponent.vue';

export default defineComponent({
  name: 'App',
  props: {
    msg: String,
  },
  components: {
    NavBar,
    DiscountComponent,
    FooterComponent,
  },
});
</script>

<style lang="scss">
@import '@/scss/global.scss';
</style>
