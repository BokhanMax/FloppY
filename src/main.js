import './assets/style.css'

import { createApp } from 'vue'
import { createGtag, configure} from "vue-gtag";
import Floppy from './Floppy.vue'

const gtag = createGtag({
    tagId: "G-LVRGKFB5Y6"
})

const app = createApp(Floppy)
app.use(gtag)
app.mount('#app')