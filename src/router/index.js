import Category from '../components/Parts/Category.vue'
import { CATEGORIES } from '../helpers/cats.js'

// meta.title, meta.description, meta.noindex — базові SEO-теги сторінки (див. Floppy.vue та helpers/seo.js)
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
    path: '/contact',
    name: 'contact',
    component: () => import('../pages/ContactPage.vue'),
    meta: {
      title: 'Контакти - Скачати безкоштовний софт | Floppy',
      description:
        'Контакти сайту FloppY: питання щодо розміщення програм у каталозі та роботи сайту. Оберіть зручний спосіб звʼязку та напишіть нам.',
    },
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('../pages/FAQPage.vue'),
    meta: {
      title: 'Часті питання - Скачати безкоштовний софт | Floppy',
      description:
        'Часті питання про програми з каталогу FloppY: яку версію обрати — x32 чи x64, що робити, якщо програма зависла або не запускається на Windows 7.',
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
      description:
        'Блог FloppY: практичні поради з вибору та використання безкоштовних програм для Windows, огляди та покрокові інструкції.',
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
    meta: { title: c.metaTitle, description: c.metaDescription },
  })),

  // 404: /404 генерується в dist/404.html — Netlify віддає його з кодом 404 для неіснуючих адрес.
  // Catch-all — завжди останній, для навігації всередині застосунку
  {
    path: '/404',
    name: '404',
    component: () => import('../pages/NotFound.vue'),
    meta: { title: 'Сторінку не знайдено | Floppy', noindex: true },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../pages/NotFound.vue'),
    meta: { title: 'Сторінку не знайдено | Floppy', noindex: true },
  },
]
