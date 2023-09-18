// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
    "~/components",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/style/global.scss" as *;',
        },
      },
    },
  },
  imports: {
    dirs: [
      // Scan top-level modules
      "composables",
      // ... or scan modules nested one level deep with a specific name and file extension
      "composables/*/index.{ts,js,mjs,mts}",
      // ... or scan all modules within given directory
      "composables/**",
    ],
  },
  modules: ['nuxt-svgo'],
  svgo: {
    autoImportPath: './assets/other-icons/'
  },
});
