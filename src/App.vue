<template>
  <NavBar />
  <DiscountComponent />
  <router-view />
  <FooterComponent />
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue';
import NavBar from './components/NavBar/NavBar.vue';
import DiscountComponent from './components/Discount/DiscountComponent.vue';
import FooterComponent from './components/Footer/FooterComponent.vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'App',
  props: {
    msg: String,
  },
  setup() {
    const store = useStore();
    onBeforeMount(() => {
      store.dispatch('userModule/checkAuth');
      store.dispatch('cartModule/getCart');
    });
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
