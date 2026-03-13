<script setup>
import ProgramCard from './ProgramCard.vue'
import TextBlock from '../TextBlock.vue'
import { ref, onMounted, computed } from 'vue'
import { db } from '../../helpers/firebaseConfig'
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore'

const props = defineProps({
  cat: {
    type: String,
  },
  title: {
    type: String,
  },
})

const programs = ref([])
const loading = ref(true)
const error = ref(null)

const textBlockContent = computed(() => {
  if (props.cat === 'newest') {
    return `<p>На цій сторінці ви знайдете найкращі <strong>безкоштовні програми для Windows</strong>, які допоможуть вам працювати продуктивніше, створювати контент та розважатися.</p>
<p>Всі програми в нашій базі:</p>
<ul>
  <li><strong>100% безкоштовні</strong> — або з випробувальним періодом</li>
  <li><strong>Безпечні</strong> — перевірені й рекомендовані спільнотою</li>
  <li><strong>Без реклами інсталяторів</strong> — чисті та надійні посилання для завантаження</li>
  <li><strong>Постійно оновлені</strong> — свіжі версії та нові програми</li>
</ul>
<p>Від графічних редакторів до аудіоредакторів, від утиліт для очищення системи до медіаплеєрів — у нас є все для ваших потреб!</p>
<p>Обирайте категорію зліва або скористайтеся пошуком, щоб знайти потрібну програму. <em>Загальна база містить більше 500+ програм</em>.</p>`
  } else if (props.cat === 'dev') {
    return `<p><strong>Інструменти розробки для програмістів</strong> — скачати програми для веб-розробки, мобільної розробки та роботи з кодом.</p>
<p>У цій категорії ви знайдете:</p>
<ul>
  <li><strong>Редактори коду</strong> — потужні текстові редактори з підтримкою синтаксису</li>
  <li><strong>Git-клієнти</strong> — керування версіями та контролем коду</li>
  <li><strong>Фреймворки й бібліотеки</strong> — засоби для швидкої розробки</li>
  <li><strong>Компілятори й інтерпретатори</strong> — рантайми для популярних мов програмування</li>
  <li><strong>Утиліти для зручності</strong> — допоміжні інструменти для розробника</li>
</ul>
<p>Безкоштовний софт для розробки програмного забезпечення без додаткових витрат!</p>`
  }
  return ''
})

const fetchPrograms = async (category) => {
  loading.value = true
  error.value = null
  try {
    if (props.cat == 'newest') {
      const q = query(collection(db, 'programs'), orderBy('createdAt', 'desc'))
      const querySnapshot = await getDocs(q)

      programs.value = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    } else {
      const q = query(
        collection(db, 'programs'),
        where('category', '==', category),
        orderBy('name', 'asc'),
      )
      const querySnapshot = await getDocs(q)

      programs.value = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    }
  } catch (err) {
    console.error('Помилка при отриманні програм:', err)
    error.value = err
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchPrograms(props.cat)
})
</script>

<template>
  <div :class="'wrapper_' + props.cat">
    <h1 class="xs:text-2xl text-3xl font-bold text-center mb-8 text-green-dark">{{ title }}</h1>
    <div class="flex justify-center mb-8">
      <hr class="w-24 border-t border-gray-300" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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

    <TextBlock v-if="props.cat === 'newest' || props.cat === 'dev'" :content="textBlockContent" />
  </div>
</template>
