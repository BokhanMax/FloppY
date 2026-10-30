<template>
  <div class="mx-auto max-w-3xl pt-6 sm:pt-10">
    <h1 class="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">Часті питання</h1>

    <div class="flex flex-col gap-3">
      <details class="card group">
        <summary class="faq-summary">
          <h2 class="text-lg font-semibold">Як знати, яку версію (x32 or x64) мені завантажити?</h2>
          <svg class="faq-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </summary>
        <p class="faq-answer">
          Потрібна вам версія залежить від архітектури вашої операційної системи. Щоб перевірити тип
          вашої системи у Windows, клацніть правою кнопкою миші на «Цей ПК» або «Мій комп’ютер» і
          виберіть «Властивості». Знайдіть «Тип системи» – якщо відображається «64-розрядна
          операційна система», завантажте 64-розрядну версію для кращої продуктивності та
          сумісності. Якщо відображається «32-розрядна операційна система», завантажте 32-розрядну
          версію. Більшість сучасних комп’ютерів (виготовлених після 2010 року) підтримують
          64-розрядні версії, і ми рекомендуємо використовувати 64-розрядні версії, коли це можливо,
          оскільки вони можуть використовувати більше оперативної пам’яті та забезпечувати кращу
          продуктивність.
        </p>
      </details>

      <details class="card group">
        <summary class="faq-summary">
          <h2 class="text-lg font-semibold">Де знайти ключі або кряки для програм?</h2>
          <svg class="faq-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </summary>
        <p class="faq-answer">
          Та де завгодно. Але НЕ тут! Я не займаюся ламанням програм та не публікую кряки та ключі.
          Я зібрав програми, які мають тип Freeware, а також умовно-безплатне програмне
          забезпечення, яким можна користуватись в тріальному режимі, або оплатити ліцензію.
          Поважаємо чужу працю!
        </p>
      </details>

      <details class="card group">
        <summary class="faq-summary">
          <h2 class="text-lg font-semibold">Скачав програму звідси, встановив - і все зависло!</h2>
          <svg class="faq-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </summary>
        <p class="faq-answer">
          По-перше, я не винен. По друге, всі програми належать їх розробникам. А також всі
          проблеми, які можуть виникнути при роботі програм. Мій сайт - це каталог якісного та
          корисного софту. Я НЕ розробляв ці програми, і я НЕ відповідаю за помилки у ваших
          комп'ютерах. Якщо є питання по роботі програми - звертайтесь до розробників.
        </p>
      </details>

      <details class="card group">
        <summary class="faq-summary">
          <h2 class="text-lg font-semibold">Чому програма не запускається? У мене Windows 7.</h2>
          <svg class="faq-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </summary>
        <p class="faq-answer">
          Компанія Microsoft завершила випуск та підтримку ОС Windows 7 з січня 2020 року. Більшість
          виробників програмного забепечення також перестали підтримувати "сімку". Тому я не обіцяю
          правильну роботу свіжих версій програм на цій системі. Ви ще на WinXP спробуйте встановити
          :)
        </p>
      </details>
    </div>
  </div>
</template>

<style scoped>
.faq-summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.5rem;
  cursor: pointer;
  list-style: none;
}
.faq-summary::-webkit-details-marker {
  display: none;
}
.faq-icon {
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
  color: var(--accent-fg);
  transition: transform 0.2s;
}
details[open] .faq-icon {
  transform: rotate(180deg);
}
.faq-answer {
  padding: 0 1.5rem 1.25rem;
  color: var(--muted);
  line-height: 1.7;
}
</style>
