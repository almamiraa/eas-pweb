// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig(
  {
    modules: ["@nuxtjs/tailwindcss"],
  },
  {
    app: {
      head: {
        title: "NUXT 3 CRUD",
        meta: [
          { charset: "utf-8" },
          { name: "viewport", content: "width=device-width, initial-scale=1" },
          { hid: "description", name: "description", content: "NUXT 3 CRUD meta desc" },
          { name: "format-detection", content: "telephone=no" },
        ],
      },
    },
  }
);
