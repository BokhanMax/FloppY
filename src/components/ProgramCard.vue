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
  version: {
    type: String,
  },
  website: {
    type: String,
  }
})
</script>

<template>

    <div class="bg-green-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <div class="flex items-center place-content-between mb-4">
            <div class="flex">
              <div class="text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <img :src="icon" width="48" height="48" :alt="name" />
              </div>
              <div class="flex">
                  <div class="flex flex-col">
                    <h3 class="text-xl font-semibold text-green-dark">{{ name }}</h3>
                    <p class="text-green-600">{{ version }}</p>
                  </div>
              </div>
            </div>
            <div class="flex self-start">
              <a v-if="website" :href="props.website" class="text-gray-600 text-xs">
                Веб-сайт
              </a>
            </div>
        </div>
        <p class="text-gray-600 mb-4">{{ description }}</p>
        <div class="flex flex-col sm:flex-row gap-2">
            <a v-if="link64" :href="props.link64" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors flex-1 text-center">
                Завантажити x64
            </a>
            <a v-if="link32" :href="props.link32" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors flex-1 text-center">
                Завантажити x32
            </a>
            <a v-if="linkcommon" :href="props.linkcommon" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors flex-1 text-center">
                Завантажити x86-x64
            </a>
        </div>
    </div>

</template>
