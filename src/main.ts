import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { OhVueIcon, addIcons } from 'oh-vue-icons';
import {
  PrUser, //user icon
  MdKeyboardarrowleftOutlined, // icon back
  MdCloseRound, // icon close
  HiHeart, // icon hear just border
  HiSolidHeart, // icon heart fill
  MdKeyboardarrowup, // icon arrow top
  MdKeyboardarrowdown, // icon arrow bottom
  HiMinusSm, //icon minus
  HiSolidPlus, // icon plus
} from 'oh-vue-icons/icons';

addIcons(
  PrUser,
  MdKeyboardarrowleftOutlined,
  MdCloseRound,
  HiHeart,
  HiSolidHeart,
  MdKeyboardarrowup,
  MdKeyboardarrowdown,
  HiMinusSm,
  HiSolidPlus
);

createApp(App).component('v-icon', OhVueIcon).use(store).use(router).mount('#app');
