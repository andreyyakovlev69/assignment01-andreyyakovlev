import {test, expect} from '@playwright/test';
import {LoginPage} from './pages/login_page';
import {LogoutPage} from './pages/logout_page';
import { ReservationPage } from './pages/reservation_page';

test.describe('Test Suite 1', () => {
 test('Test Case 1', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const logoutPage = new LogoutPage(page);
  const reservationPage = new ReservationPage(page);
  await loginPage.goto();
  await loginPage.performLogin(`${process.env.TEST_USERNAME}`, `${process.env.TEST_PASSWORD}`);
  await expect(page).toHaveURL('http://localhost:3000/');  
  expect(page.getByRole('heading', { name: 'Tester Hotel Overview' })).toBeVisible;
  await reservationPage.performView();
  expect(page.getByText('Reservations')).toBeVisible;

  //apply following later:
  //await logoutPage.performLogout();
  //await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible;
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
