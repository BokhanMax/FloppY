<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { CATEGORIES } from '../helpers/cats.js'
import { getProgramById, formatProgramDate, getDownloads, iconBase } from '../helpers/programs.js'
import { useSeo, breadcrumbList, absoluteUrl } from '../helpers/seo.js'
import Version from '../components/Version.vue'

const route = useRoute()
const program = computed(() => getProgramById(route.params.id))

const date = computed(() =>
  formatProgramDate(program.value?.createdAt, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Europe/Kyiv',
  }),
)

const category = computed(() => CATEGORIES.find((c) => c.cat === program.value?.category))
const downloads = computed(() => (program.value ? getDownloads(program.value) : []))

const ARCH_HINT = {
  x64: 'Для 64-бітної Windows',
  x32: 'Для 32-бітної Windows',
  'x86-x64': 'Для 32- та 64-бітної Windows',
}

// Домен без www — для підпису "Джерело" та посилання на сайт розробника
const hostname = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return ''
  }
}
const downloadHost = computed(() => hostname(downloads.value[0]?.href))
const websiteHost = computed(() => hostname(program.value?.website))

useSeo({
  title: () =>
    program.value
      ? `Скачати ${program.value.name} ${program.value.version} безкоштовно | Floppy`
      : 'Програму не знайдено | Floppy',
  description: () =>
    program.value &&
    `Скачати ${program.value.name} ${program.value.version} для Windows ${program.value.ispaid ? '' : 'безкоштовно '}з офіційного сайту. ${program.value.description}`,
  noindex: () => !program.value,
  jsonLd: () => {
    const p = program.value
    if (!p) return null
    const path = `/program/${p.id}`
    return [
      {
        '@type': 'SoftwareApplication',
        name: p.name,
        softwareVersion: p.version,
        operatingSystem: 'Windows',
        applicationCategory: category.value?.schemaCategory,
        description: p.descriptionbig || p.description,
        url: absoluteUrl(path),
        // AVIF генерується для кожної іконки; вихідник у source/ може бути png, svg або webp
        image: absoluteUrl(iconBase(p.name) + '.avif'),
        downloadUrl: p.link64 || p.linkcommon || p.link32 || undefined,
        dateModified: p.createdAt,
        ...(p.ispaid ? {} : { offers: { '@type': 'Offer', price: '0', priceCurrency: 'UAH' } }),
      },
      breadcrumbList([
        { name: 'Головна', path: '/' },
        ...(category.value
          ? [{ name: category.value.title, path: '/' + category.value.slug }]
          : []),
        { name: p.name, path },
      ]),
    ]
  },
})
</script>

