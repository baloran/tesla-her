import Vue from 'vue'
import hammerjs from './vendor/hammer.js'
import Dynamic from './vendor/dynamic.js'
import VueTouch from './directive/vue-touch.js'
import Router from 'vue-router'
import App from './components/App.vue'
import Music from './components/Music.vue'
import Gps from './components/Gps.vue'
import Settings from './components/Settings.vue'

// install router
Vue.use(Router)
Vue.use(VueTouch)


/**
 * Load component
 */
Vue.component('music-component', Music)
Vue.component('gps-component', Gps)
Vue.component('settings-component', Settings)

// routing
var router = new Router()

router.map({
  '/home': {
    component: Music
  }
})

router.start(App, '#app')