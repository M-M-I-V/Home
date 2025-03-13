<template>
  <div v-if="isLoading" class="fixed inset-0 bg-blue-900 flex items-center justify-center z-50">
    <img src="/images/mcst-logo.png" alt="Loading" class="h-20 w-auto animate-pulse">
  </div>
</template>

<script setup>

defineProps({
  isLoading: Boolean
});
</script>