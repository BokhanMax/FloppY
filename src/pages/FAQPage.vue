<template>
       <div class="max-w-4xl mx-auto">
            <h1 class="text-3xl font-bold text-center mb-8 text-green-dark">Frequently Asked Questions</h1>
            
            <!-- FAQ Accordion -->
            <div class="space-y-4">
                
                <!-- FAQ Item 1 -->
                <div class="bg-green-50 rounded-lg shadow-md overflow-hidden">
                    <button class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-green-100 transition-colors focus:outline-none focus:bg-green-100" onclick="toggleAccordion('faq1')">
                        <h3 class="text-lg font-semibold text-green-dark">How do I know which version (x32 or x64) to download?</h3>
                        <svg id="icon-faq1" class="w-5 h-5 text-green-600 transform transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
                        </svg>
                    </button>
                    <div id="faq1" class="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                        <div class="px-6 pb-4">
                            <p class="text-gray-700 leading-relaxed">
                                The version you need depends on your operating system architecture. To check your system type on Windows, right-click "This PC" or "My Computer" and select "Properties". Look for "System type" - if it shows "64-bit operating system", download the x64 version for better performance and compatibility. If it shows "32-bit operating system", download the x32 version. Most modern computers (manufactured after 2010) support 64-bit, and we recommend using x64 versions when possible as they can utilize more RAM and offer better performance.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- FAQ Item 2 -->
                <div class="bg-green-50 rounded-lg shadow-md overflow-hidden">
                    <button class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-green-100 transition-colors focus:outline-none focus:bg-green-100" onclick="toggleAccordion('faq2')">
                        <h3 class="text-lg font-semibold text-green-dark">Are these software programs free to use, and do they require registration?</h3>
                        <svg id="icon-faq2" class="w-5 h-5 text-green-600 transform transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
                        </svg>
                    </button>
                    <div id="faq2" class="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                        <div class="px-6 pb-4">
                            <p class="text-gray-700 leading-relaxed">
                                Our software catalog includes both free and premium applications. Each program's pricing model is clearly indicated on its download page. Free software can be downloaded and used immediately without registration. Premium software typically offers free trials (usually 14-30 days) before requiring a license purchase. We never require personal registration just to download trial versions. For paid software, you'll only need to provide information during the purchase process. All our software is guaranteed to be malware-free and regularly updated with security patches and new features.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    <component :is=script>
        function toggleAccordion(id) {
            const content = document.getElementById(id);
            const icon = document.getElementById(`icon-${id}`);

            if (content.style.maxHeight && content.style.maxHeight !== '0px') {
                // Close accordion
                content.style.maxHeight = '0px';
                icon.style.transform = 'rotate(0deg)';
            } else {
                // Close all other accordions first
                document.querySelectorAll('.accordion-content').forEach(item => {
                    if (item.id !== id) {
                        item.style.maxHeight = '0px';
                        const otherIcon = document.getElementById(`icon-${item.id}`);
                        if (otherIcon) {
                            otherIcon.style.transform = 'rotate(0deg)';
                        }
                    }
                });

                // Open this accordion
                content.style.maxHeight = content.scrollHeight + 'px';
                icon.style.transform = 'rotate(180deg)';
            }
        }
    </component>
</template>