<script setup>
import { Timestamp } from 'firebase/firestore'
import VLazyImage from 'v-lazy-image'
import { RouterLink } from 'vue-router'
import Button from '@/components/Button.vue'
import Paid from '@/components/Paid.vue'
import Website from '@/components/Website.vue'

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
        <Website v-if="website" :website="props.website" />
        <Paid v-if="ispaid" />
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
