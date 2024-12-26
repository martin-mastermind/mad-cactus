// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  css: ["~/assets/styles/main.scss"],

  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },
  modules: ["nuxt-svgo", "@nuxt/fonts"],
});