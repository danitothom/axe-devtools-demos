import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { writeFileSync } from 'fs';
import { join } from 'path';
import { mkdirSync } from 'fs';

const resultsDir = './results/';

// Ensure results directory exists
try {
  mkdirSync(resultsDir, { recursive: true });
} catch (error) {
  // Directory already exists
}

test.describe('Blog', () => {
  let results;

  test('has expected landmarks', async ({ page }) => {
    await page.goto('/blog');
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('h1')).toBeVisible();
    
    // Run axe analysis
    results = await new AxeBuilder({ page }).analyze();
    console.log(`axe found ${results.violations.length} violations`);

    // Write results to file
    writeFileSync(
      join(resultsDir, `results-blog-${Date.now()}.json`),
      JSON.stringify(results, null, 2)
    );

    // Basic assertion on results
    expect(results).toBeDefined();
  });

  test.afterAll(async () => {
    // Here you would typically generate HTML and JUnit reports
    // This would need to be implemented with the appropriate axe-core reporting tools
    console.log('Generating accessibility reports...');
    // TODO: Implement reportAsHTML and reportAsJunit functionality
  });
});
