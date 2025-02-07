<template>
    <a :href="post.link" target="_blank" rel="noopener noreferrer"
      class="relative block bg-white rounded-lg shadow-md overflow-hidden dark:bg-zinc-800 hover:shadow-lg transition">
      <div class="aspect-w-16 aspect-h-8 bg-gray-200">
        <img :src="post.image" :alt="post.title"
          class="w-full h-full object-cover transition duration-200 dark:brightness-75 dark:contrast-125" loading="lazy">
      </div>
      <div class="p-4">
        <p class="text-xs font-medium text-gray-500 dark:text-slate-300">{{ post.category }}</p>
        <h3 class="text-sm font-semibold text-gray-900 dark:text-slate-200">{{ post.title }}</h3>
        <p class="text-xs text-gray-600 dark:text-slate-300">{{ post.description }}</p>
  
        <div class="flex items-center mt-4 text-gray-500 dark:text-slate-300">
          <img :src="post.authorImage" alt="Author" class="h-6 w-6 rounded-full mr-2 transition duration-200 dark:brightness-75 dark:contrast-125" loading="lazy">
          <div>
            <p class="text-xs font-medium dark:text-slate-300">{{ post.author }}</p>
            <p class="text-xs dark:text-slate-300">{{ post.date }} · {{ post.readTime }}</p>
          </div>
        </div>
      </div>
    </a>
  </template>
  
  <script setup>
  defineProps({
    post: Object
  });
  </script>  