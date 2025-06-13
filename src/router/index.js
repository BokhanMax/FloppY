import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [

    // Pages

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

    // Categories

    {
      path: '/internet',
      name: 'internet',
      component: () => import('../categories/Internet.vue'),
    },
    {
      path: '/media',
      name: 'media',
      component: () => import('../categories/Media.vue'),
    },
    {
      path: '/files',
      name: 'files',
      component: () => import('../categories/Files.vue'),
    },
  ],
})

export default router
