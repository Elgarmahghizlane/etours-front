export default {
  base:'/Portfolio/',
  server: {
    port: 8080 // change this to your desired port number
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'etours',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.svg'
      },
      { rel: 'stylesheet', href: 'https://cdn.syncfusion.com/ej2/material.css' },
      { rel: 'stylesheet', href: 'https://cdn.syncfusion.com/ej2/ej2-base/styles/material.css' },
      { rel: 'stylesheet', href: 'https://cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css' },
      { rel: 'stylesheet', href: 'https://cdn.syncfusion.com/ej2/ej2-calendars/styles/material.css' },
      { rel: 'stylesheet', href: 'https://cdn.syncfusion.com/ej2/ej2-dropdowns/styles/material.css' },
      { rel: 'stylesheet', href: 'https://cdn.syncfusion.com/ej2/ej2-inputs/styles/material.css' },
      { rel: 'stylesheet', href: 'https://cdn.syncfusion.com/ej2/ej2-lists/styles/material.css' },
      { rel: 'stylesheet', href: 'https://cdn.syncfusion.com/ej2/ej2-navigations/styles/material.css' },
      { rel: 'stylesheet', href: 'https://cdn.syncfusion.com/ej2/ej2-popups/styles/material.css' },
      { rel: 'stylesheet', href: 'https://cdn.syncfusion.com/ej2/ej2-splitbuttons/styles/material.css' },
      { rel: 'stylesheet', href: 'https://cdn.syncfusion.com/ej2/ej2-virtual-scroll/styles/material.css' },
      { rel: 'stylesheet', href: 'https://cdn.syncfusion.com/ej2/ej2-schedule/styles/material.css' }
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/tw-elements.js', mode: 'client' },
    { src: "~/plugins/vue2-google-maps.js" },
    { src: "~/plugins/maz-ui.js" },
    { src: '~/plugins/vuejs-datepicker', ssr: false },
    { src: '~/plugins/star-rating.js', mode:'client'},
    { src: '~/plugins/timepicker.js', mode: 'client' }
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
    vendor: ["vue2-google-maps"],
    // for maz ui config
    babel: {
      plugins: [
        [
          'component', {
            libraryName: 'maz-ui',
            styleLibraryName: 'css'
          }
        ]
      ]
    },
  },
  router: {
    routes: [
      {
        name: 'properties',
        path: '/properties',
        component: '~/pages/properties/properties.vue'
      },
      {
        name: 'My Accounting',
        path: '/accounting',
        component: '~/pages/accounting/accounting.vue'
      },
      {
        name: 'reservations',
        path: '/reservations',
        component: '~/pages/reservation/reservations.vue'
      },
      {
        name: 'booking',
        path: '/booking',
        component: '~/pages/experience/booking.vue'
      },
    ]
  },
  store: true ,
}
