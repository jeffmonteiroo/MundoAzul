const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  
  
  e2e: {
    baseUrl: 'https://mundoazul-dev.unicesumar.edu.br',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },

    pageLoadTimeout: 100000,
    "reporters": ["cypress-mochawesome-reporter"],
    "scripts": {
      "test": "cypress run",
      "report": "npx mochawesome-merge cypress/reports/mocha/*.json > cypress/reports/mochawesome.json && npx marge cypress/reports/mochawesome.json -f report -o cypress/reports"
    }
    

  },
});
