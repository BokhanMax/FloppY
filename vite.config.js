import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'
import { CATEGORIES } from './src/helpers/cats.js'
import fs from 'fs'
import path from 'path'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const pkg = require('./package.json')

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const staticRoutes = [
  ...CATEGORIES.map((c) => `/${c.slug}`),
  '/faq',
  '/contact',
  '/blog',
]

// Пости блогу з файлів /blog/DDMMYYYY.md
const blogSlugs = fs
  .readdirSync(path.join(__dirname, 'blog'))
  .filter((f) => f.endsWith('.md'))
  .map((f) => f.replace(/\.md$/, ''))
const blogRoutes = blogSlugs.map((slug) => `/blog/${slug}`)

// Програми з файлів /data/programs/<slug>.json
const programsDir = path.join(__dirname, 'data', 'programs')
const programs = fs
  .readdirSync(programsDir)
  .filter((f) => f.endsWith('.json'))
  .map((f) => ({
    slug: f.replace(/\.json$/, ''),
    ...JSON.parse(fs.readFileSync(path.join(programsDir, f), 'utf8')),
  }))
const programRoutes = programs.map((p) => `/program/${p.slug}`)

// lastmod для sitemap: дата оновлення програми; для категорій і головної — найсвіжіша програма;
// для постів — дата з імені файлу. Решта сторінок ('*') — дата збірки.
// Мілісекунди з дат прибирає clean-sitemap.js
const latest = (dates) => new Date(Math.max(...dates.map((d) => d.getTime())))
const programDate = (p) => new Date(p.createdAt)
const blogDate = (slug) =>
  new Date(Date.UTC(+slug.slice(4, 8), +slug.slice(2, 4) - 1, +slug.slice(0, 2)))

const lastmod = {
  '*': new Date(),
  '/': latest(programs.map(programDate)),
  ...Object.fromEntries(programs.map((p) => [`/program/${p.slug}`, programDate(p)])),
  ...Object.fromEntries(blogSlugs.map((slug) => [`/blog/${slug}`, blogDate(slug)])),
}
if (blogSlugs.length) lastmod['/blog'] = latest(blogSlugs.map(blogDate))
for (const c of CATEGORIES) {
  const dates = programs.filter((p) => p.category === c.cat).map(programDate)
  if (dates.length) lastmod[`/${c.slug}`] = latest(dates)
}

export default defineConfig(async ({ mode }) => {
  // Client-side code should still read variables via import.meta.env (Vite) or use VITE_ prefix.
  const env = loadEnv(mode, process.cwd(), '')
  Object.assign(process.env, env)
  // Combine static and dynamic routes
  const allRoutes = [...staticRoutes, ...blogRoutes, ...programRoutes].filter(
    (route) => route)

  return {
    define: {
      __APP_VERSION__: JSON.stringify(pkg.version),
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    plugins: [
      vue(),
      vueDevTools(),
      tailwindcss(),
      Sitemap({
        dynamicRoutes: allRoutes,
        hostname: 'https://floppy.pp.ua',
        i18n: false,
        exclude: ['/404', '/google791bf0808cd727c5', '/admin'],
        generateImageTags: false,
        generateVideoTags: false,
        generateNewsTags: false,
        lastmod,
        xmlns: {
          news: false,
          xhtml: false,
          image: false,
          video: false
        }
      }),
    ],
    ssgOptions: {
      includedRoutes(paths) {
        // Виключаємо шаблони з параметрами (/:id, /:slug) — vite-ssg не може їх рендерити
        const filtered = paths.filter((p) => !p.includes(':'))
        return [...filtered, ...blogRoutes, ...programRoutes]
      },
    },
  }
})
