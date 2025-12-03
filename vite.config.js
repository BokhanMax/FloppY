import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'
import { fetchProgramRoutes } from './scripts/fetchProgramRoutes.js'

const names = [
  'internet',
  'media',
  'dev',
  'files',
  'system',
  'faq',
  'contact'
]

const staticRoutes = names.map(name => `/${name}`)

export default defineConfig(async () => {
  // Fetch program routes from Firebase at build time
  let programRoutes = []
  try {
    programRoutes = await fetchProgramRoutes()
  } catch (error) {
    console.warn('⚠️  Could not fetch program routes for sitemap:', error.message)
    console.warn('   Sitemap will be generated without program routes')
  }

  // Combine static and dynamic routes
  const allRoutes = [...staticRoutes, ...programRoutes]

  return {
    build: {outDir: './docs'},
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
    plugins: [
      vue(),
      vueDevTools(),
      tailwindcss(),
      Sitemap({ dynamicRoutes: allRoutes, hostname: 'https://floppy.pp.ua', outDir: './docs' }),
    ],
  }
})
