import {test, expect} from '@playwright/test';
import {LoginPage} from './pages/login_page';
import {LogoutPage} from './pages/logout_page';
import { ReservationPage } from './pages/reservation_page';
import { RoomsPage } from './pages/rooms_page';
import { ViewClientsPage } from './pages/view_clients_page';
import { faker } from '@faker-js/faker';

test.describe('Test Suite 1', () => {
  let loginPage: LoginPage;
  let reservationPage: ReservationPage;
  let roomsPage: RoomsPage;
  let logoutPage: LogoutPage;
  let viewClientsPage: ViewClientsPage;
  // Generate random input data:
  const randomStartDate = faker.date.soon().toISOString().split('T')[0];
  const randomEndDate = faker.date.soon().toISOString().split('T')[0];
  const randomClient = faker.person.fullName();
  const randomEmail = faker.internet.email();
  const randomPhone = faker.phone.number();

  test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page);
    reservationPage = new ReservationPage(page);
    roomsPage = new RoomsPage(page);
    logoutPage = new LogoutPage(page);
    viewClientsPage = new ViewClientsPage(page);

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

    const startDateInput = page.locator('div').filter({ hasText: /^Start \(Format YYYY-MM-DD\)$/ }).getByPlaceholder('YYYY-MM-DD');
    const endDateInput = page.locator('div').filter({ hasText: /^End \(Format YYYY-MM-DD\)$/ }).getByPlaceholder('YYYY-MM-DD');
    
    await startDateInput.fill(randomStartDate);
    await endDateInput.fill(randomEndDate);
    expect(startDateInput).toBeVisible();
    expect(endDateInput).toBeVisible();
  });

  test('Test Case 9 Clients', async ({ page }) => {
    await viewClientsPage.performView();
    expect(page.getByRole('link', { name: 'Create Client' })).toBeVisible;
    await clientsPage.performCreateClientButton();
    expect(page.getByText('New Client')).toBeVisible;
  });

  test('Test Case 10 Clients Create New', async ({ page }) => {
    await viewClientsPage.performView();
    await viewClientsPage.performCreateClientButton();

    const clientInput = page.locator('div').filter({ hasText: /^Name$/ }).getByRole('textbox');
    await clientInput.fill(randomClient);
    expect (clientInput).toBeVisible;

    const emailInput = page.locator('input[type="email"]');
    await emailInput.fill(randomEmail);
    expect(emailInput).toBeVisible;

    const phoneInput = page.locator('div').filter({ hasText: /^Telephone$/ }).getByRole('textbox');
    await phoneInput.fill(randomPhone);
    expect(phoneInput).toBeVisible;

    await clientsPage.performSaveClientButton();

    const clientInList = page.locator('div.clients h3').filter({ hasText: randomClient });
    await clientInList.waitFor({ state: 'visible' });
    await expect(clientInList).toBeVisible();
  
  });

})