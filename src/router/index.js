// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      }, {
        path: 'products',
        name: 'Products',
        component: () => import(/* webpackChunkName: "products" */ '@/views/Products.vue'),
      }, {
        path: 'rentals',
        name: 'Rentals',
        component: () => import(/* webpackChunkName: "rentals" */ '@/views/Rentals.vue'),
      }, {
        path: 'info',
        name: 'Info',
        component: () => import(/* webpackChunkName: "info" */ '@/components/Info.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
