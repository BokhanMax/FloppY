<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { getAllPosts } from '@/helpers/blogUtils'

const posts = computed(() => getAllPosts().slice(0, 3))
</script>

<template>
  <section v-if="posts.length" aria-labelledby="blog-preview-h" class="mt-16">
    <div class="mb-5 flex flex-wrap items-baseline justify-between gap-2">
      <h2 id="blog-preview-h" class="text-2xl font-bold tracking-tight sm:text-[28px]">
        Останнє з блогу
      </h2>
      <RouterLink to="/blog" class="text-[15px] font-semibold text-accent-fg hover:underline">
        Усі статті →
      </RouterLink>
    </div>

    <div class="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
      <RouterLink
        v-for="post in posts"
        :key="post.slug"
        :to="`/blog/${post.slug}`"
        class="card group flex flex-col overflow-hidden transition-colors hover:border-faint"
      >
        <span class="block overflow-hidden bg-surface-2">
          <img
            v-if="post.image"
            :src="post.image"
            :alt="post.title"
            class="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </span>
        <span class="flex flex-col gap-2 p-[18px]">
          <time
            v-if="post.dateFormatted"
            class="text-[13px] text-faint"
            :datetime="post.date?.toISOString()"
          >
            {{ post.dateFormatted }}
          </time>
          <span class="text-[17px] leading-snug font-semibold group-hover:text-accent-fg">
            {{ post.title }}
          </span>
        </span>
      </RouterLink>
    </div>
  </section>
</template>
