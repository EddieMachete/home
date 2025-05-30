// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  devServer: {
    port: 3001,
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => {
        return tag.startsWith("em-");
      },
    },
  },
});
