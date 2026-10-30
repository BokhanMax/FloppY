<script setup>
import ProgramCard from './ProgramCard.vue'
import TextBlock from '../TextBlock.vue'
import BlogPreview from '@/components/BlogPreview.vue'
import { computed, ref } from 'vue'
import { getProgramsByCategory, pluralPrograms } from '../../helpers/programs.js'
import { CATEGORIES } from '../../helpers/cats.js'

const props = defineProps({
  cat: {
    type: String,
  },
  title: {
    type: String,
  },
})

const isHome = computed(() => props.cat === 'newest')
const programs = computed(() => getProgramsByCategory(props.cat))

// Плитки категорій на головній — з кількістю програм
const categoryTiles = CATEGORIES.map((c) => ({
  ...c,
  count: pluralPrograms(getProgramsByCategory(c.cat).length),
}))

// Пошук на головній: миттєвий фільтр за назвою та описом (при SSG рядок порожній — у HTML усі програми)
const query = ref('')
const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return programs.value
  return programs.value.filter((p) => `${p.name} ${p.description}`.toLowerCase().includes(q))
})

const resultsEl = ref(null)
function scrollToResults() {
  resultsEl.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const textBlockContent = computed(() => {
  if (props.cat === 'newest') {
    return `<p>На цій сторінці ви знайдете найкращі <strong>безкоштовні програми для Windows</strong>, які допоможуть вам працювати продуктивніше, створювати контент та розважатися. Ми регулярно поповнюємо базу новинками та стежимо за виходом оновлень.</p>
<p>Всі програми в нашій базі:</p>
<ul>
  <li><strong>100% безкоштовні</strong> — або з безкоштовним випробувальним періодом, щоб ви могли оцінити програму перед покупкою</li>
  <li><strong>Безпечні</strong> — перевірені й рекомендовані спільнотою, без прихованого шкідливого програмного забезпечення</li>
  <li><strong>Без реклами в інсталяторах</strong> — чисті та надійні посилання для завантаження прямо з офіційних сайтів</li>
  <li><strong>Постійно оновлені</strong> — свіжі версії та нові програми додаються регулярно</li>
  <li><strong>Для будь-якого рівня</strong> — від простих утиліт для початківців до потужних інструментів для фахівців</li>
</ul>
<p>Від <strong>графічних редакторів</strong> до аудіоредакторів, від утиліт для очищення системи до медіаплеєрів — у нас є все для ваших потреб. Знайдіть програму для роботи з відео, фото, звуком, документами або системою буквально за хвилину.</p>
<p>Кожна картка програми містить коротку інформацію про застосунок, його версію та пряме посилання для завантаження. Жодної реєстрації та зайвих кроків — лише корисний безкоштовний софт.</p>
<p>Обирайте категорію зверху, щоб знайти потрібну програму. <em>Загальна база містить програми всіх категорій</em>.</p>`
  }
  // Тексти категорій — у полі text в helpers/cats.js
  return CATEGORIES.find((c) => c.cat === props.cat)?.text || ''
})
</script>

<template>
  <div>
    <!-- Головна: заголовок, пошук, плитки категорій -->
    <template v-if="isHome">
      <section class="flex max-w-3xl flex-col gap-5 pt-6 pb-10 sm:pt-12">
        <span
          class="self-start rounded-full bg-accent-soft px-3 py-1.5 text-[13px] font-semibold text-accent-fg"
        >
          {{ pluralPrograms(programs.length) }} · {{ CATEGORIES.length }} категорій
        </span>
        <h1 class="text-3xl leading-[1.1] font-bold tracking-tight sm:text-5xl">
          Безкоштовні програми для Windows
        </h1>
        <p class="text-base leading-relaxed text-muted sm:text-lg">
          Перевірений софт з прямими посиланнями на офіційні сайти розробників. Без реклами в
          інсталяторах і без реєстрації.
        </p>
        <form
          role="search"
          class="mt-1 flex items-center gap-2 rounded-2xl border border-line bg-surface p-1.5 pl-4 shadow-(--shadow)"
          @submit.prevent="scrollToResults"
        >
          <label for="program-search" class="sr-only">Пошук програми</label>
          <svg
            class="h-5 w-5 shrink-0 text-faint"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            id="program-search"
            v-model="query"
            type="search"
            autocomplete="off"
            placeholder="Наприклад, архіватор або VLC"
            aria-controls="programs"
            class="min-w-0 flex-1 bg-transparent py-2.5 text-base text-fg outline-none placeholder:text-faint sm:text-[17px]"
          />
          <button type="submit" class="btn btn-primary min-h-12 px-5 text-base">Знайти</button>
        </form>
      </section>

      <section aria-label="Категорії" class="pb-12">
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          <RouterLink
            v-for="c in categoryTiles"
            :key="c.slug"
            :to="'/' + c.slug"
            class="card flex flex-col gap-3.5 p-4 transition-colors hover:border-faint sm:p-[18px]"
          >
            <span
              class="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent-fg"
            >
              <svg
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path v-for="(d, i) in c.iconPaths" :key="i" :d="d" />
              </svg>
            </span>
            <span class="flex flex-col gap-0.5">
              <span class="font-semibold">{{ c.navLabel }}</span>
              <span class="text-[13px] text-faint">{{ c.count }}</span>
            </span>
          </RouterLink>
        </div>
      </section>
    </template>

    <!-- Сторінка категорії: заголовок -->
    <header v-else class="flex flex-col gap-2 pt-6 pb-8 sm:pt-10">
      <h1 class="text-3xl font-bold tracking-tight sm:text-4xl">{{ title }}</h1>
      <p class="text-muted">{{ pluralPrograms(programs.length) }}</p>
    </header>

    <!-- Список програм -->
    <section
      id="programs"
      ref="resultsEl"
      class="scroll-mt-24"
      :aria-labelledby="isHome ? 'programs-h' : undefined"
    >
      <div v-if="isHome" class="mb-5 flex flex-wrap items-baseline justify-between gap-2">
        <h2 id="programs-h" class="text-2xl font-bold tracking-tight sm:text-[28px]">
          {{ query.trim() ? 'Результати пошуку' : 'Останні оновлення' }}
        </h2>
        <span class="text-[15px] text-muted" aria-live="polite">
          {{ query.trim() ? pluralPrograms(filtered.length) : 'Нові програми та свіжі версії' }}
        </span>
      </div>

      <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
        <ProgramCard
          v-for="program in filtered"
          :key="program.id"
          :program="program"
          :heading-tag="isHome ? 'h3' : 'h2'"
        />
      </div>

      <p v-if="!filtered.length" class="card p-8 text-center text-muted">
        Нічого не знайдено за запитом «{{ query.trim() }}». Спробуйте іншу назву або оберіть
        категорію.
      </p>
    </section>

    <BlogPreview v-if="isHome" />
    <TextBlock v-if="textBlockContent" :content="textBlockContent" />
  </div>
</template>
