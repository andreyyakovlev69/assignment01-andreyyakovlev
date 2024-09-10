import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login_page'

test.describe('Test Suite 1', () => {
 test('Test Case 1', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.performLogin(`${process.env.TEST_USERNAME}`, `${process.env.TEST_PASSWORD}`);
  await expect(page).toHaveURL('http://localhost:3000/');  
  expect(page.getByRole('heading', { name: 'Tester Hotel Overview' })).toBeVisible;
  });
})
  /**
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
  await expect(page.getByRole('link', { name: 'Tester Hotel' })).toBeVisible();*/
