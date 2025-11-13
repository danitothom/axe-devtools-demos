describe('Dashboard', () => {
  it('has expected nav items', () => {
    cy.visit('http://localhost:3033')
    cy.get('nav').should('exist')
    cy.get('nav a[href="/"]').should('exist')
    cy.get('nav a[href="/settings"]').should('exist')
  })

  it('has expected page structure', () => {
    cy.visit('http://localhost:3033')
    cy.get('h1').should('exist')
    cy.get('main').should('exist')
    cy.get('footer').should('exist')
  })
})
