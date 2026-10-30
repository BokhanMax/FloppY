<script setup>
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import { useSeo, SITE_NAME } from './helpers/seo.js'
import SiteHeader from './components/Parts/HeaderComponent.vue'
import SiteFooter from './components/Parts/FooterComponent.vue'

const route = useRoute()

useHead({
  htmlAttrs: { lang: 'uk-UA' },
  meta: [
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:locale', content: 'uk_UA' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
})

// Базові SEO-теги з route.meta; сторінки з власними даними перекривають їх своїм useSeo()
useSeo({
  title: () => route.meta.title,
  description: () => route.meta.description,
  noindex: () => route.meta.noindex,
})
</script>

<template>
  <div class="min-h-screen bg-[#FCFCFD]">
    <SiteHeader />
    <main class="container mx-auto px-2 py-4 xs:px-1 xs:py-8">
      <router-view :key="$route.fullPath"></router-view>
    </main>
    <SiteFooter />
  </div>
</template>
