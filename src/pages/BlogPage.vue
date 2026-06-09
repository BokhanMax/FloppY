<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { getAllPosts } from '@/helpers/blogUtils'

const allPosts = getAllPosts()
const recentPosts = computed(() => allPosts.slice(0, 3))
</script>

<template>
  <div class="max-w-6xl mx-auto">
    <h1 class="text-3xl font-bold mb-8 text-green-dark text-center">Блог</h1>
    <div class="flex justify-center mb-8">
      <hr class="w-24 border-t border-gray-300" />
    </div>
    <div class="flex flex-col lg:flex-row gap-8">
      <!-- Основний список постів -->
      <div class="flex-1 min-w-0 space-y-6">
        <div v-if="allPosts.length === 0" class="text-gray-500 text-center py-12">
          Поки що немає записів.
        </div>

        <article
          v-for="post in allPosts"
          :key="post.slug"
          class="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors"
        >
          <!-- Зображення поста -->
          <RouterLink :to="`/blog/${post.slug}`" v-if="post.image" class="block overflow-hidden">
            <img
              :src="post.image"
              :alt="post.title"
              class="w-full h-56 object-cover hover:scale-[1.02] transition-transform duration-500"
              loading="lazy"
            />
          </RouterLink>

          <div class="p-6">
            <!-- Дата -->
            <time
              v-if="post.dateFormatted"
              class="text-sm text-gray-500 mb-2 block"
              :datetime="post.date?.toISOString()"
            >
              {{ post.dateFormatted }}
            </time>

            <!-- Заголовок -->
            <h2 class="text-xl font-semibold mb-3">
              <RouterLink
                :to="`/blog/${post.slug}`"
                class="text-green-dark hover:text-[#0071e3] transition-colors"
              >
                {{ post.title }}
              </RouterLink>
            </h2>

            <!-- Опис -->
            <p v-if="post.description" class="text-gray-600 leading-relaxed mb-4">
              {{ post.description }}
            </p>

            <!-- Посилання -->
            <RouterLink
              :to="`/blog/${post.slug}`"
              class="inline-flex items-center gap-1 text-[#0071e3] hover:text-[#005bb5] font-medium transition-colors text-sm"
            >
              Читати далі
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <aside class="lg:w-72 shrink-0">
        <div class="bg-white border border-gray-200 rounded-lg p-5 sticky top-24">
          <h2 class="text-lg font-semibold text-green-dark mb-4 pb-3 border-b border-gray-100">
            Останні записи
          </h2>

          <div class="space-y-4">
            <div v-for="post in recentPosts" :key="post.slug" class="group">
              <RouterLink
                :to="`/blog/${post.slug}`"
                class="flex gap-3 items-start hover:text-[#0071e3] transition-colors"
              >
                <img
                  v-if="post.image"
                  :src="post.image"
                  :alt="post.title"
                  class="w-16 h-16 object-cover rounded-md shrink-0 group-hover:scale-[1.03] transition-transform duration-300"
                  loading="lazy"
                />
                <div class="flex-1 min-w-0">
                  <p
                    class="text-sm font-medium text-gray-900 group-hover:text-[#0071e3] transition-colors line-clamp-2 leading-snug"
                  >
                    {{ post.title }}
                  </p>
                  <time
                    v-if="post.dateFormatted"
                    class="text-xs text-gray-400 mt-1 block"
                    :datetime="post.date?.toISOString()"
                  >
                    {{ post.dateFormatted }}
                  </time>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>
