module.exports = {
    build: {
        vendor: [
            // 'vuetify',
            '~/plugins/firebase-client-init.js'
        ]
    },
    plugins: [
        // { src: '~/plugins/vuetify.js', ssr: true },
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
    }
}