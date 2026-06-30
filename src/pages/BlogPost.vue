<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useHead } from '@unhead/vue'
import { marked } from 'marked'
import { getPostBySlug } from '@/helpers/blogUtils'

// Налаштування marked: безпечний рендер (без довільного HTML у вмісті)
marked.setOptions({ breaks: true })

const route = useRoute()

const post = computed(() => getPostBySlug(route.params.slug))

const htmlContent = computed(() => {
  if (!post.value?.rawContent) return ''
  return marked.parse(post.value.rawContent)
})

useHead({
  title: computed(() =>
    post.value ? `${post.value.title} | Блог | FloppY` : 'Пост не знайдено | FloppY',
  ),
})
</script>

<template>
  <!-- Пост не знайдено -->
  <div v-if="!post" class="text-center py-16">
    <p class="text-gray-500 text-lg">Запис не знайдено.</p>
    <RouterLink
      to="/blog"
      class="text-[#0071e3] hover:text-[#005bb5] mt-4 inline-block transition-colors"
    >
      ← Повернутись до блогу
    </RouterLink>
  </div>

  <!-- Сторінка поста -->
  <article v-else class="max-w-4xl mx-auto">
    <!-- Навігаційна хлібна крихта 
    <nav class="mb-6 text-sm text-gray-500 flex items-center gap-2">
      <RouterLink to="/blog" class="hover:text-[#0071e3] transition-colors">Блог</RouterLink>
      <span>/</span>
      <span class="text-gray-700 truncate">{{ post.title }}</span>
    </nav> -->

    <!-- Посилання назад -->
    <div class="my-8">
      <RouterLink
        to="/blog"
        class="inline-flex items-center gap-2 text-[#0071e3] hover:text-[#005bb5] transition-colors font-medium"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        До всіх записів
      </RouterLink>
    </div>

    <!-- Заголовок -->
    <h1 class="text-3xl font-bold text-green-dark mb-3 leading-tight">
      {{ post.title }}
    </h1>

    <!-- Дата -->
    <time
      v-if="post.dateFormatted"
      class="text-sm text-gray-500 mb-6 block"
      :datetime="post.date?.toISOString()"
    >
      {{ post.dateFormatted }}
    </time>

    <!-- Головне зображення -->
    <img
      :src="post.image"
      :alt="post.title"
      class="w-full rounded-lg mb-8 object-cover max-h-120"
      loading="eager"
    />

    <!-- Вміст поста -->
    <div
      class="bg-white border border-gray-200 rounded-lg p-6 lg:p-8 blog-content"
      v-html="htmlContent"
    />

    <!-- Посилання назад -->
    <div class="mt-8">
      <RouterLink
        to="/blog"
        class="inline-flex items-center gap-2 text-[#0071e3] hover:text-[#005bb5] transition-colors font-medium"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        До всіх записів
      </RouterLink>
    </div>
  </article>
</template>

<style scoped>
/* Стилі для HTML-вмісту, згенерованого з Markdown */
.blog-content :deep(h1),
.blog-content :deep(h2),
.blog-content :deep(h3),
.blog-content :deep(h4) {
  font-weight: 700;
  color: #047857;
  margin-top: 1.75rem;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.blog-content :deep(h1) {
  font-size: 1.875rem;
}
.blog-content :deep(h2) {
  font-size: 1.5rem;
}
.blog-content :deep(h3) {
  font-size: 1.25rem;
}
.blog-content :deep(h4) {
  font-size: 1.125rem;
}

.blog-content :deep(p) {
  margin-bottom: 1rem;
  line-height: 1.75;
  color: #374151;
  font-size: 1.0625rem;
}

.blog-content :deep(p:last-child) {
  margin-bottom: 0;
}

.blog-content :deep(strong) {
  font-weight: 600;
  color: #111827;
}

.blog-content :deep(em) {
  font-style: italic;
  color: #6b7280;
}

.blog-content :deep(ul),
.blog-content :deep(ol) {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

.blog-content :deep(ul) {
  list-style: disc;
}
.blog-content :deep(ol) {
  list-style: decimal;
}

.blog-content :deep(li) {
  margin-bottom: 0.375rem;
  line-height: 1.7;
  color: #374151;
  font-size: 1.0625rem;
}

.blog-content :deep(a) {
  color: #0071e3;
  text-decoration: none;
  border-bottom: 1px solid #0071e3;
  transition: color 0.2s ease;
}

.blog-content :deep(a:hover) {
  color: #005bb5;
  border-bottom-color: #005bb5;
}

.blog-content :deep(blockquote) {
  border-left: 4px solid #d1fae5;
  padding: 0.5rem 1rem;
  margin: 1.5rem 0;
  background: #f9fafb;
  border-radius: 0 0.5rem 0.5rem 0;
  color: #6b7280;
  font-style: italic;
}

.blog-content :deep(code) {
  background: #f3f4f6;
  border-radius: 0.25rem;
  padding: 0.125rem 0.375rem;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
  color: #047857;
}

.blog-content :deep(pre) {
  background: #1e2939;
  border-radius: 0.5rem;
  padding: 1.25rem;
  margin: 1.5rem 0;
  overflow-x: auto;
}

.blog-content :deep(pre code) {
  background: transparent;
  color: #d1fae5;
  padding: 0;
  font-size: 0.875rem;
}

.blog-content :deep(hr) {
  border: none;
  border-top: 1px solid #e5e7eb;
  margin: 2rem 0;
}

.blog-content :deep(img) {
  max-width: 100%;
  border-radius: 0.5rem;
  margin: 1.5rem auto;
  display: block;
}

.blog-content :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  font-size: 0.9375rem;
  overflow: hidden;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
}

.blog-content :deep(thead) {
  background: #047857;
  color: #fff;
}

.blog-content :deep(thead th) {
  padding: 0.75rem 1rem;
  font-weight: 600;
  text-align: left;
  font-size: 0.875rem;
  letter-spacing: 0.02em;
}

.blog-content :deep(tbody tr) {
  border-top: 1px solid #e5e7eb;
  transition: background 0.15s;
}

.blog-content :deep(tbody tr:nth-child(even)) {
  background: #f9fafb;
}

.blog-content :deep(tbody tr:hover) {
  background: #f0fdf4;
}

.blog-content :deep(tbody td) {
  padding: 0.6875rem 1rem;
  color: #374151;
  vertical-align: middle;
}
</style>
