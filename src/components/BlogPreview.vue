<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { getAllPosts } from '@/helpers/blogUtils'

const posts = computed(() => getAllPosts().slice(0, 3))
</script>

<template>
  <section v-if="posts.length" class="mt-10 mb-4">
    <h2 class="text-2xl font-bold text-green-dark mb-6">Останнє з блогу</h2>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <RouterLink
        v-for="post in posts"
        :key="post.slug"
        :to="`/blog/${post.slug}`"
        class="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors"
      >
        <!-- Картинка -->
        <div class="overflow-hidden">
          <img
            v-if="post.image"
            :src="post.image"
            :alt="post.title"
            class="w-full h-40 object-cover group-hover:scale-[1.03] transition-transform duration-500"
            loading="lazy"
          />
          <div v-else class="w-full h-40 bg-gray-100 flex items-center justify-center">
            <svg class="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
        </div>

        <!-- Текст -->
        <div class="p-4">
          <time
            v-if="post.dateFormatted"
            class="text-xs text-gray-400 mb-1 block"
            :datetime="post.date?.toISOString()"
          >
            {{ post.dateFormatted }}
          </time>
          <p class="text-sm font-semibold text-green-dark group-hover:text-[#0071e3] transition-colors leading-snug line-clamp-2">
            {{ post.title }}
          </p>
        </div>
      </RouterLink>
    </div>

    <div class="mt-4 text-right">
      <RouterLink to="/blog" class="text-sm text-[#0071e3] hover:text-[#005bb5] transition-colors font-medium">
        Всі записи →
      </RouterLink>
    </div>
  </section>
</template>
