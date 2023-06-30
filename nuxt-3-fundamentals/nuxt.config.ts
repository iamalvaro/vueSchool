// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ["@pinia/nuxt", {
      autoImports: ["defineStore", "acceptHMRUpdate"],
    }]
  ],
  //auto import all stores from stores directory
  imports:{
    dirs: ["stores"],
  },
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs",
  },
  //Defining route rules for different pages types in order to achieve hybrid rendering
  routeRules: {
    "/spa": {ssr: false},
    "/static": {static: true},
    //STALE WHILE REVALIDATE
    "/swr": {swr: true},
    //SSR PAGE DOESN'T NEED ROUTE RULE SINCE SERVER SIDE RENDERING IS THE DEFAULT -- UNIVERSAL RENDERED APP
  } 
})
