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
      path: '/:pathMatch(.*)*',
      name: '404',
      component: Category,
      props: { cat: 'newest', title: 'Останні оновлення програм' },
      meta: {
        title: '',
      },
    },
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
]

export function setupRouter(router) {
  router.beforeEach((to) => {
    if (typeof document !== 'undefined') {
      document.title = to.meta.title || 'Скачати безкоштовний софт | Floppy'
    }
  })
}
