<script setup>
defineProps({
  title: { type: String },
  link: { type: String },
})
</script>

<template>
  <RouterLink
    :to="`/${link}`"
    class="inline-flex items-center gap-2 rounded-full px-3.5 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-surface-2 hover:text-fg"
    active-class="bg-accent-soft! text-accent-fg!"
  >
    <svg
      class="h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <slot name="icon"></slot>
    </svg>
    {{ title }}
  </RouterLink>
</template>
