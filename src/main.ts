import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { OhVueIcon, addIcons } from 'oh-vue-icons';
import {
  PrUser, //user icon
  IoArrowBackCircleSharp,
  IoArrowForwardCircle,
  FaLongArrowAltRight,
  MdKeyboardarrowleftOutlined, // icon back
  MdCloseRound, // icon close
} from 'oh-vue-icons/icons';

addIcons(PrUser, IoArrowBackCircleSharp, IoArrowForwardCircle, FaLongArrowAltRight, MdKeyboardarrowleftOutlined, MdCloseRound);

createApp(App).component('v-icon', OhVueIcon).use(store).use(router).mount('#app');
