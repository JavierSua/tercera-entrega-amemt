import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    plantasArray: [],
    modalOpen:false,
    editModalOpen:false,
    rowToEdit: "",
  },
  mutations: {
  },
  getters:{
    plantas(state){
      return state.plantasArray
    },
    filteredPlantas: (state) => (col, input) =>{
      return state.plantasArray.filter(planta => planta[col]===input)
    },
  },
  actions: {
  },
  modules: {
  }
})
