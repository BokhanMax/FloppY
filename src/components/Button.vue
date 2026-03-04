<script setup>
const props = defineProps({
  title: { type: String },
  link: { type: String},
})
</script>

<template>
<a :href="link"
        class="bg-linear-to-b from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 text-gray-800 border border-gray-300 md:px-1 md:py-1 lg:px-2 lg:py-2 rounded-lg transition-all flex-1 text-center xl:text-s lg:text-[10px] 2xl:text-base md:text-[12px] xs:py-1.5 xs:px-1.5 font-semibold shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.8)] hover:shadow-[0_2px_4px_-1px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.8)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
        target="_blank">
        {{ title }}
</a>
</template>