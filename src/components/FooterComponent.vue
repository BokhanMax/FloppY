<template>
    <!-- Footer -->
    <footer class="bg-green-50 mt-12">
        <div class="container mx-auto px-4 py-8">
            <div class="text-center">
                <p class="text-gray-600 mb-4">
                    © 2025 Floppy - скачати безкоштовний софт.
                    Всі права на програми належать їхнім розробникам.
                </p>
                <RouterLink to="/contact" class="text-green-600 hover:text-green-700 transition-colors mr-16">
                    Зв'язатись з адміном
                </RouterLink>
                <RouterLink to="/faq" class="text-green-600 hover:text-green-700 transition-colors">
                    FAQ
                </RouterLink>
            </div>
        </div>
    </footer>

    <component :is="script">
        // Add smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
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
</template>