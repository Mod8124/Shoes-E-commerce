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
  BiInstagram, // instagram
  BiTwitter, // twitter
  CoTiktok, // tik tok
  LaFacebookF, // facebook
  MdPlaceSharp, // icon place or gps
  FaSpinner, // icon  spin
  CoAccountLogout, //icon logout
  LaTrashAltSolid, // icon trash
  BiEye, // icon open eye
  BiEyeSlash, // icon close eye
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
  HiSolidPlus,

  BiInstagram,
  BiTwitter,
  CoTiktok,
  LaFacebookF,

  MdPlaceSharp,
  FaSpinner,
  CoAccountLogout,
  LaTrashAltSolid,
  BiEye,
  BiEyeSlash
);

createApp(App).component('v-icon', OhVueIcon).use(store).use(router).mount('#app');
