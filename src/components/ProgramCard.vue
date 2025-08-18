<script setup>
const props = defineProps({
  id: { type: String },
  name: { type: String, required: true },
  description: { type: String },
  createdAt: { type: String },
  version: { type: String },
  website: { type: String },
  icon: { type: String },
  link32: { type: String },
  link64: { type: String },
  linkcommon: { type: String },
  linkupdate: { type: String },
  textupdate: { type: String },
  ispaid: { type: Boolean, default: false }
})

const date = props.createdAt.toDate().toLocaleDateString();

</script>

<template>
  <div class="bg-green-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow" :id="props.id">
    <div class="flex items-center place-content-between mb-4">
      <div class="flex">
        <div
          class="text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4 hover:scale-[1.3] duration-500 ease-in-out">
          <img :src="'icons/' + props.name.replace(/\s+/g, '') + 'Icon.png'" width="48" height="48" :alt="name"
            :title="'Скачати ' + props.name + ' безкоштовно по прямому посиланню'" />
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
        <span v-if="ispaid" class="text-red-500 text-xs mt-1">
          <svg width="12px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 8.5V8.35417C18 6.50171 16.4983 5 14.6458 5H9.5C7.567 5 6 6.567 6 8.5C6 10.433 7.567 12 9.5 12H14.5C16.433 12 18 13.567 18 15.5C18 17.433 16.433 19 14.5 19H9.42708C7.53436 19 6 17.4656 6 15.5729V15.5M12 3V21" stroke="#e35a5d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <title>Ця програма є Shareware, будь ласка, підтримайте розробника</title>
          </svg>
        </span>
      </div>
    </div>
    <p class="text-gray-600 mb-4">{{ description }}</p>
    <div class="flex flex-col sm:flex-row gap-2">
      <a v-if="link64" :href="props.link64"
        class="bg-green-500 hover:bg-green-600 text-white px-2 py-2 rounded transition-colors flex-1 text-center">
        Завантажити x64
      </a>
      <a v-if="link32" :href="props.link32"
        class="bg-green-500 hover:bg-green-600 text-white px-2 py-2 rounded transition-colors flex-1 text-center">
        Завантажити x32
      </a>
      <a v-if="linkcommon" :href="props.linkcommon"
        class="bg-green-500 hover:bg-green-600 text-white px-2 py-2 rounded transition-colors flex-1 text-center">
        Завантажити x86-x64
      </a>
      <a target="_blank" v-if="linkupdate" :href="props.linkupdate"
        class="bg-green-500 hover:bg-green-600 text-white px-2 py-2 rounded transition-colors flex-1 text-center">
        {{ textupdate }}
      </a>
    </div>
  </div>
</template>