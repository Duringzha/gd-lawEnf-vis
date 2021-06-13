import Vue from 'vue'
import VueRouter from 'vue-router'
import cesiumScene from '../views/CesiumScene.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'scene',
    component: cesiumScene
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
