<script setup>
import { useHead } from '#imports';

useHead({
  bodyAttrs: {
    class: 'font-sans bg-gray-50 text-gray-800 dark:bg-zinc-900 dark:text-slate-200',
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
