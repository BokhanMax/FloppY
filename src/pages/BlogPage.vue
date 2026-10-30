<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { getAllPosts } from '@/helpers/blogUtils'

const allPosts = getAllPosts()
const recentPosts = computed(() => allPosts.slice(0, 3))
</script>

<template>
  <div class="pt-6 sm:pt-10">
    <h1 class="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">Блог</h1>
    <div class="flex flex-col gap-8 lg:flex-row">
      <!-- Основний список постів -->
      <div class="flex min-w-0 flex-1 flex-col gap-5">
        <p v-if="allPosts.length === 0" class="card p-8 text-center text-muted">
          Поки що немає записів.
        </p>

        <article v-for="post in allPosts" :key="post.slug" class="card overflow-hidden">
          <!-- Зображення поста -->
          <RouterLink
            v-if="post.image"
            :to="`/blog/${post.slug}`"
            class="block overflow-hidden bg-surface-2"
            tabindex="-1"
            aria-hidden="true"
          >
            <img
              :src="post.image"
              :alt="post.title"
              class="h-56 w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              loading="lazy"
            />
          </RouterLink>

          <div class="flex flex-col gap-3 p-6">
            <time
              v-if="post.dateFormatted"
              class="text-sm text-faint"
              :datetime="post.date?.toISOString()"
            >
              {{ post.dateFormatted }}
            </time>
            <h2 class="text-xl leading-snug font-semibold">
              <RouterLink :to="`/blog/${post.slug}`" class="hover:text-accent-fg">
                {{ post.title }}
              </RouterLink>
            </h2>
            <p v-if="post.description" class="leading-relaxed text-muted">
              {{ post.description }}
            </p>
            <RouterLink
              :to="`/blog/${post.slug}`"
              class="inline-flex items-center gap-1 self-start text-sm font-semibold text-accent-fg hover:underline"
            >
              Читати далі
              <svg
                class="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </RouterLink>
          </div>
        </article>
      </div>

      <!-- Сайдбар: останні 3 пости -->
      <aside class="shrink-0 lg:w-72">
        <div class="card p-5 lg:sticky lg:top-24">
          <h2 class="mb-4 border-b border-line pb-3 text-lg font-semibold">Останні записи</h2>
          <ul class="flex flex-col gap-4">
            <li v-for="post in recentPosts" :key="post.slug">
              <RouterLink :to="`/blog/${post.slug}`" class="group flex items-start gap-3">
                <img
                  v-if="post.image"
                  :src="post.image"
                  alt=""
                  class="h-16 w-16 shrink-0 rounded-xl bg-surface-2 object-cover"
                  loading="lazy"
                />
                <span class="flex min-w-0 flex-1 flex-col gap-1">
                  <span
                    class="line-clamp-2 text-sm leading-snug font-medium group-hover:text-accent-fg"
                  >
                    {{ post.title }}
                  </span>
                  <time
                    v-if="post.dateFormatted"
                    class="text-xs text-faint"
                    :datetime="post.date?.toISOString()"
                  >
                    {{ post.dateFormatted }}
                  </time>
                </span>
              </RouterLink>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</template>
