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
  // Load .env files into process.env for build-time (Node) usage.
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
    build: { outDir: './docs' },
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
        outDir: './docs',
        readable: true, // Format XML for readability
        changefreq: 'daily',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      }),
      // Plugin to copy 404.html with proper redirect script for GitHub Pages
      {
        name: 'copy-404',
        writeBundle() {
          const indexPath = path.resolve(__dirname, 'index.html')
          const destPath = path.resolve(__dirname, 'docs', '404.html')

          // Read index.html
          let content = fs.readFileSync(indexPath, 'utf-8')

          // Add redirect script before closing body tag
          // This script handles SPA routing for GitHub Pages
          const redirectScript = `
    <script>
      // Single Page Apps for GitHub Pages
      // https://github.com/rafgraph/spa-github-pages
      var pathSegmentsToKeep = 0;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>`

          // Insert script before closing body tag
          content = content.replace('</body>', redirectScript + '\n  </body>')

          // Write to 404.html
          fs.writeFileSync(destPath, content, 'utf-8')
          console.log('✅ Created 404.html with SPA redirect for GitHub Pages')
        },
      },
    ],
  }
})
