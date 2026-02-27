<script setup>
    const props = defineProps({
    content: {
        type: String,
        default: `<p>На цій сторінці ви знайдете найкращі <strong>безкоштовні програми для Windows</strong>, які допоможуть вам працювати продуктивніше, створювати контент та розважатися.</p>
                    <p>Всі програми в нашій базі:</p>
                    <ul>
                    <li><strong>100% безкоштовні</strong> або з випробувальним періодом</li>
                    <li><strong>Безпечні</strong> — перевірені й рекомендовані спільнотою</li>
                    <li><strong>Без реклами інсталяторів</strong> — чисті та надійні посилання для завантаження</li>
                    <li><strong>Постійно оновлені</strong> — свіжі версії щодня</li>
                    </ul>
                    <p>Від графічних редакторів до аудіоредакторів, від утиліт для очищення системи до медіаплеєрів — у нас є все для ваших потреб! Обирайте категорію, щоб знайти та скачати програми для Windows.</p>`
    }
    })
</script>

<template>
    <div class="bg-green-50 rounded-lg shadow-md p-6 lg:p-4 xs:p-4 hover:shadow-lg transition-shadow mb-8 mt-8">
        <div class="prose prose-green max-w-none text-green-dark" v-html="content"></div>
    </div>
</template>

<style scoped>

:deep(p) {
    margin-bottom: 1rem;
    line-height: 1.6;
    color: #1a5c3a;
    font-size: 1.125rem;
}

:deep(p:last-child) {
    margin-bottom: 0;
}

:deep(strong) {
    font-weight: 600;
    color: #0d3922;
}

:deep(em) {
    font-style: italic;
    color: #3a8c5f;
}

:deep(ul) {
    list-style: disc;
    margin-left: 1.5rem;
    margin-bottom: 1rem;
}

:deep(ul li) {
    margin-bottom: 0.25rem;
    line-height: 1.6;
    color: #1a5c3a;
    font-size: 1.125rem;
}

:deep(a) {
    color: #16a34a;
    text-decoration: none;
    border-bottom: 1px solid #16a34a;
    transition: color 0.2s ease;
}

:deep(a:hover) {
    color: #15803d;
}

:deep(h1),
:deep(h2),
:deep(h3),
:deep(h4),
:deep(h5),
:deep(h6) {
    color: #0d3922;
    font-weight: 600;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
}

:deep(h1) {
    font-size: 1.875rem;
}

:deep(h2) {
    font-size: 1.5rem;
}

:deep(h3) {
    font-size: 1.25rem;
}

@media (max-width: 640px) {
    :deep(p) {
        font-size: 0.875rem;
    }

    :deep(ul li) {
        font-size: 0.875rem;
    }

    :deep(h1) {
        font-size: 1.5rem;
    }

    :deep(h2) {
        font-size: 1.25rem;
    }

    :deep(h3) {
        font-size: 1.125rem;
    }
}
</style>
