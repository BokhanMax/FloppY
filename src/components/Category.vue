<script setup>
import ProgramCard from '../components/ProgramCard.vue'
import { ref, onMounted } from 'vue'
import { db } from '../firebaseConfig'
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

const fetchProgramsByCategory = async (category) => {
  loading.value = true
  error.value = null
  try {
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
  } catch (err) {
    console.error('Помилка при отриманні програм:', err)
    error.value = err
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchProgramsByCategory(props.cat)
})
</script>

<template>
  <div :class="'wrapper' + props.cat">
    <h2 class="xs:text-2xl text-3xl font-bold text-center mb-8 text-green-dark">{{ title }}</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        :website="program.website"
      />
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    reRender() {
      this.$forceUpdate()
    },
  },
}
</script>
