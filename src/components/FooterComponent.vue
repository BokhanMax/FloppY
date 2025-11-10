<template>
  <!-- Footer -->
  <footer class="bg-green-50 mt-12">
    <div class="container mx-auto px-4 py-8">
      <div class="text-center">
        <p class="text-gray-600 mb-4">
          © 2025 <b><a href="/">Floppy</a></b> - скачати безкоштовний софт. Український каталог
          безкоштовних програм.<br />
          Всі права на програми належать їхнім розробникам.
        </p>
        <RouterLink
          to="/contact"
          class="text-green-600 hover:text-green-700 transition-colors mr-16"
        >
          Зв'язатись з адміном
        </RouterLink>
        <RouterLink to="/faq" class="text-green-600 hover:text-green-700 transition-colors">
          FAQ
        </RouterLink>
      </div>
    </div>
  </footer>
</template>
