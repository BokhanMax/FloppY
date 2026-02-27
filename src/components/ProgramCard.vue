<script setup>
import { Timestamp } from 'firebase/firestore'
import { time } from 'vue-gtag'
import VLazyImage from 'v-lazy-image'
import { RouterLink } from 'vue-router'

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
  ispaid: { type: Boolean, default: false },
})

const date = props.createdAt.toDate().toLocaleDateString()
</script>

<template>
  <div class="bg-white border border-gray-200 rounded-lg 2xl:p-5 lg:p-3 xs:p-3 hover:border-gray-300 transition-colors" :id="props.id">
    <div class="flex items-center place-content-between mb-4">
      <div class="flex">
        <div
          class="text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4 hover:scale-[1.05] duration-500 ease-in-out">
          <!--<img
            :src="'icons/' + props.name.replace(/\s+/g, '') + 'Icon-72w.avif'" :alt="name"
            :title="'Скачати ' + props.name + ' безкоштовно по прямому посиланню'"
          /> -->
          <picture>
            <source media="(width < 800px)" :srcset="'icons/' + props.name.replace(/\s+/g, '') + 'Icon-72w.avif'" />
            <source media="(width >= 800px)" :srcset="'icons/' + props.name.replace(/\s+/g, '') + 'Icon-96w.avif'" />
            <v-lazy-image :src="'icons/source/' + props.name.replace(/\s+/g, '') + 'Icon.png'" :alt="'Скачати ' + props.name + ' безкоштовно'"
              :title="'Скачати ' + props.name + ' безкоштовно по прямому посиланню'" />
          </picture>
        </div>
        <div class="flex">
          <div class="flex flex-col">
            <h1 v-if="id" class="text-l lg:text-sm 2xl:text-xl font-semibold text-green-dark xs:text-base xs:leading-8 hover:text-[#0071e3] transition-colors cursor-pointer">
              <RouterLink :to="'/program/' + id"
              class="text-l lg:text-sm 2xl:text-xl font-semibold text-green-dark xs:text-base xs:leading-8 hover:text-[#0071e3] transition-colors cursor-pointer">
              {{ name }}
              </RouterLink>
            </h1>
            <h1 v-else class="text-l lg:text-sm 2xl:text-xl font-semibold text-green-dark xs:text-base xs:leading-8">
              {{ name }}
            </h1>
            <p class="lg:text-s xs:text-xs">
              <span class="text-[#0071e3]">{{ version }}</span>
              <span class="text-gray-400 mx-2">•</span>
              <span class="text-gray-500 text-xs">{{ date }}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="flex self-start flex-col items-end">
        <a v-if="website" :href="props.website" class="inline-flex items-center gap-1 bg-gray-100 text-gray-700 md:text-s lg:text-[12px] xl:text-s xs:text-[9px] px-2 py-1 rounded-full font-medium hover:bg-gray-200 transition-colors"
          target="_blank">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
          Сайт
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
    <p class="text-gray-600 mb-4 md:text-base">{{ description }}</p>
    <div class="flex flex-col sm:flex-row gap-2">
      <a v-if="link64" :href="props.link64"
        class="bg-gradient-to-b from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 text-gray-800 border border-gray-300 md:px-1 md:py-1 lg:px-2 lg:py-2 rounded-lg transition-all flex-1 text-center xl:text-s lg:text-[10px] 2xl:text-base md:text-[12px] xs:py-1.5 xs:px-1.5 font-semibold shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.8)] hover:shadow-[0_2px_4px_-1px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.8)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
        target="_blank">
        Завантажити x64
      </a>
      <a v-if="link32" :href="props.link32"
        class="bg-gradient-to-b from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 text-gray-800 border border-gray-300 md:px-1 md:py-1 lg:px-2 lg:py-2 rounded-lg transition-all flex-1 text-center xl:text-s lg:text-[10px] 2xl:text-base md:text-[12px] xs:py-1.5 xs:px-1.5 font-semibold shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.8)] hover:shadow-[0_2px_4px_-1px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.8)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
        target="_blank">
        Завантажити x32
      </a>
      <a v-if="linkcommon" :href="props.linkcommon"
        class="bg-gradient-to-b from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 text-gray-800 border border-gray-300 md:px-1 md:py-1 lg:px-2 lg:py-2 rounded-lg transition-all flex-1 text-center xl:text-s lg:text-[10px] 2xl:text-base md:text-[12px] xs:py-1.5 xs:px-1.5 font-semibold shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.8)] hover:shadow-[0_2px_4px_-1px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.8)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
        target="_blank">
        Завантажити x86-x64
      </a>
      <a v-if="textupdate" :href="props.linkupdate"
        class="bg-gradient-to-b from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 text-gray-800 border border-gray-300 md:px-1 md:py-1 lg:px-2 lg:py-2 rounded-lg transition-all flex-1 text-center xl:text-s lg:text-[10px] 2xl:text-base md:text-[12px] xs:py-1.5 xs:px-1.5 font-semibold shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.8)] hover:shadow-[0_2px_4px_-1px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.8)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
        target="_blank">
        {{ textupdate }}
      </a>
    </div>
  </div>
</template>
