<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Homepage from './pages/HomePage.vue'
import ProgramCard from './components/ProgramCard.vue'
import SiteHeader from './components/HeaderComponent.vue'
import SiteFooter from './components/FooterComponent.vue'
</script>

<template>
<teleport to="head">
	<component :is="'script'" type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "WebSite",
		"url": "https://floppy.pp.ua/",
		"name":"Floppy",
		"alternateName":"Floppy"
	}
	</component>
</teleport>
<body class="bg-white text-gray-800">
	<SiteHeader />
	<main class="container mx-auto px-4 py-8">
		<RouterView />
	</main>
	<SiteFooter />
</body>
</template>
