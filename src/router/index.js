import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../pages/BlogPage.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../pages/ContactPage.vue'),
    },
        {
      path: '/faq',
      name: 'faq',
      component: () => import('../pages/FAQPage.vue'),
    },
  ],
})

export default router
