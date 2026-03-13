<script setup>
defineProps({
  website: { type: String, required: true },
})
</script>

<template>
  <a
    :href="website"
    class="inline-flex items-center gap-1 bg-gray-100 text-gray-700 md:text-s lg:text-[12px] xl:text-s xs:text-[9px] px-2 py-1 rounded-full font-medium hover:bg-gray-200 transition-colors"
    target="_blank"
  >
    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      />
    </svg>
    Сайт
  </a>
</template>
