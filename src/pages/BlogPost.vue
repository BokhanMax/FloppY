<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { marked } from 'marked'
import { getPostBySlug } from '@/helpers/blogUtils'
import { useSeo, breadcrumbList, absoluteUrl, SITE_NAME, SITE_URL } from '@/helpers/seo.js'

// Налаштування marked: безпечний рендер (без довільного HTML у вмісті)
marked.setOptions({ breaks: true })

const route = useRoute()

const post = computed(() => getPostBySlug(route.params.slug))

const htmlContent = computed(() => {
  if (!post.value?.rawContent) return ''
  return marked.parse(post.value.rawContent)
})

// Соцмережі не показують SVG-обкладинки — для них лишається загальна og-картинка сайту
const ogImage = computed(() =>
  post.value?.image && !post.value.image.endsWith('.svg') ? post.value.image : '',
)

useSeo({
  title: () => (post.value ? `${post.value.title} | Блог | FloppY` : 'Пост не знайдено | FloppY'),
  description: () => post.value?.description,
  image: ogImage,
  type: 'article',
  noindex: () => !post.value,
  jsonLd: () => {
    const p = post.value
    if (!p) return null
    const path = `/blog/${p.slug}`
    const site = { '@type': 'Organization', name: SITE_NAME, url: SITE_URL }
    return [
      {
        '@type': 'BlogPosting',
        headline: p.title,
        description: p.description,
        image: p.image ? absoluteUrl(p.image) : undefined,
        // slug = DDMMYYYY → YYYY-MM-DD (без toISOString, щоб часовий пояс не зсунув дату)
        datePublished: p.date
          ? `${p.slug.slice(4, 8)}-${p.slug.slice(2, 4)}-${p.slug.slice(0, 2)}`
          : undefined,
        inLanguage: 'uk',
        author: site,
        publisher: site,
        mainEntityOfPage: absoluteUrl(path),
      },
      breadcrumbList([
        { name: 'Головна', path: '/' },
        { name: 'Блог', path: '/blog' },
        { name: p.title, path },
      ]),
    ]
  },
})
</script>

<template>
  <!-- Пост не знайдено -->
  <div v-if="!post" class="py-16 text-center">
    <h1 class="mb-6 text-2xl font-bold">Запис не знайдено</h1>
    <RouterLink to="/blog" class="btn btn-secondary">← Повернутись до блогу</RouterLink>
  </div>

  <!-- Сторінка поста -->
  <article v-else class="mx-auto max-w-3xl pt-6 sm:pt-10">
    <RouterLink
      to="/blog"
      class="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-fg hover:underline"
    >
      <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      До всіх записів
    </RouterLink>

    <h1 class="mb-3 text-3xl leading-tight font-bold tracking-tight sm:text-4xl">
      {{ post.title }}
    </h1>

    <time
      v-if="post.dateFormatted"
      class="mb-6 block text-sm text-faint"
      :datetime="post.date?.toISOString()"
    >
      {{ post.dateFormatted }}
    </time>

    <img
      v-if="post.image"
      :src="post.image"
      :alt="post.title"
      class="mb-8 max-h-120 w-full rounded-[18px] bg-surface-2 object-cover"
      loading="eager"
    />

    <div class="card prose-content p-6 lg:p-8" v-html="htmlContent" />

    <RouterLink
      to="/blog"
      class="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-fg hover:underline"
    >
      <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      До всіх записів
    </RouterLink>
  </article>
</template>
