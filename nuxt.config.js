module.exports = {
    mode: 'spa',
    head: {
        title: 'nuxt practice',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons' }
        ]
    },
    loading: { color: '#3f51b5' },
    build: {
        vendor: [
            // 'vuetify',
            '~/plugins/firebase-client-init.js'
        ]
    },
    plugins: [
        { src: '~/plugins/vuetify.js', ssr: true },
        { src: '~/plugins/firebase-client-init.js', ssr: false },
        // { src: '~/plugins/auth-cookie.js', ssr: false },
        // { src: '~/plugins/web-font-loader.js', ssr: false }
    ],
    router: {
        extendRoutes(routes, resolve) {
            routes.push(
                {
                    name: 'defaultPage',
                    path: '*',
                    component: resolve(__dirname, 'pages/login.vue')
                }
            )
        }
    },
    css: [
        // { src: 'vuetify/dist/vuetify.min.css', lang: 'css' }
        'vuetify/dist/vuetify.min.css'
    ],
}