<template>
  <!-- Header -->
  <header class="bg-white/60 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-10 shadow-sm">
    <div class="container mx-auto px-4 py-3">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <!-- Лого -->
        <a class="flex items-center group" href="/">
          <div class="text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 transform group-hover:scale-110 transition-transform duration-200">
            <!--<img src="/favicon.svg" alt="FloppY" width="48" height="48">-->
            <svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
              <g id="Floppy-disk">
                <path d="M35.2673988,6.0411h-7.9999981v10h7.9999981V6.0411z M33.3697014,14.1434002h-4.2046013V7.9387999h4.2046013V14.1434002z"
                  />
                <path d="M41,47.0410995H21c-0.5527992,0-1,0.4472008-1,1c0,0.5527,0.4472008,1,1,1h20c0.5527,0,1-0.4473,1-1
                  C42,47.4883003,41.5527,47.0410995,41,47.0410995z"/>
                <path d="M41,39.0410995H21c-0.5527992,0-1,0.4472008-1,1c0,0.5527,0.4472008,1,1,1h20c0.5527,0,1-0.4473,1-1
                  C42,39.4883003,41.5527,39.0410995,41,39.0410995z"/>
                <path d="M12,56.0410995h38v-26H12V56.0410995z M14,32.0410995h34v22H14V32.0410995z"/>
                <path d="M49.3811989,0.0411L49.3610992,0H7C4.7908001,0,3,1.7909,3,4v56c0,2.2092018,1.7908001,4,4,4h50
                  c2.2090988,0,4-1.7907982,4-4V11.6962996L49.3811989,0.0411z M39.9604988,2.0804999v17.9211006H14.0394001V2.0804999H39.9604988z
                  M59,60c0,1.1027985-0.8972015,2-2,2H7c-1.1027999,0-2-0.8972015-2-2V4c0-1.1027999,0.8972001-2,2-2h5v20.0410995h30V2h6.5099983
                  L59,12.5228996V60z"/>
              </g>
            </svg>
          </div>
          <h1 class="xs:text-base 2xl:text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
            Скачати безкоштовний софт
          </h1>
        </a>

        <!-- Меню -->
        <nav class="flex flex-wrap justify-center md:justify-end gap-2">
          <RouterLink to="/internet" 
            class="nav-link inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-blue-50 transition-all duration-200 border border-transparent hover:border-blue-100"
            active-class="bg-[#0071e3] text-white border-[#0071e3] hover:bg-[#0077ed] hover:border-[#0077ed]">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            Інтернет
          </RouterLink>
          <RouterLink to="/media" 
            class="nav-link inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-blue-50 transition-all duration-200 border border-transparent hover:border-blue-100"
            active-class="bg-[#0071e3] text-white border-[#0071e3] hover:bg-[#0077ed] hover:border-[#0077ed]">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Медіа
          </RouterLink>
          <RouterLink to="/files" 
            class="nav-link inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-blue-50 transition-all duration-200 border border-transparent hover:border-blue-100"
            active-class="bg-[#0071e3] text-white border-[#0071e3] hover:bg-[#0077ed] hover:border-[#0077ed]">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            Файли
          </RouterLink>
          <RouterLink to="/system" 
            class="nav-link inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-blue-50 transition-all duration-200 border border-transparent hover:border-blue-100"
            active-class="bg-[#0071e3] text-white border-[#0071e3] hover:bg-[#0077ed] hover:border-[#0077ed]">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Система
          </RouterLink>
          <RouterLink to="/drivers" 
            class="nav-link inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-blue-50 transition-all duration-200 border border-transparent hover:border-blue-100"
            active-class="bg-[#0071e3] text-white border-[#0071e3] hover:bg-[#0077ed] hover:border-[#0077ed]">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
            Драйвери
          </RouterLink>
          <RouterLink to="/development" 
            class="nav-link inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-blue-50 transition-all duration-200 border border-transparent hover:border-blue-100"
            active-class="bg-[#0071e3] text-white border-[#0071e3] hover:bg-[#0077ed] hover:border-[#0077ed]">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Розробка
          </RouterLink>
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
