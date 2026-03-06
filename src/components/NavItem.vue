<script setup>
const props = defineProps({
  title: { type: String },
  link: { type: String },
})
</script>

<template>
  <RouterLink
    :to="`/${link}`"
    class="nav-link inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-blue-50 transition-all duration-200 border border-transparent hover:border-blue-100"
    active-class="bg-[#0071e3] text-white border-[#0071e3] hover:bg-[#0077ed] hover:border-[#0077ed]"
  >
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <slot name="icon"></slot>
    </svg>
    {{ title }}
  </RouterLink>
</template>
