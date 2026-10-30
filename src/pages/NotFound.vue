<script setup>
import { RouterLink } from 'vue-router'
import { CATEGORIES } from '../helpers/cats.js'
</script>

<template>
  <div class="max-w-3xl mx-auto text-center py-12">
    <h1 class="xs:text-2xl text-3xl font-bold mb-8 text-green-dark">Сторінку не знайдено</h1>
    <div class="flex justify-center mb-8">
      <hr class="w-24 border-t border-gray-300" />
    </div>
    <p class="text-gray-600 text-lg mb-8">
      Можливо, адресу введено з помилкою або сторінку було видалено. Спробуйте знайти потрібну
      програму в одній з категорій:
    </p>
    <div class="flex flex-wrap justify-center gap-2 mb-10">
      <RouterLink
        v-for="c in CATEGORIES"
        :key="c.slug"
        :to="'/' + c.slug"
        class="text-sm bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full hover:bg-emerald-100 transition-colors"
      >
        {{ c.navLabel }}
      </RouterLink>
    </div>
    <RouterLink
      to="/"
      class="inline-block bg-linear-to-b from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 text-gray-800 border border-gray-300 px-6 py-3 rounded-lg transition-all font-semibold shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.8)] hover:shadow-[0_2px_4px_-1px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.8)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
    >
      Повернутися на головну
    </RouterLink>
  </div>
</template>
