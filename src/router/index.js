import Vue from 'vue'
import VueRouter from 'vue-router'
import Players from '../views/Players.vue'
import MyTeam from '../views/MyTeam.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Players',
    component: Players
  },
  {
    path: '/myteam',
    name: 'My Team',
    component: MyTeam
  }
]

const router = new VueRouter({
  routes
})

export default router
