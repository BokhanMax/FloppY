/**
 * SEO-теги сторінки: title, description, canonical, Open Graph, Twitter, robots, JSON-LD.
 *
 * Floppy.vue викликає useSeo() з даними з route.meta — це базові теги для всіх сторінок.
 * Сторінки з власними даними (програма, стаття) викликають useSeo() ще раз:
 * однойменні теги перекриваються (останній запис перемагає), JSON-LD додається.
 */
import { computed, toValue } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'

export const SITE_URL = 'https://floppy.pp.ua'
export const SITE_NAME = 'FloppY'
export const DEFAULT_TITLE = 'Скачати безкоштовний софт | Floppy'
export const DEFAULT_DESCRIPTION =
  '💿 Каталог найкращого софту для щоденного користування. Завантажуйте безкоштовні програми для Windows'
export const DEFAULT_IMAGE = '/img/ogimg.png'

export const absoluteUrl = (path) => (/^https?:\/\//.test(path) ? path : SITE_URL + path)

/**
 * @param {object} seo — кожне значення може бути рядком, ref або getter:
 *   title, description, image, type ('website' | 'article'), noindex (boolean),
 *   jsonLd (об'єкт schema.org або масив об'єктів)
 */
export function useSeo(seo) {
  const route = useRoute()

  const title = computed(() => toValue(seo.title) || DEFAULT_TITLE)
  const description = computed(() => toValue(seo.description) || DEFAULT_DESCRIPTION)
  const image = computed(() => absoluteUrl(toValue(seo.image) || DEFAULT_IMAGE))
  const url = computed(() => absoluteUrl(route.path === '/' ? '/' : route.path.replace(/\/+$/, '')))
  const noindex = computed(() => !!toValue(seo.noindex))

  const head = {
    title,
    meta: [
      { name: 'description', content: description },
      {
        name: 'robots',
        content: computed(() => (noindex.value ? 'noindex, follow' : 'index, follow')),
      },
      { property: 'og:type', content: computed(() => toValue(seo.type) || 'website') },
      { property: 'og:url', content: url },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ],
    // Сторінка з noindex не повинна мати canonical
    link: computed(() => (noindex.value ? [] : [{ rel: 'canonical', href: url.value }])),
  }

  if (seo.jsonLd) {
    head.script = computed(() => {
      const data = toValue(seo.jsonLd)
      if (!data) return []
      return [
        {
          type: 'application/ld+json',
          // Екрануємо "<", щоб текст з даних не міг закрити тег <script>
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [data].flat(),
          }).replace(/</g, '\\u003c'),
        },
      ]
    })
  }

  useHead(head)
}

/**
 * Хлібні крихти для JSON-LD: [{ name, path }, ...]
 */
export function breadcrumbList(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}
