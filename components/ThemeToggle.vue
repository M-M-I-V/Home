<script setup>
import { ref, onMounted, watch } from "vue";

// Reactive dark mode state
const isDarkMode = ref(false);

// Function to apply the theme
const applyTheme = () => {
  if (isDarkMode.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

// Check for saved theme or system preference on mount
onMounted(() => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    isDarkMode.value = savedTheme === "dark";
  } else {
    isDarkMode.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  applyTheme(); // Apply the detected theme
});

// Toggle theme function
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  applyTheme();
};

// Watch for theme changes and apply immediately
watch(isDarkMode, applyTheme);
</script>

<template>
  <div class="fixed bottom-4 right-4 z-50">
    <button 
      @click="toggleTheme"
      class="bg-gray-800 dark:bg-gray-200 text-white dark:text-black px-4 py-2 rounded-full shadow hover:bg-gray-700 dark:hover:bg-gray-300">
      <span>{{ isDarkMode ? '🌙' : '☀️' }}</span>
    </button>
  </div>
</template>