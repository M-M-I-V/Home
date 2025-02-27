<template>
    <div v-if="isLoading" id="loading-screen" class="fixed inset-0 bg-blue-900 flex items-center justify-center z-50">
        <img src="/images/mcst-logo.png" alt="Loading" class="h-20 w-auto animate-pulse">
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000); // Hide after 1 second (adjust as needed)
});
</script>