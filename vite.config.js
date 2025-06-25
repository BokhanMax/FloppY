import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'

const names = [
  'internet',
  'media',
  'dev',
  'files',
  'system',
  'faq',
  'contact'
]
const dynamicRoutes = names.map(name => `/${name}`)

export default defineConfig({
  base: '/floppyppua/',
  //build: {outDir: './docs'},
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    Sitemap({ dynamicRoutes, hostname: 'https://floppy.pp.ua'/* , outDir: './docs' */ }),
  ],
})
