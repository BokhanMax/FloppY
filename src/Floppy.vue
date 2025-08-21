<script setup>
//import { RouterLink, RouterView } from 'vue-router'
import SiteHeader from './components/HeaderComponent.vue'
import SiteFooter from './components/FooterComponent.vue'
</script>

<template>
  <SiteHeader />
  <main class="container mx-auto px-4 py-8 xs:px-1.5 xs:py-8">
    <router-view :key="$route.fullPath"></router-view>
  </main>
  <SiteFooter />
</template>
