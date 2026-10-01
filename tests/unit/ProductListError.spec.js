import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import ProductList from '@/components/ProductList.vue'

describe('ProductList.vue - Manejo de errores', () => {
  it('muestra el mensaje de error visual cuando la API falla', async () => {
    const errorMsg = 'Error crítico al cargar productos'

    const testStore = createStore({
      modules: {
        products: {
          namespaced: true,
          state: () => ({
            errorMessage: errorMsg,
            isLoading: false,
            items: []
          }),
          getters: {
            isLoading: () => false,
            errorMessage: () => errorMsg
          },
          actions: {
            fetchProducts: jest.fn()
          }
        },
        filters: {
          namespaced: true,
          getters: {
            // Retornamos un item simulado para que no entre a state-empty antes que al error
            filteredProducts: () => [{ id: 1, title: 'Item', price: 10, category: 'test' }],
            availableCategories: () => [],
            selectedCategory: () => ''
          },
          actions: {
            updateCategory: jest.fn()
          }
        }
      }
    })

    const wrapper = mount(ProductList, {
      global: {
        plugins: [testStore],
        stubs: {
          ProductCard: true
        }
      }
    })

    await wrapper.vm.$nextTick()

    const errorBox = wrapper.find('.state-error')
    expect(errorBox.exists()).toBe(true)
    expect(errorBox.text()).toContain(errorMsg)
  })
})