import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import CollectionsView from '@/views/Collections/CollectionsView.vue';
import HomeView from '@/views/Home/HomeView.vue';
import ErrorView from '@/views/Error/ErrorView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Sneaker - Home' },
  },
  {
    path: '/collections',
    name: 'Collections',
    component: CollectionsView,
    meta: { title: 'Sneaker - Collections' },
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: () => import(/* webpackChunkName: "details" */ '@/views/Details/DetailsView.vue'),
    props: true,
    meta: { title: 'Sneakers - Detail' },
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () => import(/* webpackChunkName: "details" */ '@/views/Product/ProductView.vue'),
    props: true,
    meta: { title: 'Sneakers - Product' },
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: ErrorView,
    meta: { title: 'Sneakers - Error' },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
