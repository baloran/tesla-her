import Vue from 'vue'
import Router from 'vue-router'
import App from './components/App.vue'
import Music from './components/Music.vue'

// install router
Vue.use(Router)

// routing
var router = new Router()

router.map({
  '/home': {
    component: Music
  }
})

router.start(App, '#app')