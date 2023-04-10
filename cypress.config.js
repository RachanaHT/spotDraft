const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    baseUrl:'https://www.goodreads.com',
    apiUrl:'https://www.goodreads.com/facebook_users',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
