import { createStore, createLogger } from 'vuex'
import auth from './modules/auth.module'

const plugins = []

if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger)
}

export default createStore({
  plugins,
  state () {
    return {
      message: null
    }
  },
  mutations: {
    SET_MESSAGE (state, message) {
      state.message = message
    },
    CLEAR_MESSAGE (state) {
      state.message = null
    }
  },
  actions: {
    setMessage ({ commit }, payload) {
      commit('SET_MESSAGE', payload)
      setTimeout(() => {
        commit('CLEAR_MESSAGE')
      }, 5000)
    }
    // clearMessage ({ commit }) {
    //   commit('CLEAR_MESSAGE')
    // }
  },
  modules: {
    auth
  }
})
