<template>
  <button
    type="button"
    class="min-w-0 cursor-pointer truncate rounded-md bg-accent-soft px-1.5 py-0.5 font-mono text-[11.5px] text-accent-fg"
    :title="copied ? 'Скопійовано!' : 'Скопіювати назву з версією'"
    @click="copyToClipboard"
  >
    {{ version }}
  </button>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  version: { type: String, required: true },
  name: { type: String, default: '' },
})

const copied = ref(false)

function copyToClipboard() {
  const text = `${props.name.replaceAll(' ', '.')}-${props.version}`
  navigator.clipboard.writeText(text)
  copied.value = true
  setTimeout(() => (copied.value = false), 2000)
}
</script>
