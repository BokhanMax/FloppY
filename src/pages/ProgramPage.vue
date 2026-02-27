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
        drivers: 'Драйвери',
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
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
        <p class="mt-4 text-gray-600">Завантаження...</p>
    </div>

    <div v-else-if="error" class="text-center py-12">
        <p class="text-red-500 text-xl mb-4">{{ error }}</p>
        <router-link to="/"
            class="inline-block bg-gradient-to-b from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 text-gray-800 border border-gray-300 px-6 py-3 rounded-lg transition-all font-semibold shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.8)] hover:shadow-[0_2px_4px_-1px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.8)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]">
            Повернутися на головну
        </router-link>
    </div>

    <div v-else-if="program" class="max-w-5xl mx-auto">
        <!-- Header Section -->
        <div class="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <div class="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <!-- Icon -->
                <div class="shrink-0">
                    <div class="w-24 h-24 rounded-lg flex items-center justify-center bg-gray-50 border border-gray-200">
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
                    <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        {{ program.name }}
                    </h1>
                    <div class="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                        <span v-if="program.version" class="text-lg">
                            <span class="font-semibold text-[#0071e3]">Версія: {{ program.version }}</span>
                            <span v-if="date" class="text-gray-400 mx-2">•</span>
                            <span v-if="date" class="text-gray-500">{{ date }}</span>
                        </span>
                        <span v-else-if="date" class="text-gray-500">{{ date }}</span>
                        <span v-if="categoryName" class="text-sm bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full">
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
                    <a v-if="program.website" :href="program.website" target="_blank" rel="noopener noreferrer"
                        class="inline-flex items-center gap-1.5 bg-gray-100 text-gray-700 text-sm px-3 py-1.5 rounded-full font-medium hover:bg-gray-200 transition-colors">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        Офіційний сайт розробника
                    </a>
                </div>
            </div>
        </div>

        <!-- Description Section -->
        <div v-if="program.descriptionbig" class="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Опис програми</h2>
            <div class="prose prose-lg max-w-none">
                <p class="text-gray-700 leading-relaxed whitespace-pre-line" style="line-height: 1.8;">
                    {{ program.descriptionbig }}
                </p>
            </div>
        </div>

        <div v-else class="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Опис програми</h2>
            <div class="prose prose-lg max-w-none">
                <p class="text-gray-700 leading-relaxed whitespace-pre-line" style="line-height: 1.8;">
                    {{ program.description }}
                </p>
            </div>
        </div>

        <!-- Download Section -->
        <div class="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Завантажити</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <a v-if="program.link64" :href="program.link64" target="_blank" rel="noopener noreferrer"
                    class="bg-gradient-to-b from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 text-gray-800 border border-gray-300 px-6 py-4 rounded-lg transition-all text-center font-semibold text-lg flex items-center justify-center gap-2 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.8)] hover:shadow-[0_2px_4px_-1px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.8)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Завантажити x64
                </a>
                <a v-if="program.link32" :href="program.link32" target="_blank" rel="noopener noreferrer"
                    class="bg-gradient-to-b from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 text-gray-800 border border-gray-300 px-6 py-4 rounded-lg transition-all text-center font-semibold text-lg flex items-center justify-center gap-2 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.8)] hover:shadow-[0_2px_4px_-1px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.8)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Завантажити x32
                </a>
                <a v-if="program.linkcommon" :href="program.linkcommon" target="_blank" rel="noopener noreferrer"
                    class="bg-gradient-to-b from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 text-gray-800 border border-gray-300 px-6 py-4 rounded-lg transition-all text-center font-semibold text-lg flex items-center justify-center gap-2 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.8)] hover:shadow-[0_2px_4px_-1px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.8)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Завантажити x86-x64
                </a>
                <a v-if="program.textupdate && program.linkupdate" :href="program.linkupdate" target="_blank"
                    rel="noopener noreferrer"
                    class="bg-gradient-to-b from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 text-gray-800 border border-gray-300 px-6 py-4 rounded-lg transition-all text-center font-semibold text-lg flex items-center justify-center gap-2 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.8)] hover:shadow-[0_2px_4px_-1px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.8)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    {{ program.textupdate }}
                </a>
            </div>
        </div>

        <!-- Additional Info Section -->
        <div class="bg-white border border-gray-200 rounded-lg p-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Додаткова інформація</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Version -->
                <div v-if="program.version" class="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div class="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg class="w-5 h-5 text-[#0071e3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="text-sm text-gray-600 font-medium mb-1">Версія</div>
                        <div class="text-[#0071e3] font-semibold">{{ program.version }}</div>
                    </div>
                </div>

                <!-- Date -->
                <div v-if="date" class="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div class="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="text-sm text-gray-600 font-medium mb-1">Дата оновлення</div>
                        <div class="text-gray-900">{{ date }}</div>
                    </div>
                </div>

                <!-- Category -->
                <div v-if="categoryName" class="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div class="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <svg class="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="text-sm text-gray-600 font-medium mb-1">Категорія</div>
                        <div class="text-gray-900">{{ categoryName }}</div>
                    </div>
                </div>

                <!-- License -->
                <div v-if="program.ispaid !== undefined" class="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div class="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                        :class="program.ispaid ? 'bg-red-100' : 'bg-green-100'">
                        <svg class="w-5 h-5" :class="program.ispaid ? 'text-red-600' : 'text-green-600'" 
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path v-if="program.ispaid" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="text-sm text-gray-600 font-medium mb-1">Тип ліцензії</div>
                        <div class="text-gray-900">{{ program.ispaid ? 'Shareware' : 'Безкоштовна' }}</div>
                        <div v-if="program.ispaid" class="text-xs text-red-600 mt-1">Потрібна підтримка розробника</div>
                    </div>
                </div>

                <!-- Website -->
                <div v-if="program.website" class="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200 md:col-span-2">
                    <div class="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg class="w-5 h-5 text-[#0071e3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="text-sm text-gray-600 font-medium mb-1">Офіційний сайт</div>
                        <a :href="program.website" target="_blank" rel="noopener noreferrer"
                            class="inline-flex items-center gap-1.5 text-[#0071e3] hover:text-[#0077ed] font-medium transition-colors break-all">
                            {{ program.website }}
                            <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
