<template>
  <div v-if="isLoading" id="loading-screen" class="fixed inset-0 bg-blue-900 flex items-center justify-center z-50">
    <img :src="logoSrc" alt="Loading" class="h-20 w-auto animate-pulse">
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';

const isLoading = ref(true);
const logoSrc = ref('/Home/images/mcst-logo.png');

onMounted(() => {
  console.log('Component mounted');
  setTimeout(async () => {
    isLoading.value = false;
    await nextTick();
    console.log('Loading screen hidden');
  }, 1000);
});
</script>