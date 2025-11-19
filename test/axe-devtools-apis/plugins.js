const axeDevToolsPlugin = require('@axe-devtools/cypress/dist/plugin')
const Reporter = require('@axe-devtools/reporter').default

const axeDevToolsPluginsHandler = (on, config) => {
  axeDevToolsPlugin(on)

  on('task', {
    // task to create HTML report
    reportAsHTML: async ({ resultsDir, branding = 'axeDevToolsCypress' }) => {
      const reporter = new Reporter(branding, resultsDir)
      await reporter.buildHTML(resultsDir)
      return null
    },
    // task to create CSV report
    reportAsCSV: async ({ resultsDir, branding = 'axeDevToolsCypress' }) => {
      const reporter = new Reporter(branding, resultsDir)
      await reporter.buildCSV(resultsDir)
      return null
    },
    // task to create Junit XML report
    reportAsJunit: async ({ resultsDir, branding = 'axeDevToolsCypress' }) => {
      const reporter = new Reporter(branding, resultsDir)
      await reporter.buildJUnitXML(resultsDir)
      return null
    },
    log: (message) => {
      console.log(message)
      return null
    },
  })

  return config
}

module.exports = axeDevToolsPluginsHandler
