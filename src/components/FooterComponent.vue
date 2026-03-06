<template>
  <!-- Footer -->
  <footer class="bg-gray-50 border-t border-gray-200 mt-12">
    <div class="container mx-auto px-4 py-8">
      <div class="text-center">
        <p class="text-gray-600 mb-4">
          © 2026 <b><a href="/">Floppy</a></b> - скачати безкоштовний софт. Український каталог
          безкоштовних програм.<br />
          Всі права на програми належать їхнім розробникам.
        </p>
        <RouterLink
          to="/contact"
          class="text-[#0071e3] hover:text-[#005bb5] transition-colors mr-16"
        >
          Зв'язатись з адміном
        </RouterLink>
        <RouterLink to="/faq" class="text-[#0071e3] hover:text-[#005bb5] transition-colors">
          FAQ
        </RouterLink>
      </div>
    </div>
  </footer>
</template>
