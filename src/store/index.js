import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navLinks: [
      {
        name: 'Dashboard',
        route: '/',
        icon: ''
      },
      {
        name: 'Todo',
        route: '/todo',
        icon: ''
      },
      {
        name: 'Notes',
        route: '/notes',
        icon: ''
      },
      {
        name: 'Contacts',
        route: '/contacts',
        icon: ''
      },
      {
        name: 'Calendar',
        route: '/calendar',
        icon: ''
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
