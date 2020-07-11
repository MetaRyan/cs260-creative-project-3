import Vue from 'vue'
import VueRouter from 'vue-router'
import Work from '../views/Work.vue'
import About from '../views/About.vue'
import ArtPage from '../views/ArtPage.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Work',
    component: Work
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/art/:id',
    name: 'Art Page',
    component: ArtPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
