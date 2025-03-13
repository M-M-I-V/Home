<template>
  <LoadingScreen :isLoading="isLoading" />
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
  <ThemeToggle />
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { useRouter } from "vue-router";
import Header from "@/components/Header.vue";
import LoadingScreen from "@/components/LoadingScreen.vue";
import Footer from "@/components/Footer.vue";
import ThemeToggle from "@/components/ThemeToggle.vue";

const isLoading = ref(true);
const router = useRouter();

onMounted(async () => {
  console.log("Component mounted");
  setTimeout(async () => {
    isLoading.value = false;
    await nextTick();
    console.log("Loading screen hidden");
  }, 1000);
});

router.beforeEach(() => {
  isLoading.value = true;
});
router.afterEach(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 500);
});
</script>