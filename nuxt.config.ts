// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/Home/',
    head: {
      title: 'Mandaluyong College of Science and Technology',
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: 'Mandaluyong College of Science and Technology is committed to excellence in education, offering innovative programs in science, technology, and more.' },
        { name: 'keywords', content: 'Mandaluyong College, Science, Technology, Education, Philippines' },
        { property: 'og:title', content: 'Mandaluyong College of Science and Technology' },
        { property: 'og:description', content: 'Empowering Futures Through Science and Technology.' },
        { property: 'og:image', content: '/images/hero-section.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/mcst-logo.png' }
      ]
    }
  },
  css: [
    "~/assets/css/tailwind.css",
    "aos/dist/aos.css"
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  compatibilityDate: '2024-11-01',
  nitro: {
    preset: "static"
  },
  routeRules: {
    '/**': { static: true }
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
});