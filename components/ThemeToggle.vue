<script setup>
import { ref, watchEffect, onMounted } from "vue";

// Declare isDarkMode and ensure it gets the correct value only on the client side
const isDarkMode = ref(false);

// On mounted, check the user's saved theme or system preference
onMounted(() => {
  if (process.client) {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      isDarkMode.value = savedTheme === "dark";
    } else {
      isDarkMode.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    // Apply the theme on page load
    document.documentElement.classList.toggle("dark", isDarkMode.value);
  }
});

// Function to toggle theme
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  if (process.client) {
    localStorage.setItem("theme", isDarkMode.value ? "dark" : "light");
  }
  if (process.client) {
    document.documentElement.classList.toggle("dark", isDarkMode.value);
  }
};

// Watch for theme changes and apply immediately, ensuring DOM manipulation is done on the client side
watchEffect(() => {
  if (process.client) {
    document.documentElement.classList.toggle("dark", isDarkMode.value);
  }
});
</script>

<template>
  <div class="fixed bottom-4 right-4 z-50">
    <button 
      @click="toggleTheme"
      class="bg-gray-800 text-white px-4 py-2 rounded-full shadow hover:bg-gray-700">
      <span>{{ isDarkMode ? '🌙' : '☀️' }}</span>
    </button>
  </div>
</template>