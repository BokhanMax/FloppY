import sharp from 'sharp'
import fs from 'fs-extra'
import path from 'path'
import crypto from 'crypto'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const sourceDir = path.join(__dirname, '../../public/icons/source')
const outputDir = path.join(__dirname, '../../public/icons')
// Хеші вихідників уже сконвертованих іконок — щоб не конвертувати все на кожній збірці
const manifestPath = path.join(__dirname, '../../data/icon-hashes.json')
const sizes = [96, 72]
const quality = 80
// --force — сконвертувати всі іконки заново
const force = process.argv.includes('--force')

const outputsFor = (baseName) => [
  path.join(outputDir, `${baseName}.avif`),
  ...sizes.map((size) => path.join(outputDir, `${baseName}-${size}w.avif`)),
]

async function convertIcons() {
  try {
    // Ensure source directory exists
    if (!fs.existsSync(sourceDir)) {
      console.log(`❌ Папка ${sourceDir} не знайдена`)
      return
    }

    // Get all PNG, JPG, SVG, WebP files from source directory
    const files = fs.readdirSync(sourceDir).filter((file) => /\.(png|jpe?g|svg|webp)$/i.test(file))

    if (files.length === 0) {
      console.log('⚠️  В директорії source не знайдено PNG файлів')
      return
    }

    const manifest = force || !fs.existsSync(manifestPath) ? {} : fs.readJsonSync(manifestPath)
    // Налаштування входять у хеш: зміна розмірів чи якості перезбирає всі іконки
    const settings = JSON.stringify({ sizes, quality })

    let converted = 0
    let skipped = 0

    for (const file of files) {
      const inputPath = path.join(sourceDir, file)
      const baseName = path.parse(file).name
      const hash = crypto
        .createHash('sha1')
        .update(settings)
        .update(fs.readFileSync(inputPath))
        .digest('hex')
      const outputsExist = outputsFor(baseName).every((p) => fs.existsSync(p))

      // Вихідник не змінився — або іконка з'явилася до появи маніфесту і вже сконвертована
      if (!force && outputsExist && (manifest[file] === hash || !(file in manifest))) {
        manifest[file] = hash
        skipped++
        continue
      }

      // Convert to original size AVIF
      await sharp(inputPath).avif({ quality }).toFile(outputsFor(baseName)[0])

      // Convert to different sizes
      for (const size of sizes) {
        await sharp(inputPath)
          .resize(size, size, { fit: 'cover' })
          .avif({ quality })
          .toFile(path.join(outputDir, `${baseName}-${size}w.avif`))
      }

      manifest[file] = hash
      converted++
      console.log(`✅ Зроблено: ${baseName}`)
    }

    // Прибираємо з маніфесту видалені вихідники
    for (const file of Object.keys(manifest)) {
      if (!files.includes(file)) delete manifest[file]
    }
    fs.outputJsonSync(manifestPath, manifest, { spaces: 2 })

    console.log(`🎉 Іконки: сконвертовано ${converted}, без змін ${skipped}`)
  } catch (error) {
    console.error('❌ Помилка:', error.message)
    process.exit(1)
  }
}

convertIcons()
