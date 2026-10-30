# FloppY — каталог програм для Windows

Сайт https://floppy.pp.ua. Vue 3 + Vite + **vite-ssg**: усі сторінки генеруються в статичний HTML під час збірки. Бази даних немає — програми й статті лежать файлами в репозиторії. Хостинг — Netlify, збірка запускається пушем у `main`.

Мова сайту, текстів і коментарів у коді — **українська**.

## Команди

- `npm run dev` — dev-сервер (без SSG, звичайний SPA)
- `npm run build` — повна збірка: конвертація іконок → `vite-ssg build` → `clean-sitemap.js`
- `npm run buildhtml` — збірка без конвертації іконок (швидше, для перевірки)
- `npm run buildimages` — тільки іконки (`-- --force` — перегенерувати всі)
- `npm run format` — prettier для `src/` (на Netlify не запускається — форматуй перед комітом)

Автотестів немає. Перевірка — `npm run buildhtml` і аналіз згенерованого `dist/` (наявність контенту в HTML, `<head>`, `sitemap.xml`).

## Дані

### Програми — `data/programs/<slug>.json`
Один файл на програму, **ім'я файлу = адреса** `/program/<slug>`. Поля: `name`, `version`, `category`, `description`, `descriptionbig`, `website`, `link64`, `link32`, `linkcommon`, `linkupdate`, `textupdate`, `ispaid`, `createdAt` (ISO-рядок, дата останнього оновлення; від неї залежить порядок на головній).

- Читаються через `src/helpers/programs.js` (`import.meta.glob`, вбудовуються в збірку).
- Перейменування файлу = зміна URL → **обов'язково** додай `301` у `public/_redirects` і онови посилання в `blog/*.md`.
- Видалення програми → `301` на її категорію в `public/_redirects`, видалити іконки, прибрати згадки з текстів категорій.

### Категорії — `src/helpers/cats.js`
Єдине джерело: маршрути, меню, sitemap, meta description, тексти під списком (`text`), `schemaCategory` для JSON-LD. Поле `cat` — значення `category` у JSON програм; `slug` — URL (для `dev` це `/development`).
Нова категорія → об'єкт у `cats.js` **і** опція в `public/admin/config.yml`.
Тексти категорій (`text`) згадують конкретні програми — при додаванні/видаленні програми онови текст.

### Блог — `blog/DDMMYYYY.md`
Ім'я файлу = дата публікації = адреса `/blog/DDMMYYYY`. Frontmatter (повноцінний YAML, парситься пакетом `yaml`): `title`, `image` (`/img/blog/...`), `description`. Посилання на програми — `/program/<slug>`.

### Іконки
Ім'я виводиться з назви програми: `name` без пробілів + `Icon` (напр. `K-Lite Codec Pack` → `K-LiteCodecPackIcon`).
- Вихідник: `public/icons/source/<Name>Icon.(png|svg|webp|jpg)`
- Генеруються `src/helpers/SharpIconsConvert.js`: `<Name>Icon.avif`, `-96w.avif`, `-72w.avif` у `public/icons/`
- Конвертація інкрементальна: хеші вихідників у `data/icon-hashes.json` (комітити разом з avif)
- Зміна `name` програми = перейменування всіх файлів іконки

## Адмінка
Sveltia CMS на `/admin` (`public/admin/index.html` + `config.yml`). Вхід GitHub-токеном, кожне збереження — коміт у `main`. Тому перед роботою роби `git pull`: у віддаленій гілці можуть бути коміти з CMS. Набір полів у `config.yml` має збігатися зі схемою JSON програм.

## SEO

- `src/helpers/seo.js` → `useSeo()`: title, description, canonical, Open Graph, Twitter, robots, JSON-LD.
  - `Floppy.vue` викликає його з `route.meta` (`title`, `description`, `noindex`) — базові теги.
  - `ProgramPage.vue` і `BlogPost.vue` викликають `useSeo()` ще раз — перекривають теги та додають JSON-LD (`SoftwareApplication` / `BlogPosting` + `BreadcrumbList`).
  - Не задавай `document.title` напряму і не додавай мета-теги в `index.html`.
- `aggregateRating`/`review` для програм свідомо не додаємо (рейтингів немає, вигадувати не можна).
- `sitemap.xml` генерує `vite-plugin-sitemap` у `vite.config.js`. Плагін **сам додає всі HTML з `dist/`** — службові сторінки треба вносити в `exclude`. `lastmod` — дата програми / найсвіжішої програми в категорії / дата посту.
- 404: маршрут `/404` → `dist/404.html`, Netlify віддає його з кодом 404. Загального правила `/* /index.html 200` у `_redirects` **немає й не повинно бути** — усі сторінки згенеровані.

## Дизайн

- Токени кольорів — у `src/assets/style.css`: CSS-змінні для світлої (`:root`) і темної (`.dark`) теми, доступні як класи Tailwind: `bg-bg`, `bg-header`, `bg-surface`, `bg-surface-2`, `border-line`, `text-fg`, `text-muted`, `text-faint`, `bg-accent`, `text-on-accent`, `bg-accent-soft`, `text-accent-fg`, `bg-free`/`text-free-fg`, `bg-paid`/`text-paid-fg`. **Не використовуй фіксовані кольори** (`bg-white`, `text-gray-*`, hex) — вони ламають темну тему.
- Компонентні класи там само: `.card`, `.btn` + `.btn-primary` / `.btn-secondary`, `.prose-content` (HTML/Markdown: тексти категорій, статті блогу).
- Темна тема: клас `.dark` на `<html>`. Початкову тему ставить inline-скрипт у `index.html` (збережений вибір у `localStorage.theme` або системна), перемикач — `ThemeToggle.vue`. Елементи, що залежать від теми, перемикай через `dark:`, а не через JS-стан — інакше HTML при SSG і в браузері розійдеться.
- Шрифти: Onest (текст), JetBrains Mono (версії) — Google Fonts у `index.html`. Контейнер сторінок — `max-w-[1200px]`.
- Пошук на головній — миттєвий фільтр у `Category.vue` (назва + опис), без окремої сторінки.
- Макет дизайну: https://claude.ai/artifact/Bzs22XLEnhaLBHxoKCMmB9

## Netlify
- `public/_redirects` — 301 зі старих адрес (ID з Firestore, перейменування). Нові правила — над старими.
- `public/_headers` — кеш (`/assets/*` immutable, іконки й зображення — тиждень) і базові заголовки безпеки.
- Версія Node — `.nvmrc`. Залежності зафіксовані в `package-lock.json` (комітиться); оновлення — `npm update` + коміт lock-файлу.

## Підводні камені
- **Hydration:** HTML генерується на сервері збірки (UTC), потім гідратується в браузері. Дати форматуй з явними `'uk-UA'` і `timeZone: 'Europe/Kyiv'` (див. `formatProgramDate`), інакше текст на сервері й у браузері розійдеться. Не використовуй `window`/`document` поза `onMounted`.
- **Шляхи іконок** — завжди абсолютні, через `iconBase(name)` з `helpers/programs.js` (`/icons/<Name>Icon` + `-96w.avif`).
- `createdAt` при оновленні програми в CMS не змінюється автоматично — його ставлять вручну.
- Аналітика — лише GA4 через `vue-gtag` у `src/main.js` (GTM прибрано свідомо).
- Стиль коду: prettier (`semi: false`, `singleQuote`, `printWidth: 100`), Tailwind 4 з кастомним брейкпоінтом `xs` у `src/assets/style.css`.
