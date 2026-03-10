<script setup>
const props = defineProps({
  content: {
    type: String,
  },
})
</script>

<template>
  <div
    class="bg-white border border-gray-200 rounded-lg p-6 lg:p-4 xs:p-4 hover:border-gray-300 transition-colors mb-8 mt-8"
  >
    <div class="prose max-w-none" v-html="content"></div>
  </div>
</template>

<style scoped>
:deep(p) {
  margin-bottom: 1rem;
  line-height: 1.6;
  color: #374151;
  font-size: 1.125rem;
}

:deep(p:last-child) {
  margin-bottom: 0;
}

:deep(strong) {
  font-weight: 600;
  color: #111827;
}

:deep(em) {
  font-style: italic;
  color: #6b7280;
}

:deep(ul) {
  list-style: disc;
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

:deep(ul li) {
  margin-bottom: 0.25rem;
  line-height: 1.6;
  color: #374151;
  font-size: 1.125rem;
}

:deep(a) {
  color: #0071e3;
  text-decoration: none;
  border-bottom: 1px solid #0071e3;
  transition: color 0.2s ease;
}

:deep(a:hover) {
  color: #005bb5;
  border-bottom-color: #005bb5;
}

:deep(h1),
:deep(h2),
:deep(h3),
:deep(h4),
:deep(h5),
:deep(h6) {
  color: #111827;
  font-weight: 600;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

:deep(h1) {
  font-size: 1.875rem;
}

:deep(h2) {
  font-size: 1.5rem;
}

:deep(h3) {
  font-size: 1.25rem;
}

@media (max-width: 640px) {
  :deep(p) {
    font-size: 0.875rem;
  }

  :deep(ul li) {
    font-size: 0.875rem;
  }

  :deep(h1) {
    font-size: 1.5rem;
  }

  :deep(h2) {
    font-size: 1.25rem;
  }

  :deep(h3) {
    font-size: 1.125rem;
  }
}
</style>
