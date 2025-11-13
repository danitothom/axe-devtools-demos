import { test, expect } from './fixtures';

test.describe('Dashboard', () => {
  test('has expected nav items', async ({ page }) => {
    await page.goto('http://localhost:3033');
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('nav a[href="/"]')).toBeVisible();
    await expect(page.locator('nav a[href="/settings"]')).toBeVisible();
  });

  test('has expected page structure', async ({ page }) => {
    await page.goto('http://localhost:3033');
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });
});
