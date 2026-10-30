<template>
  <div class="mx-auto max-w-3xl pt-6 sm:pt-10">
    <h1 class="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Контакти</h1>
    <p class="mb-8 text-lg leading-relaxed text-muted">
      Якщо ви маєте питання щодо розміщення програм та роботи сайту FloppY - виберіть зручний спосіб
      зв'язку та напишіть.
    </p>

    <div class="mb-10 grid gap-4 md:grid-cols-2">
      <!-- Telegram -->
      <section class="card flex flex-col items-start gap-4 p-6">
        <img
          src="/icons/TelegramDesktopIcon-96w.avif"
          alt=""
          width="56"
          height="56"
          loading="lazy"
          class="h-14 w-14 rounded-2xl bg-surface-2 object-contain p-1.5"
        />
        <div>
          <h2 class="text-xl font-semibold">Telegram</h2>
          <p class="mt-1 text-muted">Відповідаю впродовж години</p>
        </div>
        <a
          href="https://t.me/maxmidq"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary"
        >
          Написати в Telegram
        </a>
      </section>

      <!-- Email -->
      <section class="card flex flex-col items-start gap-4 p-6">
        <img
          src="/icons/ThunderbirdIcon-96w.avif"
          alt=""
          width="56"
          height="56"
          loading="lazy"
          class="h-14 w-14 rounded-2xl bg-surface-2 object-contain p-1.5"
        />
        <div>
          <h2 class="text-xl font-semibold">Email</h2>
          <p class="mt-1 text-muted">Відповідаю впродовж 4-6 годин</p>
        </div>
        <a href="mailto:floppyppua@ukr.net" class="btn btn-secondary">Написати на Email</a>
      </section>
    </div>

    <!-- Застереження -->
    <section class="card prose-content p-6 text-[15px] sm:p-8">
      <h2>Застереження</h2>
      <p>
        <strong>Завантаження:</strong> Усе програмне забезпечення, доступне через каталог FloppY,
        надається «як є» без будь-яких гарантій. Хоча ми прагнемо забезпечити безпеку та
        функціональність усіх програм, рекомендуємо перевірити завантажені файли за допомогою
        антивірусного програмного забезпечення перед встановленням.
      </p>
      <p>
        <strong>Програмне забезпечення сторонніх розробників:</strong> Ми не несемо відповідальності
        за функціональність, безпеку чи підтримку стороннього програмного забезпечення. Будь ласка,
        звертайтеся до оригінальних розробників щодо конкретних проблем із програмним забезпеченням.
      </p>
      <p>
        <strong>Сумісність систем:</strong> Сумісність програмного забезпечення може відрізнятися
        залежно від версії вашої операційної системи та конфігурації обладнання. Завжди
        <RouterLink to="/faq">перевіряйте системні вимоги</RouterLink> та правила сайту перед
        завантаженням.
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
    </section>
  </div>
</template>
