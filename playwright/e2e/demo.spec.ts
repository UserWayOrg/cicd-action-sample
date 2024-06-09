import { test, expect } from '@playwright/test';

test('should have the right text in the headline', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('.headline')).toContainText(/Best Broadband/);
  await expect(page.locator('.headline')).toContainText(/Internet Plans For You/);
});
