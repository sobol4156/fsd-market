import svg from '@neodx/svg/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  pages: true,
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  alias: {
    '@widgets': './widgets',
    '@app': './app',
    '@shared': './shared',
  },
  
  vite: {
    vue: {},
    plugins: [
      svg({
        root: 'shared/ui/icons/assets',
        group: true,
        output: 'public/sprite',
        metadata: 'shared/ui/icons/sprite.h.ts'
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler' // or "modern"
        }
      }
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
})
