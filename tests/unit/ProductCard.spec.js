import { mount } from '@vue/test-utils'
import ProductCard from '@/components/ProductCard.vue'

describe('ProductCard.vue', () => {
  const mockProduct = {
    id: 10,
    title: 'Monitor Gamer 24 pulgadas',
    price: 199.99,
    category: 'electronics',
    image: 'https://via.placeholder.com/150'
  }

  it('renderiza correctamente el título, la categoría y el precio del producto', () => {
    const wrapper = mount(ProductCard, {
      props: {
        product: mockProduct
      }
    })

    expect(wrapper.find('.product-title').text()).toBe(mockProduct.title)
    expect(wrapper.find('.category-badge').text()).toBe(mockProduct.category)
    expect(wrapper.find('.product-price').text()).toContain('$199.99')
  })

  it('emite el evento "ver-detalle" con el id correcto al presionar el botón', async () => {
    const wrapper = mount(ProductCard, {
      props: {
        product: mockProduct
      }
    })

    const button = wrapper.find('.btn-detail')
    await button.trigger('click')

    expect(wrapper.emitted('ver-detalle')).toBeTruthy()
    expect(wrapper.emitted('ver-detalle')[0]).toEqual([mockProduct.id])
  })
})