describe('Flujo de Catálogo de Productos y Filtro', () => {
  it('permite cargar la tienda y filtrar productos por categoría', () => {
    // 1. Visitar la aplicación en desarrollo
    cy.visit('/')

    // 2. Comprobar que el título del catálogo es visible
    cy.contains('h2', 'Catálogo de Productos').should('be.visible')

    // 3. Esperar que al menos se carguen tarjetas de producto iniciales
    cy.get('.product-card').should('have.length.greaterThan', 0)

    // 4. Seleccionar una categoría en el dropdown (por ejemplo 'jewelery')
    cy.get('#category-select').select('jewelery')

    // 5. Verificar que las tarjetas mostradas correspondan a la categoría seleccionada
    cy.get('.product-card').each(($card) => {
      cy.wrap($card).find('.category-badge').should('contain.text', 'jewelery')
    })
  })
})