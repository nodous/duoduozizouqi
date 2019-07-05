import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import pageHead from './components/page-head.vue'
Vue.component('page-head', pageHead)

App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
