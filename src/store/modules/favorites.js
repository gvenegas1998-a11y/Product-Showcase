export default {
  namespaced: true,
  state: () => ({
    items: []
  }),
  mutations: {
    TOGGLE_FAVORITE(state, product) {
      const index = state.items.findIndex((item) => item.id === product.id)
      if (index >= 0) {
        state.items.splice(index, 1)
      } else {
        state.items.push(product)
      }
    }
  },
  actions: {
    toggleFavorite({ commit }, product) {
      commit('TOGGLE_FAVORITE', product)
    }
  },
  getters: {
    favoriteItems: (state) => state.items,
    totalFavorites: (state) => state.items.length,
    isFavorite: (state) => (id) => state.items.some((item) => item.id === id)
  }
}