<script setup>
// Версія сайту з package.json; показуємо major.minor (2.0.0 → 2.0)
const appVersion = __APP_VERSION__.split('.').slice(0, 2).join('.')
const year = new Date().getFullYear()
</script>

<template>
  <footer class="mt-16 border-t border-line bg-header">
    <div
      class="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 py-7 text-sm text-muted sm:px-6"
    >
      <div class="flex flex-col gap-1">
        <span>© {{ year }} FloppY — український каталог безкоштовних програм</span>
        <span class="text-[13px] text-faint">
          Усі права на програми належать їхнім розробникам · Версія {{ appVersion }}
        </span>
      </div>
      <nav aria-label="Сайт" class="flex gap-5">
        <RouterLink to="/blog" class="hover:text-fg">Блог</RouterLink>
        <RouterLink to="/faq" class="hover:text-fg">Часті питання</RouterLink>
        <RouterLink to="/contact" class="hover:text-fg">Контакти</RouterLink>
      </nav>
    </div>
  </footer>
</template>
