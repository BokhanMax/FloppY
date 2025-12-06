<script setup>
import { ref, onMounted, computed } from 'vue'
import { db } from '../firebaseConfig'
import {
  collection,
  query,
  orderBy,
  getDocs,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  Timestamp
} from 'firebase/firestore'

const PASSWORD_HASH = 'c32d626fcbe8e5e4c82625572617e4e977370b7c65f13996bb023ad3f12645a9'
const AUTH_KEY = 'manage_auth'

// Hash password using SHA-256
const hashPassword = async (password) => {
  const encoder = new TextEncoder()
  const data = encoder.encode(password)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
  return hashHex
}

const isAuthenticated = ref(false)
const passwordInput = ref('')
const passwordError = ref('')

const programs = ref([])
const loading = ref(true)
const error = ref(null)
const showModal = ref(false)
const editingProgram = ref(null)
const sortField = ref('name')
const sortDirection = ref('asc')
const formData = ref({
  name: '',
  description: '',
  version: '',
  category: '',
  website: '',
  link32: '',
  link64: '',
  linkcommon: '',
  linkupdate: '',
  textupdate: '',
  ispaid: false,
})

const categories = [
  { value: 'internet', label: 'Інтернет, месенджери, RDP' },
  { value: 'system', label: 'Системні утиліти' },
  { value: 'media', label: 'Програми для медіа' },
  { value: 'files', label: 'Робота з файлами' },
  { value: 'dev', label: 'Розробка, програмування' },
]

const fetchPrograms = async () => {
  loading.value = true
  error.value = null
  try {
    const q = query(collection(db, 'programs'), orderBy('createdAt', 'desc'))
    const querySnapshot = await getDocs(q)

    programs.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      date: doc.data().createdAt?.toDate?.() || new Date(),
      ...doc.data(),
    }))
  } catch (err) {
    console.error('Помилка при отриманні програм:', err)
    error.value = err.message
  } finally {
    loading.value = false
  }
}

const openAddModal = () => {
  editingProgram.value = null
  formData.value = {
    name: '',
    description: '',
    version: '',
    category: '',
    website: '',
    link32: '',
    link64: '',
    linkcommon: '',
    linkupdate: '',
    textupdate: '',
    ispaid: false,
  }
  showModal.value = true
}

const openEditModal = (program) => {
  editingProgram.value = program
  formData.value = {
    name: program.name || '',
    description: program.description || '',
    version: program.version || '',
    category: program.category || '',
    website: program.website || '',
    link32: program.link32 || '',
    link64: program.link64 || '',
    linkcommon: program.linkcommon || '',
    linkupdate: program.linkupdate || '',
    textupdate: program.textupdate || '',
    ispaid: program.ispaid || false,
  }
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  editingProgram.value = null
}

const saveProgram = async () => {
  try {
    const data = {
      name: formData.value.name,
      description: formData.value.description,
      version: formData.value.version,
      category: formData.value.category,
      website: formData.value.website,
      link32: formData.value.link32,
      link64: formData.value.link64,
      linkcommon: formData.value.linkcommon,
      linkupdate: formData.value.linkupdate,
      textupdate: formData.value.textupdate,
      ispaid: formData.value.ispaid,
    }

    if (editingProgram.value) {
      // Update existing program
      data.createdAt = Timestamp.now()
      const docRef = doc(db, 'programs', editingProgram.value.id)
      await updateDoc(docRef, data)
    } else {
      // Create new program
      data.createdAt = Timestamp.now()
      await addDoc(collection(db, 'programs'), data)
    }

    closeModal()
    await fetchPrograms()
  } catch (err) {
    console.error('Помилка при збереженні програми:', err)
    error.value = err.message
  }
}

const deleteProgram = async (programId) => {
  if (!confirm('Ви впевнені, що хочете видалити цю програму?')) {
    return
  }

  try {
    await deleteDoc(doc(db, 'programs', programId))
    await fetchPrograms()
  } catch (err) {
    console.error('Помилка при видаленні програми:', err)
    error.value = err.message
  }
}

const formatDate = (date) => {
  if (!date) return ''
  if (date instanceof Date) {
    return date.toLocaleDateString('uk-UA')
  }
  return date
}

const sortedPrograms = computed(() => {
  const sorted = [...programs.value]
  sorted.sort((a, b) => {
    let aValue = a[sortField.value] || ''
    let bValue = b[sortField.value] || ''

    // Handle date sorting
    if (sortField.value === 'date') {
      aValue = a.date instanceof Date ? a.date.getTime() : new Date(aValue).getTime()
      bValue = b.date instanceof Date ? b.date.getTime() : new Date(bValue).getTime()
    } else {
      // String comparison (case-insensitive)
      aValue = String(aValue).toLowerCase()
      bValue = String(bValue).toLowerCase()
    }

    if (aValue < bValue) return sortDirection.value === 'asc' ? -1 : 1
    if (aValue > bValue) return sortDirection.value === 'asc' ? 1 : -1
    return 0
  })
  return sorted
})

const sortBy = (field) => {
  if (sortField.value === field) {
    // Toggle direction if clicking the same field
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc'
  } else {
    // New field, default to ascending
    sortField.value = field
    sortDirection.value = 'asc'
  }
}

const getSortIcon = (field) => {
  if (sortField.value !== field) {
    return '↕️'
  }
  return sortDirection.value === 'asc' ? '↑' : '↓'
}

const checkAuth = () => {
  const auth = sessionStorage.getItem(AUTH_KEY)
  if (auth === 'true') {
    isAuthenticated.value = true
    fetchPrograms()
  }
}

