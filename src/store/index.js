import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter: 0,
    colorCode: 'blue'
  },
  mutations: {
    increaseCounter(state, randomNum){
      console.log(randomNum);
      state.counter+=randomNum
    },
    decreaseCounter(state, randomNum){
      console.log(randomNum);
      state.counter-=randomNum
    },
    setColorCode(state, newValue){
      state.colorCode = newValue;
    }
  },
  actions: {
    decreaseCounter({commit}){
      console.log("decrease counter");
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
        commit('decreaseCounter', response.data)
      })
    },
    increaseCounter({commit}){
      console.log("increase counter");
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
        commit('increaseCounter', response.data)
      })
    },
    setColorCode({commit}, newValue){
      commit('setColorCode', newValue)
    }
  },
  getters:{
    counterSquared(state){
      return state.counter * state.counter
    }
  },
  modules: {
  }
})
