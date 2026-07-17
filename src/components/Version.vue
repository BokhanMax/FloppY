<template>
    <span class="text-[#0071e3]" :title="copied ? 'Скопійовано!' : 'Копіювати'" @click="copyToClipboard">{{ version }}</span>
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