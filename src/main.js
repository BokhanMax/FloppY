import './assets/style.css'

import { createSSRApp } from 'vue'
import Floppy from './Floppy.vue'
//import router from './router'

const app = createSSRApp(Floppy)

//app.use(router)

app.mount('#app')
