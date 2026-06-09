/**
 * Утиліти для завантаження та парсингу постів блогу з .md файлів.
 * Файли зберігаються у /blog/DDMMYYYY.md
 */

// Eager-завантаження всіх .md файлів з /blog/ через Vite glob
// { query: '?raw' } — кожен mod має вигляд { default: string }
const rawFiles = import.meta.glob('/blog/*.md', { query: '?raw', eager: true })

/**
 * Парсинг YAML-фронтматерії з .md файлу.
 * Підтримує прості пари key: value (без вкладеності).
 */
function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!match) return { meta: {}, content: raw }

  const meta = {}
  match[1].split('\n').forEach((line) => {
    const colonIdx = line.indexOf(':')
    if (colonIdx === -1) return
    const key = line.substring(0, colonIdx).trim()
    const value = line.substring(colonIdx + 1).trim()
    meta[key] = value
  })

  return { meta, content: match[2] }
}

/**
 * Парсинг дати з імені файлу (slug) у форматі DDMMYYYY.
 * Повертає об'єкт Date або null якщо формат невірний.
 */
function parseDateFromSlug(slug) {
  if (!/^\d{8}$/.test(slug)) return null
  const day = parseInt(slug.substring(0, 2), 10)
  const month = parseInt(slug.substring(2, 4), 10) - 1 // 0-indexed
  const year = parseInt(slug.substring(4, 8), 10)
  const date = new Date(year, month, day)
  // Перевірка валідності дати
  if (isNaN(date.getTime())) return null
  return date
}

/**
 * Форматування дати у локалізований рядок (uk-UA).
 */
export function formatBlogDate(date) {
  if (!date) return ''
  return date.toLocaleDateString('uk-UA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Повертає масив усіх постів блогу, відсортованих за датою (новіші спочатку).
 * Кожен пост: { slug, title, image, description, date, dateFormatted }
 */
export function getAllPosts() {
  const posts = []

  for (const [path, mod] of Object.entries(rawFiles)) {
    // path = '/blog/09062026.md' → slug = '09062026'
    const filename = path.split('/').pop()
    const slug = filename.replace(/\.md$/, '')
    const raw = mod.default

    const { meta } = parseFrontmatter(raw)
    const date = parseDateFromSlug(slug)

    posts.push({
      slug,
      title: meta.title || slug,
      image: meta.image || '',
      description: meta.description || '',
      date,
      dateFormatted: formatBlogDate(date),
    })
  }

  // Сортування за датою: спочатку новіші
  posts.sort((a, b) => {
    if (!a.date) return 1
    if (!b.date) return -1
    return b.date - a.date
  })

  return posts
}

/**
 * Повертає повний пост за slug: мета + HTML-вміст.
 * Повертає null якщо пост не знайдено.
 */
export function getPostBySlug(slug) {
  const path = `/blog/${slug}.md`
  const mod = rawFiles[path]
  if (!mod) return null
  const raw = mod.default

  const { meta, content } = parseFrontmatter(raw)
  const date = parseDateFromSlug(slug)

  return {
    slug,
    title: meta.title || slug,
    image: meta.image || '',
    description: meta.description || '',
    date,
    dateFormatted: formatBlogDate(date),
    rawContent: content,
  }
}
