import sharp from 'sharp'
import fs from 'fs-extra'
import path from 'path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const sourceDir = path.join(__dirname, '../public/icons/source')
const outputDir = path.join(__dirname, '../docs/icons')
const sizes = [96, 72]

async function convertIcons() {
  try {
    // Ensure source directory exists
    if (!fs.existsSync(sourceDir)) {
      console.log(`❌ Папка ${sourceDir} не найдена`)
      return
    }

    // Get all PNG files from source directory
    const files = fs.readdirSync(sourceDir).filter((file) => file.endsWith('.png'))

    if (files.length === 0) {
      console.log('⚠️  В директорії source не знайдено PNG файлів')
      return
    }

    console.log(`📦 Конвертуємо ${files.length} зображень...`)

    let totalConverted = 0

    for (const file of files) {
      const inputPath = path.join(sourceDir, file)
      const baseName = path.parse(file).name

      // Convert to original size AVIF
      const originalOutputPath = path.join(outputDir, `${baseName}.avif`)
      await sharp(inputPath).avif({ quality: 80 }).toFile(originalOutputPath)

      totalConverted++

      // Convert to different sizes
      for (const size of sizes) {
        const sizedOutputPath = path.join(outputDir, `${baseName}-${size}w.avif`)
        await sharp(inputPath)
          .resize(size, size, { fit: 'cover' })
          .avif({ quality: 80 })
          .toFile(sizedOutputPath)

        totalConverted++
      }

      console.log(`✅ Зроблено: ${baseName}`)
    }

    console.log(`\n🎉 Конвертовано ${totalConverted} файлів`)
  } catch (error) {
    console.error('❌ Помилка:', error.message)
    process.exit(1)
  }
}

convertIcons()
