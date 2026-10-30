/**
 * Дані програм з файлів /data/programs/<id>.json.
 * Файли вбудовуються у збірку через Vite glob, тому програми
 * потрапляють у згенерований HTML (SSG) без запитів до бази.
 */

const files = import.meta.glob('/data/programs/*.json', { eager: true, import: 'default' })

const programs = Object.entries(files).map(([path, data]) => ({
  id: path.split('/').pop().replace(/\.json$/, ''),
  ...data,
}))

const byDateDesc = (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
const byName = (a, b) => a.name.localeCompare(b.name)

/**
 * Список програм для сторінки категорії.
 * 'newest' — усі програми, новіші спочатку; інакше — фільтр за категорією за алфавітом.
 */
export function getProgramsByCategory(cat) {
  if (cat === 'newest') return [...programs].sort(byDateDesc)
  return programs.filter((p) => p.category === cat).sort(byName)
}

export function getProgramById(id) {
  return programs.find((p) => p.id === id) || null
}

export function getAllProgramIds() {
  return programs.map((p) => p.id)
}

/**
 * Форматування дати оновлення (ISO-рядок) у локалізований рядок (uk-UA).
 */
export function formatProgramDate(iso, options) {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('uk-UA', options)
}
