const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  e2e: {
    baseUrl: 'https://mundoazul-dev.unicesumar.edu.br',
    setupNodeEvents(on, config) {
      return config;
    },

    pageLoadTimeout: 100000,
  },
});
