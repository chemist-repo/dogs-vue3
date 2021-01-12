import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import UiComponents from './components/ui'
import directives from './directives'

import './assets/scss/main.scss'

createApp(App)
  .use(router)
  .use(store)
  .use(UiComponents)
  .use(directives)
  .mount('#app')
