import axios from 'axios'
import { error } from '@/utils/error'
const tokenKey = 'jwt-token'

export default {
  namespaced: true,
  state () {
    return {
      token: localStorage.getItem(tokenKey)
    }
  },
  mutations: {
    SET_TOKEN (state, token) {
      state.token = token
      localStorage.setItem(tokenKey, token)
    },
    REMOVE_TOKEN (state) {
      state.token = null
      localStorage.removeItem(tokenKey)
    }
  },
  actions: {
    async login ({ commit, dispatch }, payload) {
      try {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_KEY}`
        const { data } = await axios.post(url, payload)
        commit('SET_TOKEN', data.idToken)
        commit('CLEAR_MESSAGE', null, { root: true })
      } catch (e) {
        dispatch('setMessage', {
          value: error(e.response.data.error.message),
          type: 'danger'
        }, { root: true })
      }
    }
  },
  getters: {
    token (state) {
      return state.token
    },
    isAuthenticated (_, getters) {
      return !!getters.token
    }
  }
}
