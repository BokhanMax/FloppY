# Floppy.pp.ua — Каталог програм для Windows

Сайт-каталог безкоштовного та корисного програмного забезпечення для Windows. Зручний пошук за категоріями, актуальні версії, пряме посилання на завантаження.

## Категорії

- Інтернет
- Медіа
- Драйвери
- Розробка
- Файли
- Система

## Технологічний стек

| Технологія | Призначення |
| --- | --- |
| [Vue 3](https://vuejs.org/) | UI-фреймворк |
| [Vite](https://vitejs.dev/) | Збірник та dev-сервер |
| [Vue Router](https://router.vuejs.org/) | Маршрутизація |
| [VueFire](https://vuefire.vuejs.org/) | Інтеграція з Firebase |
| [Firebase Firestore](https://firebase.google.com/) | База даних (зберігання програм) |
| [TailwindCSS](https://tailwindcss.com/) | Стилізація |
| [Sharp](https://sharp.pixelplumbing.com/) | Конвертація іконок у AVIF |
| [v-lazy-image](https://github.com/alexjoverm/v-lazy-image) | Ліниве завантаження зображень |

## Структура проєкту

``` code
src/
├── pages/        # Сторінки (категорії, деталі програми, адмін тощо)
├── components/   # Перевикористовувані компоненти
├── router/       # Конфігурація маршрутів
└── helpers/      # Утиліти (Firebase, конвертація іконок)
public/
├── icons/        # Іконки програм у форматі AVIF
└── sitemap.xml   # Автогенерований sitemap
```

## Дані

Програми зберігаються у колекції `programs` у Firebase Firestore. Кожен запис містить назву, опис, категорію, версію, посилання на завантаження та іконку.
