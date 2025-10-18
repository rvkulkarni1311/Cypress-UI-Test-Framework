import { defineConfig } from "cypress";


export default defineConfig({
  defaultCommandTimeout: 100000,
  reporter: 'cypress-mochawesome-reporter',
  author: 'Radhika K',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    url: "https://demoqa.com",
    specPattern: "cypress/e2e/specs/**/*.spec.js",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    }}
  });
