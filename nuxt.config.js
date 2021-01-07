export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'tumblr',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400&family=Sanchez&display=swap' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/main.scss',
  ],
  
  styleResources: {
    scss: [
        '~/assets/helpers/_variables.scss',
        '~/assets/helpers/_reset.scss',
        '~/assets/helpers/_mixins.scss',
    ]
  },

  fontLoader: {
    // Paste a google link here
    url: 'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400&family=Sanchez&display=swap',

    // Enable options
    prefetch: true,
    preconnect: true
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    'nuxt-font-loader'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',

    '@nuxtjs/style-resources',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
