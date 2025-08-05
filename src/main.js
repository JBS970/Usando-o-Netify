/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Styles
import 'unfonts.css'

import { registerSW } from 'virtual:pwa-register'//=============

const app = createApp(App)

registerPlugins(app)

app.mount('#app')



const updateSW = registerSW({
    onNeedRefresh() {
        if (confirm('Nova versão disponível. Recarregar?')) {
            updateSW()
        }
    },
    onOfflineReady() {
        console.log('App pronto para uso offline')
    }
})
