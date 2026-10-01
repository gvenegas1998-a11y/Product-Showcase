export default {
  namespaced: true,
  state: () => ({
    selectedCategory: ''
  }),
  mutations: {
    SET_CATEGORY(state, category) {
      state.selectedCategory = category
    }
  },
  actions: {
    updateCategory({ commit }, category) {
      commit('SET_CATEGORY', category)
    }
  },
  getters: {
    selectedCategory: (state) => state.selectedCategory,
    filteredProducts: (state, getters, rootState) => {
      const all = rootState.products.items
      if (!state.selectedCategory) {
        return all
      }
      return all.filter((p) => p.category === state.selectedCategory)
    },
    availableCategories: (state, getters, rootState) => {
      const all = rootState.products.items
      return [...new Set(all.map((p) => p.category))]
    }
  }
}