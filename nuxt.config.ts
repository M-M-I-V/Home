export default defineNuxtConfig({
  app: {
    baseURL: '/Home/', 
    cdnURL: 'https://m-m-i-v.github.io/Home/'
    head: {
      title: 'Mandaluyong College of Science and Technology',
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: 'Mandaluyong College of Science and Technology is committed to excellence in education, offering innovative programs in science, technology, and more.' },
        { name: 'keywords', content: 'Mandaluyong College, Science, Technology, Education, Philippines' },
        { property: 'og:title', content: 'Mandaluyong College of Science and Technology' },
        { property: 'og:description', content: 'Empowering Futures Through Science and Technology.' },
        { property: 'og:image', content: 'https://m-m-i-v.github.io/Home/images/hero-section.png' } // Use absolute path
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: 'https://m-m-i-v.github.io/Home/images/mcst-logo.png' } // Use absolute path
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
    preset: "static",
    output: {
      dir: 'docs'
    }
  },
  routeRules: {
    '/**': { static: true }
  },
  devtools: { enabled: true },
  plugins: [
    '~/plugins/aos.client.ts'
  ]
});