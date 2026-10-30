<script setup>
defineProps({
  content: {
    type: String,
  },
})
</script>

<template>
  <div class="card prose-content mt-12 p-6 sm:p-8" v-html="content"></div>
</template>
