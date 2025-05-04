<script setup>
const props = defineProps({
  icon: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  link64: {
    type: String,
  },
  linkcommon: {
    type: String,
  },
  link32: {
    type: String,
  },
  description: {
    type: String,
  },
})
</script>

<template>
  <div class="app-card flex items-center">
    <div class="app-left w-1/12">
      <div class="app-icon flex">
        <img :src="icon" width="48" height="48" :alt="name" />
      </div>
    </div>
    <div class="app-right">
      <h2 class="app-title">{{ name }}</h2>
      <p class="app-description">{{ description }}</p>
      <span class="app-description font-bold">Завантажити: </span>
      <a v-if="link64" :href="props.link64" class="text-blue-500 hover:underline text-sm mr-2"
        >x64</a
      >
      <a v-if="link32" :href="props.link32" class="text-blue-500 hover:underline text-sm">x32</a>
      <a v-if="linkcommon" :href="props.linkcommon" class="text-blue-500 hover:underline text-sm"
        >x32-x64</a
      >
    </div>
  </div>
</template>
