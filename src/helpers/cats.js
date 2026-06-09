/**
 * Централізований список категорій.
 * Поля:
 *   cat       — значення поля category у Firestore
 *   slug      — сегмент URL (без /)
 *   label     — назва у UI (Manage, ProgramPage)
 *   title     — заголовок сторінки категорії (Category.vue prop)
 *   metaTitle — вміст тегу <title>
 *
 * Щоб додати нову категорію — просто додай об'єкт сюди.
 */
export const CATEGORIES = [
  {
    cat: 'internet',
    slug: 'internet',
    label: 'Інтернет, месенджери, RDP',
    title: 'Програми для Інтернету',
    metaTitle: 'Інтернет, месенджери, RDP - Скачати безкоштовний софт | Floppy',
  },
  {
    cat: 'system',
    slug: 'system',
    label: 'Системні утиліти',
    title: 'Системні утиліти',
    metaTitle: 'Програми для системи - Скачати безкоштовний софт | Floppy',
  },
  {
    cat: 'drivers',
    slug: 'drivers',
    label: 'Драйвери',
    title: 'Драйвери',
    metaTitle: 'Драйвери - Скачати безкоштовний софт | Floppy',
  },
  {
    cat: 'media',
    slug: 'media',
    label: 'Програми для медіа',
    title: 'Програми для медіа',
    metaTitle: 'Програми для аудіо, відео - Скачати безкоштовний софт | Floppy',
  },
  {
    cat: 'files',
    slug: 'files',
    label: 'Робота з файлами',
    title: 'Робота з файлами',
    metaTitle: 'Робота з файлами - Скачати безкоштовний софт | Floppy',
  },
  {
    cat: 'dev',
    slug: 'development',
    label: 'Розробка, програмування',
    title: 'Розробка, програмування',
    metaTitle: 'Розробка, програмування - Скачати безкоштовний софт | Floppy',
  },
]
