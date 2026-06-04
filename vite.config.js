import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'
import { fetchProgramRoutes } from './src/router/programroutes.js'
import fs from 'fs'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const names = ['internet', 'media', 'drivers', 'dev', 'files', 'system', 'faq', 'contact']

const staticRoutes = names.map((name) => `/${name}`)

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
  const allRoutes = [...staticRoutes, ...programRoutes].filter((route) => route !== '/404')

  return {
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
  }
})
