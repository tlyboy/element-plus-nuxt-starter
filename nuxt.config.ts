import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-09-11',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/element/index.scss" as element;`,
        },
      },
    },
  },
  modules: ['@nuxtjs/color-mode', '@element-plus/nuxt'],
  colorMode: {
    classSuffix: '',
  },
  elementPlus: {
    icon: 'ElIcon',
    importStyle: 'scss',
    themes: ['dark'],
  },
})
