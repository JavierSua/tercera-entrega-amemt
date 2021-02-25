import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    plantasArray: [],
    modalOpen:false,
    editModalOpen:false,
    deleteModalOpen:false,
    rowToEdit: "",
    progressValue: 0
  },
  mutations: {
    progressBarValue (state) {
      var prog = setInterval(() => {
        state.progressValue ++ 
        if (state.progressValue == 100){
          clearInterval(prog);
          state.progressValue = 0
        }
      }, 20);
      prog;
    }
  },
  getters:{
    plantas(state){
      return state.plantasArray
    },
    filteredPlantas: (state) => (col, input) =>{
      return state.plantasArray.filter(planta => planta[col]===input)
    },
    progressValue(state){
      return state.progressValue
    }
  },
  actions: {
    progressBarValue (context) {
      context.commit('progressBarValue')
    }
  },
  modules: {
  }
})
