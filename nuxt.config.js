export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Holidaze",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Find accommodations and unique tavel experience when you book on holidaze. Search, book and explore"
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "book, hotels, guesthouses, bed and breakfast, bergen, travel, offers, cheap, explore, norway, nature"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:wght@400;700&display=swap"
      }
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/Vuelidate" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  target: "static",
  buildModules: ["@nuxt/image", "@nuxtjs/vuetify"],
  image: {
    domains: ["images.unsplash.com"],
    dir: "assets/"
  },
  modules: ["nuxt-fontawesome", "@nuxtjs/axios", "@nuxtjs/strapi"],
  axios: {
    // proxy: true
  },
  strapi: {
    entities: ["hotels", "messages", "enquiries", "header-video"]
  },
  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true,
    injected: true
    // use: ['markdown-it-div', 'markdown-it-attrs'],
  },
  env: {
    STRAPI_URL: process.env.STRAPI_URL
  },

  fontawesome: {
    imports: [
      {
        set: "@fortawesome/free-solid-svg-icons",
        icons: ["fas"]
      },
      {
        set: "@fortawesome/free-brands-svg-icons",
        icons: ["fab"]
      }
    ]
  },
  vuetify: {
    theme: {
      themes: {
        light: {
          brandGreen: "#28696a",
          brandBlue: "#213058",
          white: "#FFFFFF",
          primary: "#28696a"
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
