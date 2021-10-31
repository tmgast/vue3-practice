import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter: 0
  },
  mutations: {
    increaseCounter(state, randomNum){
      console.log(randomNum);
      state.counter+=randomNum
    },
    decreaseCounter(state){
      state.counter--;
    }
  },
  actions: {
    increaseCounter({commit}){
      console.log("increase counter");
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
        commit('increaseCounter', response.data)
      })
    }
  },
  getter:{
  },
  modules: {
  }
})
