<template>
  <!-- Header -->
  <header class="bg-green-50 shadow-md sticky top-0 z-10">
    <div class="container mx-auto px-4 py-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <!-- Лого -->
        <a class="flex items-center mb-4 md:mb-0" href="/">
          <div class="text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3">
            <img src="/favicon.svg" alt="FloppY" width="48" height="48">
          </div>
          <h1 class="xs:text-base 2xl:text-2xl font-bold text-green-dark">
            Скачати безкоштовний софт
          </h1>
        </a>

        <!-- Меню -->
        <nav class="flex flex-wrap justify-center md:justify-end gap-6">
          <RouterLink to="/internet" class="text-green-dark hover:text-green-500 transition-colors">Інтернет
          </RouterLink>
          <RouterLink to="/media" class="text-green-dark hover:text-green-500 transition-colors">Медіа</RouterLink>
          <RouterLink to="/files" class="text-green-dark hover:text-green-500 transition-colors">Файли</RouterLink>
          <RouterLink to="/system" class="text-green-dark hover:text-green-500 transition-colors">Система</RouterLink>
          <RouterLink to="/development" class="text-green-dark hover:text-green-500 transition-colors">Розробка
          </RouterLink>
          <!--<a href="/office" class="text-green-dark hover:text-green-500 transition-colors">Офісні</a>
                    <a href="/security" class="text-green-dark hover:text-green-500 transition-colors">Безпека</a>
                    <a href="/blog" class="text-green-dark hover:text-green-500 transition-colors">Блог</a> -->
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

      // Add hover effects to software cards

      document.querySelectorAll('.bg-green-50').forEach(card => {
      card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
      this.style.transition = 'transform 0.2s ease';
      });
      card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      });
      });
    </component>
  </header>
</template>
