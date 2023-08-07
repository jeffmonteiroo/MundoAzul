const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  

  e2e: {
    baseUrl: 'https://mundoazul-uat.unicesumar.edu.br',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },

    pageLoadTimeout: 100000,
  },
});
