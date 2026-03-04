<script setup>
import NavItem from './NavItem.vue';
import Logo from './Logo.vue';
</script>

<template>
  <!-- Header -->
  <header class="bg-white/60 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-10 shadow-sm">
    <div class="container mx-auto px-4 py-3">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <Logo :logotext="'Скачати безкоштовний софт'" />

        <!-- Menu -->
        <nav class="flex flex-wrap justify-center md:justify-end gap-2">
          <NavItem title="Інтернет" link="internet">
            <template #icon>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </template>
          </NavItem>
          <NavItem title="Медіа" link="media">
            <template #icon>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </template>
          </NavItem>
          <NavItem title="Файли" link="files">
            <template #icon>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </template>
          </NavItem>
          <NavItem title="Система" link="system">
            <template #icon>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </template>
          </NavItem>
          <NavItem title="Драйвери" link="drivers">
            <template #icon>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </template>
          </NavItem>
          <NavItem title="Розробка" link="development">
            <template #icon>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </template>
          </NavItem>
        </nav>

      </div>
    </div>
    <component :is="'script'">
      // Add smooth scrolling for navigation links

      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
      e.preventDefault(); const target = document.querySelector(this.getAttribute('href'));
      if (target) {
      target.scrollIntoView({
      behavior: 'smooth'
      });
      }
      });
      });
    </component>
  </header>
</template>

<style scoped>
/* Фикс для hover на активном пункте меню */
.nav-link:not(.router-link-active):hover {
  color: #0071e3;
}

.nav-link.router-link-active:hover {
  color: white;
}
</style>
