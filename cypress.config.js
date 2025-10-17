import { defineConfig } from "cypress";


export default defineConfig({
  defaultCommandTimeout: 100000,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    url: "https://demoqa.com",
    specPattern: "cypress/e2e/specs/**/*.spec.js",
    supportFile: "cypress/support/e2e.js"

  }
});
