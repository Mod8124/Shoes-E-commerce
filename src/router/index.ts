import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/Home/HomeView.vue';

function generateMeta(title: string) {
  return {
    title: `Sneakers - ${title}`,
  };
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: generateMeta('Home'),
  },
  {
    path: '/collections',
    name: 'Collections',
    component: () => import(/* webpackChunkName: "collections" */ '@/views/Collections/CollectionsView.vue'),
    meta: generateMeta('Collections'),
  },
  {
    path: '/men',
    name: 'Men',
    component: () => import(/* webpackChunkName: "men" */ '@/views/Men/MenView.vue'),
    meta: generateMeta('Men'),
  },
  {
    path: '/women',
    name: 'Women',
    component: () => import(/* webpackChunkName: "men" */ '@/views/Women/WomenView.vue'),
    meta: generateMeta('Women'),
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: () => import(/* webpackChunkName: "details" */ '@/views/Details/DetailsView.vue'),
    props: true,
    meta: generateMeta('Details'),
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () => import(/* webpackChunkName: "details" */ '@/views/Product/ProductView.vue'),
    props: true,
    meta: generateMeta('Product'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "error" */ '@/views/Error/ErrorView.vue'),
    meta: generateMeta('Error'),
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
