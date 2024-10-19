export default {
  //Target static
  //target: 'static', //cambiar a 'server' para prod
  target: 'server',
  //Variables de ambiente
  env: {
    //titleBase:" | Plataforma de Apoyo a la Gestión de Emergencias y Aplicaciones"
    titleBase: process.env.TITLE_BASE || " | Plataforma de apoyo para mejorar entornos educacionales",
    backendUrl: process.env.BACKEND_URL || 'http://localhost:3003',
    //variables para email
    emailAddress: process.env.EMAIL_ADDRESS,
    emailPassword: process.env.EMAIL_PASSWORD,
    smtpServer: process.env.SMTP_SERVER,
    smtpPort: process.env.SMTP_PORT
  },
  server: {
    port: process.env.PORT || 3003
  },
  router: {
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
    base: ''
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'template-nuxt-bulma-ssr',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './favicon.png' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/style/main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    //'@nuxtjs/bulma', 
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['nuxt-fontawesome', {
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['fab']
        }
      ]
    }],
    '@nuxt/content'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
  },

  //Middleware Express
  serverMiddleware: [
    '~/api/test'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // postcss: {
    //   preset: {
    //     features: {
    //       customProperties: false
    //     }
    //   }
    // },
    extractCSS: {
      ignoreOrder: false
    },
  },

  //Generación de páginas estáticas
  // generate:{
  //   async routes(){
  //     const { $content } = require('@nuxt/content')
  //     const files = await $content({ deep: true }).only(['path']).fetch()
  //     const e = files.map(file => file.path === '/index' ? '/' : file.path)
  //     console.log('files', e)
  //     return e
  //   }
  // }
}
