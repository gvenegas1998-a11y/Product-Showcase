<template>
  <section class="product-list-container">
    <div class="list-header">
      <h2>Catálogo de Productos</h2>
      <p v-if="mensajeCicloVida" class="status-badge">{{ mensajeCicloVida }}</p>
    </div>

    <!-- Filtro por categoría conectado a Vuex -->
    <div class="filter-section">
      <label for="category-select">Filtrar por categoría:</label>
      <select 
        id="category-select" 
        :value="selectedCategory" 
        @change="onCategoryChange"
      >
        <option value="">Todas las categorías</option>
        <option v-for="cat in categories" :key="cat" :value="cat">
          {{ cat }}
        </option>
      </select>
    </div>

    <!-- Estado 1: Cargando -->
    <div v-if="isLoading" class="feedback-box state-loading">
      <div class="spinner"></div>
      <p>Cargando catálogo desde Vuex...</p>
    </div>

    <!-- Estado 2: Error -->
    <div v-else-if="errorMessage" class="feedback-box state-error">
      <p>⚠️ {{ errorMessage }}</p>
      <button class="btn-retry" @click="cargarDatos">Reintentar</button>
    </div>

    <!-- Estado 3: Vacío -->
    <div v-else-if="products.length === 0" class="feedback-box state-empty">
      <p>No se encontraron productos para la categoría seleccionada.</p>
    </div>

    <!-- Lista de productos -->
    <div v-else class="grid-products">
      <ProductCard 
        v-for="item in products" 
        :key="item.id" 
        :product="item"
        @ver-detalle="handleDetalle"
      />
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import ProductCard from './ProductCard.vue'

const store = useStore()
const mensajeCicloVida = ref('')

// Getters y estados leídos desde Vuex
const products = computed(() => (store?.getters ? store.getters['filters/filteredProducts'] : []))
const categories = computed(() => (store?.getters ? store.getters['filters/availableCategories'] : []))
const selectedCategory = computed(() => (store?.getters ? store.getters['filters/selectedCategory'] : ''))
const isLoading = computed(() => (store?.getters ? store.getters['products/isLoading'] : false))
const errorMessage = computed(() => (store?.getters ? store.getters['products/errorMessage'] : ''))

const cargarDatos = () => {
  if (store?.dispatch) {
    store.dispatch('products/fetchProducts')
  }
}

const onCategoryChange = (event) => {
  if (store?.dispatch) {
    store.dispatch('filters/updateCategory', event.target.value)
  }
}

onMounted(() => {
  mensajeCicloVida.value = 'Componente montado (onMounted)'
  cargarDatos()
})

const handleDetalle = (id) => {
  alert(`Detalle del producto ID: ${id}`)
}
</script>

<style scoped>
.product-list-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

.list-header h2 {
  font-size: 1.75rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #0f172a;
}

.filter-section {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1.5rem 0 2rem;
  background: #ffffff;
  padding: 0.85rem 1.25rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

.filter-section select {
  padding: 0.5rem 0.8rem;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  background-color: #f8fafc;
  color: #0f172a;
  font-weight: 500;
  outline: none;
}

.grid-products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.75rem;
}
</style>