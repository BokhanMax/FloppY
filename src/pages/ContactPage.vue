<script setup>
import VLazyImage from 'v-lazy-image'
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold text-center mb-8 text-green-dark">Контакти</h1>

    <div class="text-center mb-8">
      <p class="text-gray-700 text-lg leading-relaxed">
        Якщо ви маєте питання щодо розміщення програм та роботи сайту FloppY - виберіть зручний
        спосіб зв'язку та напишіть.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-6 mb-12">
      <!-- Telegram -->
      <div
        class="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors text-center"
      >
        <div
          class="text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
        >
          <picture>
            <source
              media="(width < 800px)"
              :srcset="'icons/TelegramDesktopIcon-72w.avif'"
              :width="72"
              :height="72"
            />
            <source
              media="(width >= 800px)"
              :srcset="'icons/TelegramDesktopIcon-96w.avif'"
              :width="96"
              :height="96"
            />
            <v-lazy-image
              :src="'icons/source/TelegramDesktopIcon.png'"
              :width="48"
              :height="48"
            />
          </picture>
        </div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">Telegram</h3>
        <p class="text-gray-600 mb-4">Відповідаю впродовж години</p>
        <a
          href="https://t.me/maxmidq"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block bg-linear-to-b from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 text-gray-800 border border-gray-300 px-6 py-3 rounded-lg transition-all font-semibold shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.8)] hover:shadow-[0_2px_4px_-1px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.8)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
        >
          Написати в Telegram
        </a>
      </div>

      <!-- Email -->
      <div
        class="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors text-center"
      >
        <div
          class="text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
        >
          <picture>
            <source
              media="(width < 800px)"
              :srcset="'icons/ThunderbirdIcon-72w.avif'"
              :width="72"
              :height="72"
            />
            <source
              media="(width >= 800px)"
              :srcset="'icons/ThunderbirdIcon-96w.avif'"
              :width="96"
              :height="96"
            />
            <v-lazy-image
              :src="'icons/source/ThunderbirdIcon.png'"
              :width="48"
              :height="48"
            />
          </picture>
        </div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">Email</h3>
        <p class="text-gray-600 mb-4">Відповідаю впродовж 4-6 годин</p>
        <a
          href="mailto:floppyppua@ukr.net"
          class="inline-block bg-linear-to-b from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 text-gray-800 border border-gray-300 px-6 py-3 rounded-lg transition-all font-semibold shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.8)] hover:shadow-[0_2px_4px_-1px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.8)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
        >
          Написати на Email
        </a>
      </div>
    </div>

    <!--         <div class="bg-green-100 border border-green-200 rounded-lg p-6 mb-8">
            <h3 class="text-lg font-semibold text-green-dark mb-3">Коли чекати відповідь?</h3>
            <div class="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                    <strong class="text-green-dark">Telegram:</strong>
                    <span class="text-gray-700">зазвичай впродовж 1-2 годин</span>
                </div>
                <div>
                    <strong class="text-green-dark">Email:</strong>
                    <span class="text-gray-700">Впродовж 24 годин (weekdays)</span>
                </div>
            </div>
        </div> -->

    <!-- Застереження -->
    <div class="bg-gray-50 border border-gray-200 rounded-lg p-6 zasteregennya">
      <h3 class="text-xl font-semibold text-gray-800 mb-3">Застереження</h3>
      <div class="text-sm text-gray-600 leading-relaxed space-y-3">
        <p>
          <strong>Завантаження:</strong> Усе програмне забезпечення, доступне через каталог Floppy,
          надається «як є» без будь-яких гарантій. Хоча ми прагнемо забезпечити безпеку та
          функціональність усіх програм, рекомендуємо перевірити завантажені файли за допомогою
          антивірусного програмного забезпечення перед встановленням.
        </p>
        <p>
          <strong>Програмне забезпечення сторонніх розробників:</strong> Ми не несемо
          відповідальності за функціональність, безпеку чи підтримку стороннього програмного
          забезпечення. Будь ласка, звертайтеся до оригінальних розробників щодо конкретних проблем
          із програмним забезпеченням.
        </p>
        <p>
          <strong>Сумісність систем:</strong> Сумісність програмного забезпечення може відрізнятися
          залежно від версії вашої операційної системи та конфігурації обладнання. Завжди
          <a href="/faq">перевіряйте системні вимоги</a> перед завантаженням.
        </p>
        <p>
          <strong>Обмеження підтримки:</strong> Наша служба підтримки надає загальну допомогу із
          завантаженнями та навігацією по каталогу. Щодо конкретних функцій програмного забезпечення
          або технічних проблем з окремими програмами, зверніться до документації до програмного
          забезпечення або зверніться до розробника.
        </p>
        <p>
          <strong>Конфіденційність даних:</strong> Ми поважаємо вашу конфіденційність і не передаємо
          вашу контактну інформацію третім особам.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.zasteregennya p {
  font-size: 1.125rem;
  margin-bottom: 1.3rem;
  text-align: justify;
}
h3 {
  border-bottom: 1px solid oklch(27.8% 0.033 256.848);
  padding-bottom: 22px;
}
</style>
