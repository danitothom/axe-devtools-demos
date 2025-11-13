const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    specPattern: './test/axe-devtools-apis/cypress/*.js',
    supportFile: './test/axe-devtools-apis/support.js',
    setupNodeEvents(on, config) {
      return require('./test/axe-devtools-apis/plugins.js')(on, config)
    },
  },
  video: false,
})
