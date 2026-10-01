import axios from 'axios'

export default {
  namespaced: true,
  state: () => ({
    items: [],
    isLoading: false,
    errorMessage: ''
  }),
  mutations: {
    SET_LOADING(state, status) {
      state.isLoading = status
    },
    SET_PRODUCTS(state, products) {
      state.items = products
    },
    SET_ERROR(state, message) {
      state.errorMessage = message
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      commit('SET_LOADING', true)
      commit('SET_ERROR', '')
      try {
        const response = await axios.get('https://fakestoreapi.com/products')
        commit('SET_PRODUCTS', response.data)
      } catch (error) {
        console.error('Error fetching products:', error)
        commit('SET_ERROR', 'No se pudieron cargar los productos desde la API central.')
      } finally {
        commit('SET_LOADING', false)
      }
    }
  },
  getters: {
    allProducts: (state) => state.items,
    isLoading: (state) => state.isLoading,
    errorMessage: (state) => state.errorMessage
  }
}