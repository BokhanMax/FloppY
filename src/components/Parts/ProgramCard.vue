<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import Version from '@/components/Version.vue'
import { formatProgramDate, getDownloads, iconBase } from '@/helpers/programs.js'

const props = defineProps({
  program: { type: Object, required: true },
  // h2 на сторінці категорії (під h1), h3 на головній (під h2 "Останні оновлення")
  headingTag: { type: String, default: 'h2' },
})

// Явні локаль і часовий пояс — щоб дата в SSG-HTML збігалася з датою в браузері
const date = computed(() => formatProgramDate(props.program.createdAt, { timeZone: 'Europe/Kyiv' }))
const downloads = computed(() => getDownloads(props.program))
const icon = computed(() => iconBase(props.program.name))
</script>

<template>
  <article class="card flex flex-col gap-3.5 p-5" :id="program.id">
    <div class="flex items-start gap-3.5">
      <img
        :src="icon + '-96w.avif'"
        :alt="'Скачати ' + program.name + ' безкоштовно'"
        width="52"
        height="52"
        loading="lazy"
        class="h-13 w-13 shrink-0 rounded-[14px] bg-surface-2 object-contain p-1.5"
      />
      <div class="flex min-w-0 flex-1 flex-col gap-1.5">
        <component :is="headingTag" class="text-lg leading-tight font-semibold">
          <RouterLink :to="'/program/' + program.id" class="hover:text-accent-fg">
            {{ program.name }}
          </RouterLink>
        </component>
        <div class="flex min-w-0 items-center gap-2">
          <Version v-if="program.version" :version="program.version" :name="program.name" />
          <span class="shrink-0 text-xs whitespace-nowrap text-faint">{{ date }}</span>
        </div>
      </div>
      <span
        v-if="program.ispaid"
        class="shrink-0 rounded-full bg-paid px-2.5 py-1 text-xs font-semibold text-paid-fg"
        title="Умовно-безкоштовна: після пробного періоду потрібна ліцензія"
      >
        Shareware
      </span>
      <span
        v-else
        class="shrink-0 rounded-full bg-free px-2.5 py-1 text-xs font-semibold text-free-fg"
      >
        Безкоштовна
      </span>
    </div>

    <p class="flex-1 text-[15px] leading-relaxed text-muted">{{ program.description }}</p>

    <div v-if="downloads.length" class="flex gap-2">
      <a :href="downloads[0].href" target="_blank" rel="noopener" class="btn btn-primary flex-1">
        <svg
          class="h-[18px] w-[18px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
        </svg>
        Завантажити{{ downloads[0].arch === 'x86-x64' ? '' : ' ' + downloads[0].arch }}
      </a>
      <a
        v-for="d in downloads.slice(1)"
        :key="d.arch"
        :href="d.href"
        target="_blank"
        rel="noopener"
        class="btn btn-secondary"
        :aria-label="'Завантажити ' + program.name + ' ' + d.arch"
      >
        {{ d.arch }}
      </a>
    </div>

    <div
      v-if="program.website || (program.linkupdate && program.textupdate)"
      class="flex flex-wrap items-center gap-x-5 gap-y-1 border-t border-line pt-3 text-sm"
    >
      <a
        v-if="program.website"
        :href="program.website"
        target="_blank"
        rel="noopener"
        class="inline-flex min-h-7 items-center gap-1.5 text-muted hover:text-fg"
      >
        <svg
          class="h-[15px] w-[15px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
          <path
            d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9s1.3-6.3 3.8-9z"
          />
        </svg>
        Офіційний сайт
      </a>
      <a
        v-if="program.linkupdate && program.textupdate"
        :href="program.linkupdate"
        target="_blank"
        rel="noopener"
        class="inline-flex min-h-7 items-center gap-1.5 font-medium text-accent-fg hover:underline"
      >
        <svg
          class="h-[15px] w-[15px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
        </svg>
        {{ program.textupdate }}
      </a>
    </div>
  </article>
</template>
