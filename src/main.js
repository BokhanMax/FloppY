import './assets/style.css'

import { ViteSSG } from 'vite-ssg'
import Floppy from './Floppy.vue'
import { routes } from './router'

import { createGtm } from '@gtm-support/vue-gtm'
import { createGtag } from 'vue-gtag'

export const createApp = ViteSSG(Floppy, { routes }, ({ app, router, isClient }) => {
  if (isClient) {
    const gtag = createGtag({ tagId: 'G-LVRGKFB5Y6' })
    app.use(gtag)
    app.use(
      createGtm({
        id: 'GTM-TFSLLQWC',
        vueRouter: router,
        defer: true,
      }),
    )
  }
})
