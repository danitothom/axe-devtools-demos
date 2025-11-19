const resultsDir = './results/'

describe('Dashboard', () => {
  afterEach(() => {
    cy.getAxeResults().then((results) => {
      cy.task(
        'log',
        `axe found ${results.findings.violations.length} violations`
      )

      cy.writeFile(
        `${resultsDir}results-blog-${Date.now()}.json`,
        results
      )
    })
  })

  after(() => {
    cy.task('reportAsHTML', { resultsDir })
    // Example of junit report generation:
    cy.task('reportAsJunit', { resultsDir })
  })

  it('has expected landmarks', () => {
    cy.visit('http://localhost:3033/blog')
    cy.get('nav').should('exist')
    cy.get('main').should('exist')
    cy.get('h1').should('exist')
    cy.axeAnalyze()
  })

  it('has blog post links', () => {
    cy.visit('http://localhost:3033/blog')
    cy.get('.Panel a').should('have.length', 9)
    cy.axeAnalyze()
  })
})
