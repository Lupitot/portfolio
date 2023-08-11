import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Contact from './Contact.vue'
import Blog from './Blog.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'


// library.add(fas)
library.add(fab)





createApp(App)
.component('fa', FontAwesomeIcon)
.mount('#app')
createApp(Contact).mount('#contact')
createApp(Blog).mount('#blog')