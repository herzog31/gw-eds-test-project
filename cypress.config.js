const { defineConfig } = require("cypress");

// Calculate base url based on environment
const { CI, GITHUB_REF_NAME } = process.env;
let baseUrl = "http://localhost:3000";
if (CI && GITHUB_REF_NAME) {
    baseUrl = `https://${GITHUB_REF_NAME}--gw-eds-test-project--herzog31.hlx.live`;
}

console.log(`Using base url: ${baseUrl}`);

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl,
  },
});
