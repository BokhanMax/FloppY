import './assets/style.css'

import { createApp } from 'vue'
import Floppy from './Floppy.vue'
import router from './router'

import { createGtm } from '@gtm-support/vue-gtm'
import { createGtag } from 'vue-gtag'

const gtag = createGtag({
  tagId: 'G-LVRGKFB5Y6',
})

const app = createApp(Floppy)
app.use(router)
app.use(gtag)
app.use(
  createGtm({
    id: 'GTM-TFSLLQWC',
    vueRouter: router,
    defer: true,
  }),
)

app.mount('#app')
