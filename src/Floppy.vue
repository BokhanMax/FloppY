<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SiteHeader from './components/HeaderComponent.vue'
import SiteFooter from './components/FooterComponent.vue'
</script>

<template>
<teleport to="head">
	<component :is="'script'" type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "WebSite",
		"name": "Floppy",
		"alternateName": ["FL"],
		"url": "https://floppy.pp.ua/"
	}
	</component>
</teleport>
<body class="bg-white text-gray-800">
	<SiteHeader />
	<main class="container mx-auto px-4 py-8">
		<RouterView />
	</main>
	<SiteFooter />
	<div itemscope itemtype="https://schema.org/WebSite">
		<link itemprop="url" href="https://example.com" />
		<meta itemprop="name" content="Floppy" />
		<meta itemprop="alternateName" content="FL" />
	</div>
</body>
</template>
