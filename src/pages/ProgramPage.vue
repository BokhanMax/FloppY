<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { db } from '../firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import { Timestamp } from 'firebase/firestore'
import VLazyImage from 'v-lazy-image'

const route = useRoute()
const program = ref(null)
const loading = ref(true)
const error = ref(null)

const fetchProgram = async (programId) => {
    loading.value = true
    error.value = null
    try {
        const docRef = doc(db, 'programs', programId)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            program.value = {
                id: docSnap.id,
                ...docSnap.data(),
            }
        } else {
            error.value = 'Програму не знайдено'
        }
    } catch (err) {
        console.error('Помилка при отриманні програми:', err)
        error.value = 'Помилка при завантаженні програми'
    } finally {
        loading.value = false
    }
}

const date = computed(() => {
    if (program.value?.createdAt instanceof Timestamp) {
        return program.value.createdAt.toDate().toLocaleDateString('uk-UA', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
    }
    return ''
})

const categoryName = computed(() => {
    const categories = {
        internet: 'Інтернет, месенджери, RDP',
        system: 'Системні утиліти',
        media: 'Програми для медіа',
        files: 'Робота з файлами',
        dev: 'Розробка, програмування',
    }
    return categories[program.value?.category] || program.value?.category || ''
})

// Update document title when program is loaded
watch(program, (newProgram) => {
    if (newProgram) {
        document.title = `Скачати ${newProgram.name} ${newProgram.version} безкоштовно | Floppy`
    }
}, { immediate: true })

onMounted(() => {
    if (route.params.id) {
        fetchProgram(route.params.id)
    }
})
</script>

<template>
    <div v-if="loading" class="text-center py-12">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
        <p class="mt-4 text-gray-600">Завантаження...</p>
    </div>

    <div v-else-if="error" class="text-center py-12">
        <p class="text-red-500 text-xl mb-4">{{ error }}</p>
        <router-link to="/"
            class="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors">
            Повернутися на головну
        </router-link>
    </div>

    <div v-else-if="program" class="max-w-5xl mx-auto">
        <!-- Header Section -->
        <div class="bg-green-50 rounded-lg shadow-md p-6 mb-8">
            <div class="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <!-- Icon -->
                <div class="shrink-0">
                    <div class="w-24 h-24 rounded-lg flex items-center justify-center bg-white shadow-sm">
                        <picture>
                            <source media="(width < 800px)"
                                :srcset="'/icons/' + program.name.replace(/\s+/g, '') + 'Icon-72w.avif'" />
                            <source media="(width >= 800px)"
                                :srcset="'/icons/' + program.name.replace(/\s+/g, '') + 'Icon-96w.avif'" />
                            <v-lazy-image :src="'/icons/fallback/' + program.name.replace(/\s+/g, '') + 'Icon.png'"
                                :alt="program.name" class="w-12 h-12 object-contain" />
                        </picture>
                    </div>
                </div>

                <!-- Title and Info -->
                <div class="flex-1">
                    <h1 class="text-3xl md:text-4xl font-bold text-green-dark mb-2">
                        {{ program.name }}
                    </h1>
                    <div class="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                        <span v-if="program.version" class="text-lg font-semibold text-green-600">
                            Версія: {{ program.version }}
                        </span>
                        <span v-if="date" class="text-sm">
                            <svg class="inline-block w-4 h-4 mr-1" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {{ date }}
                        </span>
                        <span v-if="categoryName" class="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
                            {{ categoryName }}
                        </span>
                        <span v-if="program.ispaid" class="flex items-center text-sm text-red-500 font-semibold">
                            <svg class="inline-block w-4 h-4 mr-1" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Shareware
                        </span>
                    </div>
                    <p v-if="program.website" class="text-sm text-gray-600">
                        <a :href="program.website" target="_blank" rel="noopener noreferrer"
                            class="text-green-600 hover:text-green-700 underline flex items-center gap-1">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Офіційний сайт розробника
                        </a>
                    </p>
                </div>
            </div>
        </div>

        <!-- Description Section -->
        <div class="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 class="text-2xl font-bold text-green-dark mb-4">Опис програми</h2>
            <p class="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                {{ program.description }}
            </p>
        </div>

        <!-- Download Section -->
        <div class="bg-green-50 rounded-lg shadow-md p-6 mb-8">
            <h2 class="text-2xl font-bold text-green-dark mb-6">Завантажити</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <a v-if="program.link64" :href="program.link64" target="_blank" rel="noopener noreferrer"
                    class="bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg transition-colors text-center font-semibold text-lg flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Завантажити x64
                </a>
                <a v-if="program.link32" :href="program.link32" target="_blank" rel="noopener noreferrer"
                    class="bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg transition-colors text-center font-semibold text-lg flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Завантажити x32
                </a>
                <a v-if="program.linkcommon" :href="program.linkcommon" target="_blank" rel="noopener noreferrer"
                    class="bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg transition-colors text-center font-semibold text-lg flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Завантажити x86-x64
                </a>
                <a v-if="program.textupdate && program.linkupdate" :href="program.linkupdate" target="_blank"
                    rel="noopener noreferrer"
                    class="bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg transition-colors text-center font-semibold text-lg flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    {{ program.textupdate }}
                </a>
            </div>
        </div>

        <!-- Additional Info Section -->
        <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold text-green-dark mb-4">Додаткова інформація</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <div v-if="program.version">
                    <strong class="text-green-dark">Версія:</strong>
                    <span class="ml-2">{{ program.version }}</span>
                </div>
                <div v-if="date">
                    <strong class="text-green-dark">Дата оновлення:</strong>
                    <span class="ml-2">{{ date }}</span>
                </div>
                <div v-if="categoryName">
                    <strong class="text-green-dark">Категорія:</strong>
                    <span class="ml-2">{{ categoryName }}</span>
                </div>
                <div v-if="program.website">
                    <strong class="text-green-dark">Офіційний сайт:</strong>
                    <a :href="program.website" target="_blank" rel="noopener noreferrer"
                        class="ml-2 text-green-600 hover:text-green-700 underline">
                        {{ program.website }}
                    </a>
                </div>
                <div v-if="program.ispaid !== undefined">
                    <strong class="text-green-dark">Тип ліцензії:</strong>
                    <span class="ml-2">{{ program.ispaid ? 'Shareware (потрібна підтримка розробника)' : 'Безкоштовна'
                    }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
