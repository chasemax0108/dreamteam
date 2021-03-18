import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock_data from './assets/MOCK_DATA.json'

Vue.config.productionTip = false

let data = {
  players: mock_data,
  team: [],
  addToTeam(player) {
    this.team.push(player);
  },
  removeFromTeam(player) {
    var index = this.team.indexOf(player);
    this.team.splice(index, 1);
  }
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
