import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { writeFileSync } from 'fs';
import { join } from 'path';

const resultsDir = './results/';

test.describe('Dashboard', () => {
  let results;

  test('has expected page structure', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();

    // Run axe analysis
    results = await new AxeBuilder({ page }).analyze();
    console.log(`axe found ${results.violations.length} violations`);

    writeFileSync(
      join(resultsDir, `results-dashboard-${Date.now()}.json`),
      JSON.stringify(results, null, 2)
    );

    expect(results).toBeDefined();
  });

  test.afterAll(async () => {
    console.log('Generating accessibility reports...');
    // TODO: Implement reportAsHTML and reportAsJunit functionality
  });
});
