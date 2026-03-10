<script setup>
import { Timestamp } from 'firebase/firestore'
import { time } from 'vue-gtag'
import VLazyImage from 'v-lazy-image'
import { RouterLink } from 'vue-router'
import Button from './Button.vue'

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
  <div
    class="bg-white border border-gray-200 rounded-lg 2xl:p-5 lg:p-3 xs:p-3 hover:border-gray-300 transition-colors"
    :id="props.id"
  >
    <div class="flex items-center place-content-between mb-4">
      <div class="flex">
        <div
          class="text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4 hover:scale-[1.05] duration-500 ease-in-out"
        >
          <!--<img
            :src="'icons/' + props.name.replace(/\s+/g, '') + 'Icon-72w.avif'" :alt="name"
            :title="'Скачати ' + props.name + ' безкоштовно по прямому посиланню'"
          /> -->
          <picture>
            <source
              media="(width < 800px)"
              :srcset="'icons/' + props.name.replace(/\s+/g, '') + 'Icon-72w.avif'"
              :width="72"
              :height="72"
            />
            <source
              media="(width >= 800px)"
              :srcset="'icons/' + props.name.replace(/\s+/g, '') + 'Icon-96w.avif'"
              :width="96"
              :height="96"
            />
            <v-lazy-image
              :src="'icons/source/' + props.name.replace(/\s+/g, '') + 'Icon.png'"
              :alt="'Скачати ' + props.name + ' безкоштовно'"
              :title="'Скачати ' + props.name + ' безкоштовно по прямому посиланню'"
              :width="48"
              :height="48"
            />
          </picture>
        </div>
        <div class="flex">
          <div class="flex flex-col">
            <h1
              v-if="id"
              class="text-l lg:text-sm 2xl:text-xl font-semibold text-green-dark xs:text-base xs:leading-8 hover:text-[#0071e3] transition-colors cursor-pointer"
            >
              <RouterLink
                :to="'/program/' + id"
                class="text-l lg:text-sm 2xl:text-xl font-semibold text-green-dark xs:text-base xs:leading-8 hover:text-[#0071e3] transition-colors cursor-pointer"
              >
                {{ name }}
              </RouterLink>
            </h1>
            <h1
              v-else
              class="text-l lg:text-sm 2xl:text-xl font-semibold text-green-dark xs:text-base xs:leading-8"
            >
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
        <a
          v-if="website"
          :href="props.website"
          class="inline-flex items-center gap-1 bg-gray-100 text-gray-700 md:text-s lg:text-[12px] xl:text-s xs:text-[9px] px-2 py-1 rounded-full font-medium hover:bg-gray-200 transition-colors"
          target="_blank"
        >
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
          Сайт
        </a>
        <span v-if="ispaid" class="text-red-500 text-xs mt-1">
          <svg
            width="12px"
            height="12px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 8.5V8.35417C18 6.50171 16.4983 5 14.6458 5H9.5C7.567 5 6 6.567 6 8.5C6 10.433 7.567 12 9.5 12H14.5C16.433 12 18 13.567 18 15.5C18 17.433 16.433 19 14.5 19H9.42708C7.53436 19 6 17.4656 6 15.5729V15.5M12 3V21"
              stroke="#e35a5d"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <title>Ця програма є Shareware, будь ласка, підтримайте розробника</title>
          </svg>
        </span>
      </div>
    </div>
    <p class="text-gray-600 mb-4 md:text-base">{{ description }}</p>
    <div class="flex flex-col sm:flex-row gap-2">
      <Button v-if="link64" title="Завантажити x64" :link="props.link64" />
      <Button v-if="link32" title="Завантажити x32" :link="props.link32" />
      <Button v-if="linkcommon" title="Завантажити x86-x64" :link="props.linkcommon" />
      <Button v-if="linkupdate" :title="textupdate" :link="props.linkupdate" />
    </div>
  </div>
</template>
