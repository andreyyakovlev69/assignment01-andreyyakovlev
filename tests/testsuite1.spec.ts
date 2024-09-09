import { test, expect } from '@playwright/test';

test.describe('Test Suite 1', () => {
 test('Test Case 1', async ({ page }) => {
  
  //login & assertions:
  await page.goto(`${process.env.BASE_URL}`);
  await expect(page.getByRole('link', { name: 'Tester Hotel' })).toBeVisible(); //assertion
  await page.locator('input[type="text"]').fill(`${process.env.TEST_USERNAME}`);
  await page.locator('input[type="password"]').fill(`${process.env.TEST_PASSWORD}`);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Tester Hotel Overview' })).toBeVisible();
  // logout:
  await page.getByRole('button', { name: 'Logout' }).click();
  expect(page.url()).toBe('http://localhost:3000/login');
  await expect(page.getByRole('link', { name: 'Tester Hotel' })).toBeVisible();

  // explicit wait
  await page.waitForTimeout(2000);
  });
});