import { createRouter, createWebHistory } from 'vue-router'
//import Homepage from '../pages/HomePage.vue'
import Category from '../components/Category.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Pages

/*     {
      path: '/',
      name: 'home',
      component: Homepage,
      meta: {
        title: '',
      },
    }, */
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../pages/BlogPage.vue'),
      meta: {
        title: 'Блог про програми, систему тощо - Скачати безкоштовний софт | Floppy',
      },
    },
    {
      path: '/manage',
      name: 'manage',
      component: () => import('../pages/Manage.vue'),
      meta: {
        title: 'Таблиця програм | Floppy',
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../pages/ContactPage.vue'),
      meta: {
        title: 'Контакти - Скачати безкоштовний софт | Floppy',
      },
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../pages/FAQPage.vue'),
      meta: {
        title: 'Часті питання - Скачати безкоштовний софт | Floppy',
      },
    },

    // Categories
    {
      path: '/',
      name: 'newest',
      component: Category,
      props: { cat: 'newest', title: 'Останні оновлення програм' },
      meta: {
        title: '',
      },
    },
    {
      path: '/internet',
      name: 'internet',
      component: Category,
      props: { cat: 'internet', title: 'Програми для Інтернету' },
      meta: {
        title: 'Інтернет, месенджери, RDP - Скачати безкоштовний софт | Floppy',
      },
    },
    {
      path: '/system',
      name: 'system',
      component: Category,
      props: { cat: 'system', title: 'Системні утиліти' },
      meta: {
        title: 'Інтернет, месенджери, RDP - Скачати безкоштовний софт | Floppy',
      },
    },
    {
      path: '/media',
      name: 'media',
      component: Category,
      props: { cat: 'media', title: 'Програми для медіа' },
      meta: {
        title: 'Програми для аудіо, відео - Скачати безкоштовний софт | Floppy',
      },
    },
    {
      path: '/files',
      name: 'files',
      component: Category,
      props: { cat: 'files', title: 'Робота з файлами' },
      meta: {
        title: 'Робота з файлами - Скачати безкоштовний софт | Floppy',
      },
    },
    {
      path: '/development',
      name: 'development',
      component: Category,
      props: { cat: 'dev', title: 'Розробка, програмування' },
      meta: {
        title: 'Розробка, програмування - Скачати безкоштовний софт | Floppy',
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Скачати безкоштовний софт | Floppy' // Set title based on meta or a default
  next()
})

export default router
