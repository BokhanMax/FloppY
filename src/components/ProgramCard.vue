<script setup>
const props = defineProps({
  id: {type: String},
  name: {type: String, required: true},
  description: {type: String},
  createdAt: {type: String},
  version: {type: String},
  website: {type: String},
  icon: {type: String},
  link32: {type: String},
  link64: {type: String},
  linkcommon: {type: String},
  linkupdate: {type: String},
  textupdate: {type: String}
})

const date = props.createdAt.toDate().toLocaleDateString();

</script>

<template>
  <div class="bg-green-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow" :id="props.id">
    <div class="flex items-center place-content-between mb-4">
      <div class="flex">
        <div class="text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4">
          <img :src="'icons/' + props.name.replace(/\s+/g, '') + 'Icon.png'" width="48" height="48" :alt="name" :title="'Скачати ' + props.name + ' безкоштовно по прямому посиланню'" />
        </div>
        <div class="flex">
          <div class="flex flex-col">
            <h3 class="text-xl font-semibold text-green-dark">{{ name }}</h3>
            <p class="text-green-600">{{ version }}</p>
          </div>
        </div>
      </div>
      <div class="flex self-start flex-col items-end">
        <span class="text-green-400 text-[9px] mb-1">
          Оновлено: {{ date }}
        </span>
        <a v-if="website" :href="props.website" class="text-gray-600 text-xs" target="_blank">
          🌐 Веб-сайт
        </a>
      </div>
    </div>
    <p class="text-gray-600 mb-4">{{ description }}</p>
    <div class="flex flex-col sm:flex-row gap-2">
      <a
        v-if="link64"
        :href="props.link64"
        class="bg-green-500 hover:bg-green-600 text-white px-2 py-2 rounded transition-colors flex-1 text-center"
      >
        Завантажити x64
      </a>
      <a
        v-if="link32"
        :href="props.link32"
        class="bg-green-500 hover:bg-green-600 text-white px-2 py-2 rounded transition-colors flex-1 text-center"
      >
        Завантажити x32
      </a>
      <a
        v-if="linkcommon"
        :href="props.linkcommon"
        class="bg-green-500 hover:bg-green-600 text-white px-2 py-2 rounded transition-colors flex-1 text-center"
      >
        Завантажити x86-x64
      </a>
      <a
        v-if="linkupdate"
        :href="props.linkupdate"
        class="bg-green-500 hover:bg-green-600 text-white px-2 py-2 rounded transition-colors flex-1 text-center"
      >
        {{ textupdate }}
      </a>
    </div>
  </div>
</template>