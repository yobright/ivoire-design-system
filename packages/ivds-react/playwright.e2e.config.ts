import { defineConfig, devices } from 'playwright/test';

export default defineConfig({
  testDir: './e2e',
  testMatch: '**/*.e2e.test.ts',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html', { outputFolder: 'playwright-report/e2e' }],
    ['junit', { outputFile: 'test-results/e2e-junit.xml' }],
  ],
  use: {
    baseURL: 'http://localhost:6038',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
  ],
  webServer: {
    command: 'CI=1 storybook dev --port 6038 --quiet',
    url: 'http://localhost:6038',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});
