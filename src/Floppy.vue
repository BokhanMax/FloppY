<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import SiteHeader from './components/Parts/HeaderComponent.vue'
import SiteFooter from './components/Parts/FooterComponent.vue'

const route = useRoute()
useHead({
  title: computed(() => route.meta.title || 'Скачати безкоштовний софт | Floppy'),
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
