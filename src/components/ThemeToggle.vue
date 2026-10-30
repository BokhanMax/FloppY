<script setup>
// Початкову тему ставить скрипт в index.html; тут — лише ручне перемикання із запам'ятовуванням.
// Іконки перемикаються через dark:, тому HTML однаковий при SSG і в браузері.
function toggle() {
  const dark = document.documentElement.classList.toggle('dark')
  try {
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  } catch {
    // localStorage недоступний (приватний режим) — тема діє до перезавантаження
  }
}
</script>

<template>
  <button
    type="button"
    class="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-line bg-surface text-fg transition-colors hover:bg-surface-2"
    aria-label="Перемкнути світлу або темну тему"
    title="Світла / темна тема"
    @click="toggle"
  >
    <!-- Сонце — у темній темі (перемкнути на світлу) -->
    <svg
      class="hidden h-5 w-5 dark:block"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path
        d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
      />
    </svg>
    <!-- Місяць — у світлій темі -->
    <svg
      class="h-5 w-5 dark:hidden"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  </button>
</template>
