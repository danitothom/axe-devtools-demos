describe('Settings', () => {
  it('has the expected form fields', () => {
    cy.visit('http://localhost:3033/settings')
    cy.get('form').should('exist')
    cy.get('form h2').contains('Theme')
    cy.get('form [type="radio"][value="dark"]').should('exist')
    cy.get('form [type="radio"][value="light"]').should('exist')
    cy.get('form button[type="submit"]').should('exist')
  })

  describe('dark theme', () => {
    it('should be activated when form is submitted with "dark" selected', () => {
      cy.visit('http://localhost:3033/settings')
      cy.get('body.cauldron--theme-dark').should('not.exist')
      cy.get('form [type="radio"][value="dark"]').click()
      cy.get('form button[type="submit"]').click()
      cy.get('body.cauldron--theme-dark').should('exist')
    })
  })
})
