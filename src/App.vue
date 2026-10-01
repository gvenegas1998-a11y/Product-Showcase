<template>
  <div id="app" class="app-layout">
    <AppHeader />
    <main class="main-content">
      <ProductList />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import ProductList from './components/ProductList.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<style>
/* Estilos globales */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #f4f6f8;
  color: #2c3e50;
}

.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}
</style>