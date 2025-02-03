<template>
  <LoadingScreen />
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
  <ThemeToggle />
</template>

<script setup>
import Header from "@/components/Header.vue";
import LoadingScreen from "~/components/LoadingScreen.vue";
import Footer from "~/components/Footer.vue";
import ThemeToggle from "~/components/ThemeToggle.vue";
</script>

<style scoped>
</style>