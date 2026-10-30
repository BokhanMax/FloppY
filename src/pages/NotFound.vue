<script setup>
import { RouterLink } from 'vue-router'
import { CATEGORIES } from '../helpers/cats.js'
</script>

<template>
  <div class="mx-auto flex max-w-2xl flex-col items-center gap-6 py-16 text-center">
    <h1 class="text-3xl font-bold tracking-tight sm:text-4xl">Сторінку не знайдено</h1>
    <p class="text-lg text-muted">
      Можливо, адресу введено з помилкою або сторінку було видалено. Спробуйте знайти потрібну
      програму в одній з категорій:
    </p>
    <div class="flex flex-wrap justify-center gap-2">
      <RouterLink
        v-for="c in CATEGORIES"
        :key="c.slug"
        :to="'/' + c.slug"
        class="rounded-full bg-accent-soft px-3.5 py-2 text-sm font-medium text-accent-fg hover:underline"
      >
        {{ c.navLabel }}
      </RouterLink>
    </div>
    <RouterLink to="/" class="btn btn-primary mt-2">Повернутися на головну</RouterLink>
  </div>
</template>
