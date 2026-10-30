/**
 * Дані програм з файлів /data/programs/<id>.json.
 * Файли вбудовуються у збірку через Vite glob, тому програми
 * потрапляють у згенерований HTML (SSG) без запитів до бази.
 */

const files = import.meta.glob('/data/programs/*.json', { eager: true, import: 'default' })

const programs = Object.entries(files).map(([path, data]) => ({
  id: path
    .split('/')
    .pop()
    .replace(/\.json$/, ''),
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
 * Посилання на завантаження програми: [{ href, arch }], перше — основне.
 */
export function getDownloads(p) {
  return [
    p.link64 && { href: p.link64, arch: 'x64' },
    p.link32 && { href: p.link32, arch: 'x32' },
    p.linkcommon && { href: p.linkcommon, arch: 'x86-x64' },
  ].filter(Boolean)
}

/**
 * Базове ім'я файлів іконки: назва без пробілів + Icon (див. SharpIconsConvert.js).
 */
export const iconBase = (name) => '/icons/' + name.replace(/\s+/g, '') + 'Icon'

/**
 * "1 програма", "3 програми", "13 програм".
 */
export function pluralPrograms(n) {
  const mod10 = n % 10
  const mod100 = n % 100
  if (mod10 === 1 && mod100 !== 11) return `${n} програма`
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return `${n} програми`
  return `${n} програм`
}

/**
 * Форматування дати оновлення (ISO-рядок) у локалізований рядок (uk-UA).
 */
export function formatProgramDate(iso, options) {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('uk-UA', options)
}
