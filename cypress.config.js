const { defineConfig } = require("cypress");

// Define baseUrl based on environment
const { CI, GITHUB_REF_NAME, GITHUB_REPOSITORY } = process.env;
let baseUrl = "http://localhost:3000";
if (CI && GITHUB_REF_NAME && GITHUB_REPOSITORY) {
    const [owner, repo] = GITHUB_REPOSITORY.split('/');
    baseUrl = `https://${GITHUB_REF_NAME}--${repo}--${owner}.hlx.live`;
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
