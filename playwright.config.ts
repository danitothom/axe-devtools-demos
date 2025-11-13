import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './test/playwright',
  timeout: 30000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3033',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'axe-devtools-apis',
      testDir: './test/playwright/axe-devtools-apis',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'axe-watcher',
      testDir: './test/playwright/axe-watcher',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
