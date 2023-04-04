<template>
  <footer class="footer">
    <article class="footer__section">
      <h5 class="footer__title">FIND A STORE</h5>
      <h5 class="footer__link">BECOME A MEMBER</h5>
      <h5 class="footer__link">SIGN UP FOR EMAIL</h5>
      <h5 class="footer__link">SNEAKERS CLUB MEMBERS</h5>
    </article>

    <article class="footer__section">
      <h5 class="footer__title">GET HELP</h5>
      <a class="footer__link">Order Status</a>
      <a class="footer__link">Delivery</a>
      <a class="footer__link">Returns</a>
      <a class="footer__link">Payments</a>
    </article>

    <article class="footer__section">
      <h5 class="footer__title">WE ARE SNEAKERS</h5>
      <a class="footer__link">about Sneakers</a>
      <a class="footer__link">contact</a>
      <a class="footer__link">work with us</a>
    </article>

    <article class="footer__section social">
      <v-icon name="la-facebook-f" scale="1.1" />
      <v-icon name="bi-instagram" scale="1.1" />
      <v-icon name="co-tiktok" scale="1.1" />
      <v-icon name="bi-twitter" scale="1.1" />
    </article>

    <article class="footer__footer">
      <div class="footer_gps">
        <p><v-icon name="md-place-sharp" />Costa Rica</p>
        <p>© 2023 Sneakers</p>
      </div>

      <div class="footer__privacy">
        <a>Guides</a>
        <a>Cookies Policy</a>
        <a>Terms of use</a>
        <a>Privacy Policy</a>
      </div>
    </article>
  </footer>
</template>

<style lang="scss">
@import './scss/FooterComponent.scss';
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FooterComponent',
});
</script>
