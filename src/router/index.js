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
      },{
        path: 'products',
        name: 'Products',
        component: () => import(/* webpackChunkName: "products" */ '@/views/Products.vue'),
      },{
        path: 'rentals',
        name: 'Rentals',
        component: () => import(/* webpackChunkName: "products" */ '@/views/Products.vue'),
      },{
        path: 'about',
        name: 'About',
        component: () => import(/* webpackChunkName: "products" */ '@/views/Products.vue'),
      },{
        path: 'contact',
        name: 'Contact',
        component: () => import(/* webpackChunkName: "products" */ '@/views/Products.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
