import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'
import { fetchProgramRoutes } from './src/router/programroutes.js'
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

// Генерація маршрутів для постів блогу з файлів /blog/*.md
const blogRoutes = fs
  .readdirSync(path.join(__dirname, 'blog'))
  .filter((f) => f.endsWith('.md'))
  .map((f) => `/blog/${f.replace(/\.md$/, '')}`)

export default defineConfig(async ({ mode }) => {
  // Client-side code should still read variables via import.meta.env (Vite) or use VITE_ prefix.
  const env = loadEnv(mode, process.cwd(), '')
  Object.assign(process.env, env)
  // Fetch program routes from Firebase at build time
  let programRoutes = []
  try {
    programRoutes = await fetchProgramRoutes()
  } catch (error) {
    console.warn('⚠️  Could not fetch program routes for sitemap:', error.message)
    console.warn('   Sitemap will be generated without program routes')
  }

  // Combine static and dynamic routes, exclude /404
  const allRoutes = [...staticRoutes, ...blogRoutes, ...programRoutes].filter(
    (route) => route !== '/404',
  )

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
        exclude: ['/404', '/google791bf0808cd727c5'],
        readable: true,
        changefreq: 'daily',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      }),
    ],
    ssgOptions: {
      includedRoutes(paths) {
        // Виключаємо шаблони з параметрами (/:id, /:slug) — vite-ssg не може їх рендерити
        // Маршрути /program/:id навмисно виключено з SSG
        const filtered = paths.filter((p) => !p.includes(':'))
        return [...filtered, ...blogRoutes]
      },
    },
  }
})
