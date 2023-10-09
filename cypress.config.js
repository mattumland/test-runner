const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://ec2-18-215-170-129.compute-1.amazonaws.com/',
    pageLoadTimeout: 180000,
    retries: {
      runMode: 3,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
