import './assets/style.css'

import { createApp } from 'vue'
import { createGtag } from 'vue-gtag'
import Floppy from './Floppy.vue'
import router from './router'

const gtag = createGtag({
  tagId: 'G-LVRGKFB5Y6',
})

const app = createApp(Floppy)
app.use(router)
app.use(gtag)
app.use(PrimeVue, {    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }})
app.mount('#app')
