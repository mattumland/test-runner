const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://storefront-elb-254850467.us-east-1.elb.amazonaws.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
