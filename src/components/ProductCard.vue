<template>
  <div class="product-card">
    <div class="image-wrapper">
      <img 
        :src="product.image" 
        :alt="product.title" 
        @error="handleImageError"
      />
    </div>
    <div class="card-body">
      <span class="category-badge">{{ product.category }}</span>
      <h3 class="product-title" :title="product.title">{{ product.title }}</h3>
      <p class="product-price">${{ Number(product.price).toFixed(2) }}</p>
      <button class="btn-detail" @click="emit('ver-detalle', product.id)">
        Ver detalles
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['ver-detalle'])

// Si la imagen de la API externa falla en cargar, ponemos un placeholder limpio
const handleImageError = (event) => {
  event.target.src = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80'
}
</script>

<style scoped>
.product-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.product-card:hover {
  transform: translateY(-4px);
  border-color: #cbd5e1;
  box-shadow: 0 12px 24px -8px rgba(15, 23, 42, 0.08);
}

.image-wrapper {
  background: #f8fafc;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  border-bottom: 1px solid #f1f5f9;
}

.image-wrapper img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  mix-blend-mode: multiply;
  transition: transform 0.25s ease;
}

.product-card:hover .image-wrapper img {
  transform: scale(1.06);
}

.card-body {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.category-badge {
  align-self: flex-start;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #475569;
  background: #f1f5f9;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  margin-bottom: 0.6rem;
}

.product-title {
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.4;
  color: #0f172a;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.7rem;
}

.product-price {
  font-size: 1.35rem;
  font-weight: 700;
  color: #0f172a;
  margin-top: auto;
  padding-top: 1rem;
  margin-bottom: 0.75rem;
}

.btn-detail {
  width: 100%;
  background: #0f172a;
  color: #ffffff;
  border: none;
  padding: 0.65rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.2s ease;
}

.btn-detail:hover {
  background: #334155;
}
</style>