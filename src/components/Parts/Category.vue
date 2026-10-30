<script setup>
import ProgramCard from './ProgramCard.vue'
import TextBlock from '../TextBlock.vue'
import BlogPreview from '@/components/BlogPreview.vue'
import { computed } from 'vue'
import { getProgramsByCategory } from '../../helpers/programs.js'
import { CATEGORIES } from '../../helpers/cats.js'

const props = defineProps({
  cat: {
    type: String,
  },
  title: {
    type: String,
  },
})

const programs = computed(() => getProgramsByCategory(props.cat))

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
  <div :class="'wrapper_' + props.cat">
    <h2 class="xs:text-2xl text-3xl font-bold text-center mb-8 text-green-dark">{{ title }}</h2>
    <div class="flex justify-center mb-8">
      <hr class="w-24 border-t border-gray-300" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-stretch">
      <ProgramCard
        v-for="program in programs"
        :key="program.id"
        :id="program.id"
        :name="program.name"
        :description="program.description"
        :createdAt="program.createdAt"
        :icon="program.icon"
        :version="program.version"
        :link64="program.link64"
        :link32="program.link32"
        :linkcommon="program.linkcommon"
        :linkupdate="program.linkupdate"
        :textupdate="program.textupdate"
        :website="program.website"
        :ispaid="program.ispaid"
      />
    </div>
    <BlogPreview v-if="props.cat === 'newest'" />
    <TextBlock v-if="textBlockContent" :content="textBlockContent" />
  </div>
</template>
