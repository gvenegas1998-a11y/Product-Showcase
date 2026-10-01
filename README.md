# Vue Product Showcase 🛍️

Aplicación web desarrollada con **Vue 3**, **Vuex 4**, **Vue Router** y **Bootstrap 5**, orientada a la visualización y filtrado dinámico de un catálogo de productos obtenido desde FakeStoreAPI.

---

## 🚀 Características Principales

- **Arquitectura basada en componentes:** Modularización mediante `<script setup>` con `AppHeader`, `AppFooter`, `ProductList` y `ProductCard`.
- **Gestión centralizada del estado:** Implementación modular de Vuex dividida en `products`, `filters` y `favorites`.
- **Consumo de API REST:** Integración asíncrona mediante Axios (`https://fakestoreapi.com/products`), con manejo explícito de estados de carga, error y lista vacía.
- **Librería UI:** Integración de Bootstrap 5 y Bootstrap Icons para diseño responsivo e iconografía.
- **Testing:** Cobertura de pruebas unitarias con Jest / Vue Test Utils y pruebas End-to-End (E2E) interactivas con Cypress.

---

## 🛠️ Tecnologías Utilizadas

- **Framework:** Vue 3 (Composition API / `<script setup>`)
- **Gestor de Estado:** Vuex 4
- **Enrutamiento:** Vue Router 4
- **Cliente HTTP:** Axios
- **UI & Estilos:** Bootstrap 5 & Bootstrap Icons
- **Pruebas Unitarias:** Jest + Vue Test Utils
- **Pruebas E2E:** Cypress

---

## 💻 Instalación y Ejecución Local

1. **Clonar el repositorio o descargar el proyecto:**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd vue-product-showcase
   
   src/
├── assets/          # Estilos y recursos gráficos globales
├── components/      # Componentes modulares reutilizables
│   ├── AppFooter.vue
│   ├── AppHeader.vue
│   ├── ProductCard.vue
│   └── ProductList.vue
├── router/          # Configuración de rutas (Vue Router)
├── store/           # Módulos de Vuex (products, filters, favorites)
├── views/           # Vistas principales (HomeView, AboutView)
├── App.vue          # Componente raíz
└── main.js          # Punto de entrada y registro de plugins/librerías