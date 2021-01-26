import axios from '../../axios/request'
import store from '../index'

export default {
  namespaced: true,
  state () {
    return {
      requests: []
    }
  },
  mutations: {
    SET_REQUESTS (state, requests) {
      state.requests = requests
    },
    ADD_REQUEST (state, request) {
      state.requests.push(request)
    }
  },
  actions: {
    async createRequest ({ commit, dispatch }, payload) {
      try {
        const token = store.getters['auth/token']
        const { data } = await axios.post(`./requests.json?auth=${token}`, payload)
        commit('ADD_REQUEST', { ...payload, id: data.name })
        dispatch('setMessage', {
          value: 'Заявка успешно создана',
          type: 'primary'
        }, { root: true })
      } catch (e) {
        dispatch('setMessage', {
          value: e.message,
          type: 'danger'
        }, { root: true })
      }
    }
  },
  getters: {
    requests (state) {
      return state.requests
    }
  }
}
