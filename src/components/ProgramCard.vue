<script setup>
import { Timestamp } from 'firebase/firestore';
import { time } from 'vue-gtag';

const props = defineProps({
  id: { type: String },
  name: { type: String, required: true },
  description: { type: String },
  createdAt: { type: Timestamp },
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
  <div class="bg-green-50 rounded-lg shadow-md 2xl:p-5 lg:p-3 xs:p-3 hover:shadow-lg transition-shadow" :id="props.id">
    <div class="flex items-center place-content-between mb-4">
      <div class="flex">
        <div
          class="text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4 hover:scale-[1.3] duration-500 ease-in-out">
          <img :src="'icons/' + props.name.replace(/\s+/g, '') + 'Icon.png'" width="48" height="48" :alt="name"
            :title="'Скачати ' + props.name + ' безкоштовно по прямому посиланню'" />
        </div>
        <div class="flex">
          <div class="flex flex-col">
            <h1 class="text-l lg:text-sm 2xl:text-xl font-semibold text-green-dark xs:text-base xs:leading-6">{{ name }}</h1>
            <p class="text-green-600 lg:text-sm xs:text-xs">{{ version }}</p>
          </div>
        </div>
      </div>
      <div class="flex self-start flex-col items-end">
        <span class="text-green-400 md:text-xs lg:text-[8px] xl:text-xs mb-1 xs:text-[10px]">
          {{ date }}
        </span>
        <a v-if="website" :href="props.website" class="text-gray-600 md:text-xs lg:text-[8px] xl:text-xs xs:text-[10px]" target="_blank">
          🌐 Сайт
        </a>
        <span v-if="ispaid" class="text-red-500 text-xs mt-1">
          <svg width="12px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 8.5V8.35417C18 6.50171 16.4983 5 14.6458 5H9.5C7.567 5 6 6.567 6 8.5C6 10.433 7.567 12 9.5 12H14.5C16.433 12 18 13.567 18 15.5C18 17.433 16.433 19 14.5 19H9.42708C7.53436 19 6 17.4656 6 15.5729V15.5M12 3V21"
              stroke="#e35a5d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <title>Ця програма є Shareware, будь ласка, підтримайте розробника</title>
          </svg>
        </span>
      </div>
    </div>
    <p class="text-gray-600 mb-4 md:text-sm">{{ description }}</p>
    <div class="flex flex-col sm:flex-row gap-2">
      <a v-if="link64" :href="props.link64"
        class="bg-green-500 hover:bg-green-600 text-white md:px-1 md:py-1 lg:px-2 lg:py-2 rounded transition-colors flex-1 text-center xl:text-xs lg:text-[9px] 2xl:text-sm md:text-[10px] xs:py-1.5 xs:px-1.5"
        target="_blank">
        Завантажити x64
      </a>
      <a v-if="link32" :href="props.link32"
        class="bg-green-500 hover:bg-green-600 text-white md:px-1 md:py-1 lg:px-2 lg:py-2 rounded transition-colors flex-1 text-center xl:text-xs lg:text-[9px] 2xl:text-sm md:text-[10px] xs:py-1.5 xs:px-1.5"
        target="_blank">
        Завантажити x32
      </a>
      <a v-if="linkcommon" :href="props.linkcommon"
        class="bg-green-500 hover:bg-green-600 text-white md:px-1 md:py-1 lg:px-2 lg:py-2 rounded transition-colors flex-1 text-center xl:text-xs lg:text-[9px] 2xl:text-sm md:text-[10px] xs:py-1.5 xs:px-1.5"
        target="_blank">
        Завантажити x86-x64
      </a>
      <a v-if="linkupdate" :href="props.linkupdate"
        class="bg-green-500 hover:bg-green-600 text-white md:px-1 md:py-1 lg:px-2 lg:py-2 rounded transition-colors flex-1 text-center xl:text-xs lg:text-[9px] 2xl:text-sm md:text-[10px] xs:py-1.5 xs:px-1.5"
        target="_blank">
        {{ textupdate }}
      </a>
    </div>
  </div>
</template>