<template>
  <div v-if="!program" class="py-16 text-center">
    <h1 class="mb-6 text-2xl font-bold">Програму не знайдено</h1>
    <RouterLink to="/" class="btn btn-secondary">Повернутися на головну</RouterLink>
  </div>

  <div v-else class="flex flex-col gap-5 pt-6">
    <!-- Хлібні крихти -->
    <nav aria-label="Навігаційний ланцюжок" class="text-sm text-faint">
      <ol class="flex flex-wrap items-center gap-2">
        <li><RouterLink to="/" class="text-muted hover:text-fg">Головна</RouterLink></li>
        <template v-if="category">
          <li aria-hidden="true">/</li>
          <li>
            <RouterLink :to="'/' + category.slug" class="text-muted hover:text-fg">
              {{ category.title }}
            </RouterLink>
          </li>
        </template>
        <li aria-hidden="true">/</li>
        <li class="text-fg" aria-current="page">{{ program.name }}</li>
      </ol>
    </nav>

    <div class="flex flex-wrap items-stretch gap-5">
      <!-- Про програму -->
      <section class="card flex min-w-0 flex-[999_1_560px] flex-col gap-5 p-6 sm:p-7">
        <div class="flex flex-wrap items-center gap-5">
          <img
            :src="iconBase(program.name) + '-96w.avif'"
            :alt="'Скачати програму ' + program.name + ' для Windows безкоштовно'"
            width="88"
            height="88"
            class="h-22 w-22 shrink-0 rounded-[22px] bg-surface-2 object-contain p-2.5"
          />
          <div class="flex min-w-0 flex-col gap-2.5">
            <h1 class="text-3xl leading-tight font-bold tracking-tight sm:text-4xl">
              {{ program.name }}
            </h1>
            <div class="flex flex-wrap items-center gap-2 text-sm">
              <Version v-if="program.version" :version="program.version" :name="program.name" />
              <span
                v-if="program.ispaid"
                class="rounded-full bg-paid px-2.5 py-1 font-semibold text-paid-fg"
                title="Умовно-безкоштовна: після пробного періоду потрібна ліцензія"
              >
                Shareware
              </span>
              <span v-else class="rounded-full bg-free px-2.5 py-1 font-semibold text-free-fg">
                Безкоштовна
              </span>
              <RouterLink
                v-if="category"
                :to="'/' + category.slug"
                class="rounded-full bg-surface-2 px-2.5 py-1 text-muted hover:text-fg"
              >
                {{ category.title }}
              </RouterLink>
              <span v-if="date" class="text-faint">Оновлено {{ date }}</span>
            </div>
          </div>
        </div>
        <p class="text-lg leading-relaxed text-muted">{{ program.description }}</p>
      </section>

      <!-- Завантаження -->
      <aside class="card flex flex-[1_1_320px] flex-col gap-3 p-6" aria-labelledby="download-h">
        <h2 id="download-h" class="mb-1 text-xl font-bold">Завантажити</h2>
        <a
          v-for="(d, i) in downloads"
          :key="d.arch"
          :href="d.href"
          target="_blank"
          rel="noopener"
          :class="[
            'btn justify-start gap-3 px-[18px]',
            i === 0 ? 'btn-primary min-h-14' : 'btn-secondary min-h-[52px]',
          ]"
        >
          <svg
            class="h-5 w-5 shrink-0"
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
          <span class="flex flex-col text-left leading-tight">
            <span>Завантажити {{ d.arch }}</span>
            <span v-if="i === 0" class="text-[13px] font-normal opacity-85">{{
              ARCH_HINT[d.arch]
            }}</span>
          </span>
        </a>
        <a
          v-if="program.linkupdate && program.textupdate"
          :href="program.linkupdate"
          target="_blank"
          rel="noopener"
          class="btn btn-secondary min-h-[52px] justify-start gap-3 px-[18px]"
        >
          <svg
            class="h-5 w-5 shrink-0"
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
        <p v-if="downloadHost" class="mt-1 text-[13px] leading-normal text-faint">
          Джерело файлу: {{ downloadHost }}
        </p>
      </aside>
    </div>

    <!-- Інформація та опис -->
    <section class="card flex flex-col gap-5 p-6 sm:p-7" aria-labelledby="info-h">
      <h2 id="info-h" class="text-2xl font-bold">Інформація</h2>
      <dl class="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-3">
        <div v-if="program.version" class="flex flex-col gap-1 rounded-2xl bg-bg p-4">
          <dt class="text-[13px] text-faint">Версія</dt>
          <dd class="font-mono text-[15px] text-accent-fg">{{ program.version }}</dd>
        </div>
        <div v-if="date" class="flex flex-col gap-1 rounded-2xl bg-bg p-4">
          <dt class="text-[13px] text-faint">Дата оновлення</dt>
          <dd class="text-[15px] font-medium">{{ date }}</dd>
        </div>
        <div class="flex flex-col gap-1 rounded-2xl bg-bg p-4">
          <dt class="text-[13px] text-faint">Ліцензія</dt>
          <dd class="text-[15px] font-medium">
            {{ program.ispaid ? 'Shareware — потрібна ліцензія' : 'Безкоштовна' }}
          </dd>
        </div>
        <div v-if="program.website" class="flex flex-col gap-1 rounded-2xl bg-bg p-4">
          <dt class="text-[13px] text-faint">Офіційний сайт</dt>
          <dd class="text-[15px] font-medium">
            <a
              :href="program.website"
              target="_blank"
              rel="noopener"
              class="break-all text-accent-fg hover:underline"
            >
              {{ websiteHost || program.website }} ↗
            </a>
          </dd>
        </div>
      </dl>

      <template v-if="program.descriptionbig">
        <h2 class="mt-2 text-2xl font-bold">Опис програми</h2>
        <p class="max-w-3xl text-[17px] leading-[1.7] whitespace-pre-line text-muted">
          {{ program.descriptionbig }}
        </p>
      </template>
    </section>
  </div>
</template>
