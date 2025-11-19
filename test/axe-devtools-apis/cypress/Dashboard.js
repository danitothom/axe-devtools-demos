const resultsDir = './results/'

describe('Dashboard', () => {
  afterEach(() => {
    cy.getAxeResults().then((results) => {
      cy.task(
        'log',
        `axe found ${results.findings.violations.length} violations`
      )

      cy.writeFile(
        `${resultsDir}results-dashboard-${Date.now()}.json`,
        results
      )
    })
  })

  after(() => {
    cy.task('reportAsHTML', { resultsDir })
    // Example of junit report generation:
    cy.task('reportAsJunit', { resultsDir })
  })

  it('has expected nav items', () => {
    cy.visit('http://localhost:3033')
    cy.get('nav').should('exist')
    cy.get('nav a[href="/"]').should('exist')
    cy.get('nav a[href="/settings"]').should('exist')
    cy.axeAnalyze()
  })

  it('has expected page structure', () => {
    cy.visit('http://localhost:3033')
    cy.get('h1').should('exist')
    cy.get('main').should('exist')
    cy.get('footer').should('exist')
    cy.axeAnalyze()
  })
})
