import svg from "@neodx/svg/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  pages: true,
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'My Nuxt PWA',
      short_name: 'NuxtPWA',
      description: 'Прогрессивное веб-приложение на Nuxt 3',
      theme_color: '#42b883',
      icons: [
        {
          src: '/128.png',
          sizes: '128x128',
          type: 'image/png'
        },
        {
          src: '/512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
  },
  workbox: {
    globPatterns: ['**/*.{js,css,html,png,svg,ico}']
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", '@vite-pwa/nuxt'],
  alias: {
    "@widgets": "./widgets",
    "@app": "./app",
    "@shareds": "./shareds"
  },
  runtimeConfig: {
    secretKey: process.env["VITE_SECRET_KEY"],
    public: {
      supabaseUrl: process.env["SUPABASE_URL"],
      supabaseKey: process.env["SUPABASE_KEY"]
    }
  },
  vite: {
    vue: {},
    plugins: [
      svg({
        root: "shareds/ui/icons/assets",
        group: true,
        output: "public/sprite",
        metadata: "shareds/ui/icons/sprite.h.ts"
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler" // or "modern"
        }
      }
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
});
