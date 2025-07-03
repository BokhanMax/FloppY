<script setup>
//import { RouterLink, RouterView } from 'vue-router'
import SiteHeader from './components/HeaderComponent.vue'
import SiteFooter from './components/FooterComponent.vue'
</script>

<template>
  <SiteHeader />
  <main class="container mx-auto px-4 py-8">
    <router-view :key="$route.fullPath"></router-view>
  </main>
  <SiteFooter />

  <component v-bind:is="script">
    // Add smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => { anchor.addEventListener('click',
    function (e) { e.preventDefault(); const target =
    document.querySelector(this.getAttribute('href')); if (target) { target.scrollIntoView({
    behavior: 'smooth' }); } }); }); // Add hover effects to software cards
    document.querySelectorAll('.bg-green-50').forEach(card => { card.addEventListener('mouseenter',
    function() { this.style.transform = 'translateY(-2px)'; this.style.transition = 'transform 0.2s
    ease'; }); card.addEventListener('mouseleave', function() { this.style.transform =
    'translateY(0)'; }); });
  </component>
</template>
