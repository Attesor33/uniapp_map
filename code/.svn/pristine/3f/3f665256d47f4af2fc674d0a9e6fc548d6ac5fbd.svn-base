import Vue from 'vue'
import App from './App'
import svg from '@/common/svg.js';
import store from './store'
Vue.use(svg)

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$store  =store

const app = new Vue({
	store,
	...App
})
app.$mount()
