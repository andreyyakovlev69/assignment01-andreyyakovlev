import {test, expect} from '@playwright/test';
import {LoginPage} from './pages/login_page';
import {LogoutPage} from './pages/logout_page';
import { ReservationPage } from './pages/reservation_page';
import { RoomsPage } from './pages/rooms_page';
import { faker } from '@faker-js/faker';

test.describe('Test Suite 1', () => {
  let loginPage: LoginPage;
  let reservationPage: ReservationPage;
  let roomsPage: RoomsPage;
  let logoutPage: LogoutPage;
  // Generate random input data:
  const randomStartDate = faker.date.soon().toISOString().split('T')[0]; // YYYY-MM-DD format
  const randomEndDate = faker.date.soon().toISOString().split('T')[0];
  const randomClient = faker.person.fullName();
  const randomRoom = `Floor ${faker.number.int({ min: 1, max: 5 })}, Room ${faker.number.int({ min: 100, max: 500 })}`;

  test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page);
    reservationPage = new ReservationPage(page);
    roomsPage = new RoomsPage(page);
    logoutPage = new LogoutPage(page);


    await loginPage.goto();
    await loginPage.performLogin(`${process.env.TEST_USERNAME}`, `${process.env.TEST_PASSWORD}`);

  })
 test('Test Case 1 Login', async ({ page }) => {
  await expect(page).toHaveURL('http://localhost:3000/');  
  expect(page.getByRole('heading', { name: 'Tester Hotel Overview' })).toBeVisible;
  });

  test('Test Case 2 Reservation', async ({ page }) => {
    await reservationPage.performView();
    expect(page.getByRole('link', { name: 'Create Reservation' })).toBeVisible;
  });

  test('Test Case 3 ReservationCreate', async ({ page }) => {
    await reservationPage.performView();
    expect(page.getByRole('link', { name: 'Create Reservation' })).toBeVisible;
    await reservationPage.performCreateReservation();
    expect(page.getByRole('link', { name: 'New Reservation' })).toBeVisible;
  });

  test('Test Case 4 RoomCreate', async ({ page }) => {
    await roomsPage.performView();
    expect(page.getByRole('link', { name: 'Create Reservation' })).toBeVisible;
    await reservationPage.performCreateReservation();
    expect(page.getByText('New Room')).toBeVisible;
  });

    test('Test Case 5 Logout', async ({ page }) => {
      await expect(page).toHaveURL('http://localhost:3000/');
      await logoutPage.performLogout();
      expect(page.getByRole('heading', { name: 'Login' })).toBeVisible;
  });

  test('Test Case 6 LoginWelcome', async ({ page }) => {
    await expect(page).toHaveURL('http://localhost:3000/');  
    expect(page.getByText('Welcome tester01!')).toBeVisible;
    });

  test('Test Case 7 ReservationEditMenu', async ({ page }) => {
    await reservationPage.performView();
    expect(page.getByRole('img')).toBeVisible;
    await reservationPage.performEditReservationButton();
    await reservationPage.performEditReservationMenu();
    expect(page.getByText('Save')).toBeVisible;
    expect(page.getByText('ID', { exact: true })).toBeVisible;
    expect(page.getByText('Created')).toBeVisible;
    expect(page.getByText('Start (Format YYYY-MM-DD)')).toBeVisible;
    expect(page.getByText('End (Format YYYY-MM-DD)')).toBeVisible;
    expect(page.getByText('Client')).toBeVisible;
    expect(page.getByText('Room', { exact: true })).toBeVisible;
    expect(page.getByText('Bill')).toBeVisible;
    expect(page.getByRole('link', { name: 'Back' })).toBeVisible;
    expect(page.getByText('Delete')).toBeVisible;
    expect(page.locator('div').filter({ hasText: /^Start \(Format YYYY-MM-DD\)$/ }).getByPlaceholder('YYYY-MM-DD')).toBeVisible;
    expect(page.locator('div').filter({ hasText: /^End \(Format YYYY-MM-DD\)$/ }).getByPlaceholder('YYYY-MM-DD')).toBeVisible;
    expect(page.locator('div').filter({ hasText: /^Client- Not selected -Jonas Hellman \(#1\)Mikael Eriksson \(#2\)$/ }).getByRole('combobox')).toBeVisible;
    expect(page.locator('div').filter({ hasText: /^Room- Not selected -Floor 1, Room 101Floor 1, Room 102$/ }).getByRole('combobox')).toBeVisible;
    expect(page.locator('div').filter({ hasText: /^Bill- Not selected -ID: 1$/ }).getByRole('combobox')).toBeVisible;
  });

  test('Test Case 8 ReservationCreateNew', async ({ page }) => {
    await reservationPage.performView();
    expect(page.getByRole('link', { name: 'Create Reservation' })).toBeVisible;
    await reservationPage.performCreateReservation();
    expect(page.getByRole('link', { name: 'New Reservation' })).toBeVisible;


    // Interact with the input fields first:
    const startDateInput = page.locator('div').filter({ hasText: /^Start \(Format YYYY-MM-DD\)$/ }).getByPlaceholder('YYYY-MM-DD');
    const endDateInput = page.locator('div').filter({ hasText: /^End \(Format YYYY-MM-DD\)$/ }).getByPlaceholder('YYYY-MM-DD');
    await startDateInput.waitFor({ state: 'visible' }); // Explicit wait
    await endDateInput.waitFor({ state: 'visible' }); // Explicit wait

    await startDateInput.fill(randomStartDate); // Fill the input fields with randomized dates
    await endDateInput.fill(randomEndDate);
    expect(startDateInput).toBeVisible();
    expect(endDateInput).toBeVisible();
  });

})