import { test, expect } from './fixtures';

test.describe('Settings', () => {
  test('has the expected form fields', async ({ page }) => {
    await page.goto('http://localhost:3033/settings');
    const form = page.locator('form');
    await expect(form).toBeVisible();
    await expect(form.locator('h2')).toContainText('Theme');
    await expect(form.locator('[type="radio"][value="dark"]')).toBeVisible();
    await expect(form.locator('[type="radio"][value="light"]')).toBeVisible();
    await expect(form.locator('button[type="submit"]')).toBeVisible();
  });

  test.describe('dark theme', () => {
    test('should be activated when form is submitted with "dark" selected', async ({ page }) => {
      await page.goto('http://localhost:3033/settings');
      await expect(page.locator('body.cauldron--theme-dark')).not.toBeVisible();
      await page.locator('form [type="radio"][value="dark"]').click();
      await page.locator('form button[type="submit"]').click();
      await expect(page.locator('body.cauldron--theme-dark')).toBeVisible();
    });
  });
});
