import { test, expect } from '@playwright/test';

test.describe('Test Suite 1', () => {
 test('Test Case 1', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  
  //login & assertions:
  await page.goto('http://localhost:3000');
  await expect(page.getByRole('link', { name: 'Tester Hotel' })).toBeVisible(); //assertion
  await page.locator('input[type="text"]').fill('tester01');
  await page.locator('input[type="password"]').fill('GteteqbQQgSr88SwNExUQv2ydb7xuf8c');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Tester Hotel Overview' })).toBeVisible();
  // logout:
  await page.getByRole('button', { name: 'Logout' }).click();
  expect(page.url()).toBe('http://localhost:3000/login'); //assertion
  await expect(page.getByRole('link', { name: 'Tester Hotel' })).toBeVisible(); //assertion

  // explicit wait
  await page.waitForTimeout(2000);
  });
});