<script setup>
import { ref, onMounted, watch } from "vue";

const isDarkMode = ref(false);

const applyTheme = () => {
  if (isDarkMode.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

onMounted(() => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    isDarkMode.value = savedTheme === "dark";
  } else {
    isDarkMode.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  applyTheme(); // Apply the detected theme
});

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  applyTheme();
};

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