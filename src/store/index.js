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
  mutations: { // En Vue las mutations son las únicas que modifican el state
    setContacts(state, payload) {
      state.contacts = payload
    }
  },
  actions: {
    /* He preparado la carga de datos para poder usarlo también con una API gracias asyn/await.
    *  Los datos solo se leen una vez y se guardan en el state.  
    */
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
