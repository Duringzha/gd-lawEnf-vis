import Vue from 'vue'
import App from './App.vue'
import router from './router'

var Cesium = require('cesium/Cesium');
var widgets= require('cesium/Widgets/widgets.css');
Vue.prototype.Cesium = Cesium
Vue.prototype.widgets = widgets

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
