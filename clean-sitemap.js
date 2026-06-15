import fs from 'fs';
import path from 'path';

const sitemapPath = path.join(process.cwd(), 'dist', 'sitemap.xml');

if (fs.existsSync(sitemapPath)) {
  let content = fs.readFileSync(sitemapPath, 'utf8');
  // Вирізаємо мілісекунди (наприклад, .916Z перетворюємо на Z)
  content = content.replace(/\.\d{3}Z/g, 'Z');
  fs.writeFileSync(sitemapPath, content, 'utf8');
  console.log('✅ Мілісекунди успішно видалено з sitemap.xml!');
} else {
  console.log('❌ Файл sitemap.xml не знайдено в папці dist.');
}
