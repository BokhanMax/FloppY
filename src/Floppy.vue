<script setup>
import SiteHeader from './components/Parts/HeaderComponent.vue'
import SiteFooter from './components/Parts/FooterComponent.vue'
</script>

<template>
  <div class="min-h-screen bg-[#FCFCFD]">
    <SiteHeader />
    <main class="container mx-auto px-4 py-8 xs:px-1 xs:py-8">
      <router-view :key="$route.fullPath"></router-view>
    </main>
    <SiteFooter />
  </div>
</template>
