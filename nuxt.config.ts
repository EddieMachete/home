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
      // We get errors loading custom elements on server side, because the HTMLElement api is not available
      // Part of the solution to stop getting errors is to let the compiler know which tags are custom elements
      // Since we are using the eddiemachete-ui package, we can use the em- prefix to identify custom elements
      isCustomElement: (tag) => {
        return tag.startsWith("em-");
      },
    },
  },
});
