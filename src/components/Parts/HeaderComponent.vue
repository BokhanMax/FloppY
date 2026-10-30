<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import NavItem from '../NavItem.vue'
import Logo from '../Logo.vue'
import ThemeToggle from '../ThemeToggle.vue'
import { CATEGORIES } from '../../helpers/cats.js'

// Мобільне меню (до lg): закривається після переходу на іншу сторінку
const menuOpen = ref(false)
const route = useRoute()
watch(
  () => route.fullPath,
  () => (menuOpen.value = false),
)
</script>

<template>
  <header class="sticky top-0 z-20 border-b border-line bg-header">
    <div class="mx-auto flex max-w-[1200px] items-center gap-3 px-4 py-3 sm:px-6">
      <div class="mr-auto">
        <Logo />
      </div>

      <nav aria-label="Категорії" class="hidden flex-wrap gap-1 lg:flex">
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

      <ThemeToggle />

      <button
        type="button"
        class="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-line bg-surface text-fg transition-colors hover:bg-surface-2 lg:hidden"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        :aria-label="menuOpen ? 'Закрити меню' : 'Відкрити меню'"
        @click="menuOpen = !menuOpen"
      >
        <svg
          class="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          aria-hidden="true"
        >
          <path v-if="menuOpen" d="M6 6l12 12M18 6L6 18" />
          <path v-else d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>
    </div>

    <nav
      v-show="menuOpen"
      id="mobile-menu"
      aria-label="Категорії"
      class="border-t border-line px-4 py-3 sm:px-6 lg:hidden"
    >
      <div class="mx-auto grid max-w-[1200px] grid-cols-2 gap-1 sm:grid-cols-3">
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
      </div>
    </nav>
  </header>
</template>
