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
      meta: {
        title: "",
      }
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../pages/BlogPage.vue'),
      meta: {
        title: "Блог про програми, систему тощо - Скачати безкоштовний софт | Floppy",
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../pages/ContactPage.vue'),
      meta: {
        title: "Контакти - Скачати безкоштовний софт | Floppy",
      }
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../pages/FAQPage.vue'),
      meta: {
        title: "Часті питання - Скачати безкоштовний софт | Floppy",
      }
    },

    // Categories

    {
      path: '/internet',
      name: 'internet',
      component: () => import('../categories/Internet.vue'),
      meta: {
        title: "Інтернет, месенджери, RDP - Скачати безкоштовний софт | Floppy",
      }
    },
    {
      path: '/media',
      name: 'media',
      component: () => import('../categories/Media.vue'),
      meta: {
        title: "Програми для аудіо, відео - Скачати безкоштовний софт | Floppy",
      }
    },
    {
      path: '/files',
      name: 'files',
      component: () => import('../categories/Files.vue'),
      meta: {
        title: "Робота з файлами - Скачати безкоштовний софт | Floppy",
      }
    },
    {
      path: '/development',
      name: 'development',
      component: () => import('../categories/Development.vue'),
      meta: {
        title: "Розробка, програмування - Скачати безкоштовний софт | Floppy",
      }
    },
  ],
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Скачати безкоштовний софт | Floppy'; // Set title based on meta or a default
  next();
});

export default router
