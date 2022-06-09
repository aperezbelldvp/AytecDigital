import { createStore } from 'vuex'

export default createStore({
  state: {
    contacts: []
  },
  getters: {
    getContacts(state){
      return state.contacts
    }
  },
  mutations: {
    setContacts(state, payload) {
      state.contacts = payload
    }
  },
  actions: {
    async fetchContacts({commit, state}) {
      try {
        const res = await fetch('data.json')
        const data = await res.json()
        commit('setContacts', data)
      } catch (error) {
        console.log(error)
      }

    }
  }
})
