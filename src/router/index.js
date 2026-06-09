import Category from '../components/Parts/Category.vue'
import { CATEGORIES } from '../helpers/cats.js'

export const routes = [
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
    path: '/manage',
    name: 'manage',
    component: () => import('../pages/Manage.vue'),
    meta: {
      title: 'Управління програмами | Floppy',
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
  {
    path: '/program/:id',
    name: 'program',
    component: () => import('../pages/ProgramPage.vue'),
    meta: {
      title: 'Скачати безкоштовний софт | Floppy',
    },
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../pages/BlogPage.vue'),
    meta: {
      title: 'Блог - Скачати безкоштовний софт | Floppy',
    },
  },
  {
    path: '/blog/:slug',
    name: 'blog-post',
    component: () => import('../pages/BlogPost.vue'),
    meta: {
      title: 'Блог | Floppy',
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
  ...CATEGORIES.map((c) => ({
    path: `/${c.slug}`,
    name: c.slug,
    component: Category,
    props: { cat: c.cat, title: c.title },
    meta: { title: c.metaTitle },
  })),

  // 404 — завжди останній, щоб не перехоплювати інші маршрути
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: Category,
    props: { cat: 'newest', title: 'Останні оновлення програм' },
    meta: {
      title: '',
    },
  },
]

export function setupRouter(router) {
  router.beforeEach((to) => {
    if (typeof document !== 'undefined') {
      document.title = to.meta.title || 'Скачати безкоштовний софт | Floppy'
    }
  })
}
