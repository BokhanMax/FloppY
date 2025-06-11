<template>
    <!-- Header -->
    <header class="bg-green-50 shadow-md">
        <div class="container mx-auto px-4 py-4">
            <div class="flex flex-col md:flex-row justify-between items-center">

                <!-- Лого -->
                <a class="flex items-center mb-4 md:mb-0" href="/">
                    <div class="text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                        <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <!-- Outer disc body -->
                            <rect x="6" y="6" width="36" height="36" rx="2" ry="2" fill="#90EE90" stroke="#7FDD7F" stroke-width="1"/>
                            <!-- Metal slider -->
                            <rect x="12" y="12" width="24" height="8" rx="1" ry="1" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="0.5"/>
                            <!-- Label area -->
                            <rect x="10" y="25" width="28" height="14" rx="1" ry="1" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="0.5"/>
                            <!-- Center hole -->
                            <circle cx="24" cy="32" r="2.5" fill="#7FDD7F"/>
                            <!-- Write protection notch -->
                            <rect x="38" y="18" width="2" height="6" fill="#7FDD7F"/>
                            <!-- Corner cut -->
                            <polygon points="38,6 42,6 42,10 38,10" fill="#7FDD7F"/>
                            <!-- Label lines -->
                            <line x1="14" y1="28" x2="34" y2="28" stroke="#C0C0C0" stroke-width="0.5"/>
                            <line x1="14" y1="31" x2="30" y2="31" stroke="#C0C0C0" stroke-width="0.5"/>
                            <line x1="14" y1="34" x2="32" y2="34" stroke="#C0C0C0" stroke-width="0.5"/>
                        </svg>
                    </div>
                    <h1 class="xs:text-base 2xl:text-2xl font-bold text-green-dark">Floppy - безкоштовний софт</h1>
                </a>

                <!-- Меню -->
                <nav class="flex flex-wrap justify-center md:justify-end gap-6">
                    <RouterLink to="/internet" class="text-green-dark hover:text-green-500 transition-colors">Інтернет</RouterLink>
                    <!--<a href="/utilities" class="text-green-dark hover:text-green-500 transition-colors">Система</a>
                    <a href="/media" class="text-green-dark hover:text-green-500 transition-colors">Медіа</a>
                    <a href="/development" class="text-green-dark hover:text-green-500 transition-colors">Розробка</a>
                    <a href="/security" class="text-green-dark hover:text-green-500 transition-colors">Захист</a>
                    <a href="/blog" class="text-green-dark hover:text-green-500 transition-colors">Блог</a> -->
                </nav>
            </div>
        </div>
    </header>
</template>