<script setup>
import { ref } from "vue";

const isMobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
  <header class="bg-blue-900 text-white py-2 dark:text-slate-300 dark:bg-blue-800 sticky top-0 z-50">
    <div class="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
      <div class="flex items-center space-x-4">
        <NuxtLink to="/">
          <img src="/images/mcst-logo.png" alt="MCST Logo" class="max-h-20 w-auto sm:max-h-16" />
        </NuxtLink>
        <h1 class="text-lg sm:text-xl font-bold dark:text-slate-300">Mandaluyong College of Science and Technology</h1>
      </div>

      <nav class="hidden md:flex space-x-4">
        <NuxtLink to="/About" class="hover:text-yellow-400">About Us</NuxtLink>
        <NuxtLink to="/Programs" class="hover:text-yellow-400">Programs Offered</NuxtLink>
        <NuxtLink to="/Admission" class="hover:text-yellow-400">Admissions Info</NuxtLink>
        <NuxtLink to="/Apply" class="hover:text-yellow-400">Apply</NuxtLink>
      </nav>

      <button 
        class="md:hidden text-white dark:text-slate-300" 
        @click="toggleMobileMenu" 
        aria-label="Toggle Navigation">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <div v-if="isMobileMenuOpen" class="md:hidden">
      <nav class="bg-blue-800 p-4 space-y-2">
        <NuxtLink to="/About" class="block text-white hover:text-yellow-400 dark:text-slate-300">About Us</NuxtLink>
        <NuxtLink to="/Programs" class="block text-white hover:text-yellow-400 dark:text-slate-300">Programs Offered</NuxtLink>
        <NuxtLink to="/Admission" class="block text-white hover:text-yellow-400 dark:text-slate-300">Admissions Info</NuxtLink>
        <NuxtLink to="/Apply" class="block text-white hover:text-yellow-400 dark:text-slate-300">Apply</NuxtLink>
      </nav>
    </div>
  </header>
</template>