const handleLogin = async (e) => {
  e.preventDefault()
  passwordError.value = ''

  try {
    const inputHash = await hashPassword(passwordInput.value)

    if (inputHash === PASSWORD_HASH) {
      isAuthenticated.value = true
      sessionStorage.setItem(AUTH_KEY, 'true')
      fetchPrograms()
    } else {
      passwordError.value = 'Невірний пароль'
      passwordInput.value = ''
    }
  } catch (err) {
    console.error('Помилка при перевірці пароля:', err)
    passwordError.value = 'Помилка автентифікації'
    passwordInput.value = ''
  }
}

const handleLogout = () => {
  isAuthenticated.value = false
  sessionStorage.removeItem(AUTH_KEY)
  passwordInput.value = ''
  programs.value = []
}

onMounted(() => {
  checkAuth()
})
</script>

<template>
  <!-- Login Form -->
  <div v-if="!isAuthenticated" class="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div class="max-w-md w-full bg-white rounded-lg shadow-md p-8">
      <h2 class="text-2xl font-bold text-center text-green-dark mb-6">Доступ до управління</h2>
      <form @submit="handleLogin" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Пароль</label>
          <input v-model="passwordInput" type="password" required autofocus
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Введіть пароль" />
          <p v-if="passwordError" class="mt-2 text-sm text-red-600">{{ passwordError }}</p>
        </div>
        <button type="submit"
          class="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors font-medium">
          Увійти
        </button>
      </form>
    </div>
  </div>

  <!-- Management Interface -->
  <div v-else class="max-w-7xl mx-auto px-4 py-8">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold text-green-dark">Управління програмами</h1>
      <div class="flex gap-3">
        <button @click="handleLogout"
          class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors font-medium text-sm">
          Вийти
        </button>
        <button @click="openAddModal"
          class="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors font-medium">
          + Додати програму
        </button>
      </div>
    </div>

    <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
      Помилка: {{ error }}
    </div>

    <div v-if="loading" class="text-center py-12">
      <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
      <p class="mt-4 text-gray-600">Завантаження...</p>
    </div>

    <div v-else class="bg-white rounded-lg shadow-md overflow-hidden">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-green-50">
            <tr>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">ID</th>
              <th @click="sortBy('name')"
                class="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-green-100 select-none">
                <div class="flex items-center gap-2">
                  Назва
                  <span class="text-green-600">{{ getSortIcon('name') }}</span>
                </div>
              </th>
              <th @click="sortBy('version')"
                class="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-green-100 select-none">
                <div class="flex items-center gap-2">
                  Версія
                  <span class="text-green-600">{{ getSortIcon('version') }}</span>
                </div>
              </th>
              <th @click="sortBy('category')"
                class="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-green-100 select-none">
                <div class="flex items-center gap-2">
                  Категорія
                  <span class="text-green-600">{{ getSortIcon('category') }}</span>
                </div>
              </th>
              <th @click="sortBy('date')"
                class="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-green-100 select-none">
                <div class="flex items-center gap-2">
                  Дата
                  <span class="text-green-600">{{ getSortIcon('date') }}</span>
                </div>
              </th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Дії</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="program in sortedPrograms" :key="program.id" class="hover:bg-gray-50">
              <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{{ program.id }}</td>
              <td class="px-4 py-3 text-sm font-medium text-gray-900">{{ program.name }}</td>
              <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{{ program.version }}</td>
              <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{{ program.category }}</td>
              <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{{ formatDate(program.date) }}</td>
              <td class="px-4 py-3 whitespace-nowrap text-sm font-medium">
                <button @click="openEditModal(program)" class="text-green-600 hover:text-green-900 mr-3">
                  Редагувати
                </button>
                <button @click="deleteProgram(program.id)" class="text-red-600 hover:text-red-900">
                  Видалити
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="bg-green-50 px-4 py-3 border-t border-gray-200">
        <p class="text-sm text-gray-700">
          Всього програм: <span class="font-semibold">{{ programs.length }}</span>
        </p>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50"
      @click.self="closeModal">
      <div class="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-xl font-bold text-green-dark">
            {{ editingProgram ? 'Редагувати програму' : 'Додати нову програму' }}
          </h3>
          <button @click="closeModal" class="text-gray-400 hover:text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form @submit.prevent="saveProgram" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Назва *</label>
            <input v-model="formData.name" type="text" required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Опис</label>
            <textarea v-model="formData.description" rows="3"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Версія</label>
              <input v-model="formData.version" type="text"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Категорія *</label>
              <select v-model="formData.category" required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="">Виберіть категорію</option>
                <option v-for="cat in categories" :key="cat.value" :value="cat.value">
                  {{ cat.label }}
                </option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">URL розробника</label>
            <input v-model="formData.website" type="url"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Посилання x32</label>
              <input v-model="formData.link32" type="url"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Посилання x64</label>
              <input v-model="formData.link64" type="url"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Посилання x86-x64</label>
              <input v-model="formData.linkcommon" type="url"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Посилання оновлення</label>
              <input v-model="formData.linkupdate" type="url"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Текст оновлення</label>
              <input v-model="formData.textupdate" type="text"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
          </div>

          <div>
            <label class="flex items-center">
              <input v-model="formData.ispaid" type="checkbox" class="mr-2" />
              <span class="text-sm font-medium text-gray-700">Shareware (потрібна підтримка розробника)</span>
            </label>
          </div>

          <div class="flex justify-end gap-3 pt-4">
            <button type="button" @click="closeModal"
              class="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
              Скасувати
            </button>
            <button type="submit"
              class="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors">
              {{ editingProgram ? 'Зберегти зміни' : 'Додати програму' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Additional styles if needed */
</style>
