import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    plantas: [],
    modalOpen:false,
    editModalOpen:false,
    rowToEdit: "",
  },
  mutations: {
  },
  getters:{
    plantas(state){
      return state.plantas
    }
  },
  actions: {
  },
  modules: {
  }
})
