import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  buildModules: ['@nuxt/typescript-build', ['nuxt-storm', { nested: true }]],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
  css: ['@/styles/index', 'vue-json-pretty/lib/styles.css'],
  ssr: false,
  runtimeConfig: {
    public: {
      supabaseDbUrl: '',
      supabaseDbKey: '',
      tmdbApiKey: '',
      tmdbImagePath: '',
    },
  },
  srcDir: 'src',
})
