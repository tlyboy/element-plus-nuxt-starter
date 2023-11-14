// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/styles/main.css',
    '~/assets/styles/nprogress.css',
    '~/assets/styles/index.scss',
  ],
  modules: [
    '@nuxtjs/color-mode',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    '@element-plus/nuxt',
  ],
  colorMode: {
    classSuffix: '',
  },
  imports: {
    dirs: ['stores'],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/styles/element/index.scss" as *;`,
        },
      },
    },
  },
  elementPlus: {
    importStyle: 'scss',
  },
})
