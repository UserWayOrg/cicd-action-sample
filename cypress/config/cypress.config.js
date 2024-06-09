import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    screenshotOnRunFailure: false,
    baseUrl: 'http://localhost:1342',
    defaultCommandTimeout: 10000
  }
});
