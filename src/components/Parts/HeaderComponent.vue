<script setup>
import NavItem from '../NavItem.vue'
import Logo from '../Logo.vue'
import { CATEGORIES } from '../../helpers/cats.js'
</script>

<template>
  <!-- Header -->
  <header
    class="bg-white/60 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-10 shadow-sm"
  >
    <div class="container mx-auto px-4 py-3">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <Logo :logotext="'Скачати безкоштовний софт'" />

        <!-- Menu -->
        <nav class="flex flex-wrap justify-center md:justify-end gap-1 lg:gap-2">
          <NavItem v-for="cat in CATEGORIES" :key="cat.slug" :title="cat.navLabel" :link="cat.slug">
            <template #icon>
              <path
                v-for="(d, i) in cat.iconPaths"
                :key="i"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                :d="d"
              />
            </template>
          </NavItem>
        </nav>
      </div>
    </div>
    <component :is="'script'">
      // Add smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => { anchor.addEventListener('click',
      function (e) { e.preventDefault(); const target =
      document.querySelector(this.getAttribute('href')); if (target) { target.scrollIntoView({
      behavior: 'smooth' }); } }); });
    </component>
  </header>
</template>

<style scoped>
/* Фикс для hover на активном пункте меню */
.nav-link:not(.router-link-active):hover {
  color: white;
  background-color: #0077ed;
}

.nav-link.router-link-active:hover {
  color: white;
  background-color: #0077ed;
  border-color: #0077ed;
}
</style>
