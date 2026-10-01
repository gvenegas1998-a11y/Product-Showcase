<template>
  <header class="app-header">
    <div class="logo">
      <h1>🛍️ TechStore Showcase</h1>
    </div>
    <nav>
      <span class="tagline">Catálogo de Productos</span>
    </nav>
  </header>
</template>

<script setup>
// Header preparado con <script setup>
</script>

<style scoped>
.app-header {
  background-color: #2c3e50;
  color: #ffffff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.logo h1 {
  margin: 0;
  font-size: 1.4rem;
}

.tagline {
  font-size: 0.95rem;
  color: #ecf0f1;
}
</style>