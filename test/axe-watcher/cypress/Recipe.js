describe('Dashboard', () => {
  it('has expected nav items', () => {
    cy.visit('http://localhost:3033')
    cy.get('nav').should('exist')
  })

  describe('Recipe', () => {
    it('should be activated when "Cook Chocolate Cake" is clicked', () => {
      cy.viewport(1920, 1080)
      cy.visit('http://localhost:3033')
      cy.get(
        '#main-content > div.Recipes > div:nth-child(1) > div.Recipes__card-foot > div'
      ).should('exist')
      cy.get(
        '#main-content > div.Recipes > div:nth-child(1) > div.Recipes__card-foot > div'
      ).click()
      cy.get(
        '#main-content > div.Recipes > div.Dialog.Modal.Dialog--show > div'
      ).should('be.visible')
      cy.get(
        '#main-content > div.Recipes > div.Dialog.Modal.Dialog--show > div'
      ).should('exist')
      cy.get(
        '#main-content > div.Recipes > div.Dialog.Modal.Dialog--show > div > div > h2'
      ).should('exist')
      cy.get('input[type="number"][min="0"][max="50"]').eq(0).clear()
      cy.get('input[type="number"][min="0"][max="50"]').eq(0).type('25')
      cy.get(
        '#main-content > div.Recipes > div.Dialog.Modal.Dialog--show > div > form > div.Dialog__content > div.RecipeModal__global > div.Checkbox__wrap > div'
      ).click()
      cy.get(
        '#main-content > div.Recipes > div.Dialog.Modal.Dialog--show > div > form > div.Dialog__footer > button.Button--primary'
      ).click()
    })
  })
})
