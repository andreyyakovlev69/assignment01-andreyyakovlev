import {test, expect} from '@playwright/test';
import { faker } from '@faker-js/faker';
import {LoginPage} from './pages/login_page';
import {LogoutPage} from './pages/logout_page';
import { BillsPage } from './pages/bills_page';
import { BillsNewBillPage } from './pages/bills_newBill_page';
import { BillsEditBillPage } from './pages/bills_editBill_page';
import { ReservationPage } from './pages/reservation_page';
import { NewReservationPage } from './pages/reservation_newReservation_page';
import { EditReservationPage } from './pages/reservation_editReservation_page';
import { RoomsPage } from './pages/rooms_page';
import { RoomsNewRoomPage } from './pages/rooms_newRoom_page';
import { RoomsEditRoomPage } from './pages/rooms_editRoom_page';
import { ViewClientsPage } from './pages/view_clients_page';
import { CreateClientPage } from './pages/create_client_page';
import { EditClientsPage } from './pages/edit_clients_page';
import { DashboardPage } from './pages/dashboard_page';

test.describe('Test Suite 1', () => {
  let loginPage: LoginPage;
  let billsPage: BillsPage;
  let billsEditBillPage: BillsEditBillPage;
  let billsNewBillPage: BillsNewBillPage;
  let reservationPage: ReservationPage;
  let newReservationPage: NewReservationPage;
  let editReservationPage: EditReservationPage;
  let roomsPage: RoomsPage;
  let roomsNewRoomPage: RoomsNewRoomPage;
  let roomsEditRoomPage: RoomsEditRoomPage;
  let logoutPage: LogoutPage;
  let viewClientsPage: ViewClientsPage;
  let createClientPage: CreateClientPage;
  let editClientsPage: EditClientsPage;
  let dashboardPage: DashboardPage;

  // Generate random input data:
  let randomStartDate = faker.date.soon({ days: 10 }).toISOString().split('T')[0];
  let randomEndDate = faker.date.soon({ days: 4, refDate: randomStartDate}).toISOString().split('T')[0];
  const randomClient = faker.person.fullName();
  const randomEmail = faker.internet.email();
  const randomPhone = faker.phone.number();
  const randomNumber = faker.number.int({ min: 1,max: 500}).toString();
  const randomFloor = faker.number.int({ min: 1,max: 5}).toString();
  const randomPrice = faker.number.int({ min: 5000,max: 9000}).toString();

  test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page);
    logoutPage = new LogoutPage(page);
    billsPage = new BillsPage(page);
    billsNewBillPage = new BillsNewBillPage(page);
    billsEditBillPage = new BillsEditBillPage(page);
    reservationPage = new ReservationPage(page);
    newReservationPage = new NewReservationPage(page);
    editReservationPage = new EditReservationPage(page);
    roomsPage = new RoomsPage(page);
    roomsNewRoomPage = new RoomsNewRoomPage(page);
    roomsEditRoomPage = new RoomsEditRoomPage(page);
    viewClientsPage = new ViewClientsPage(page);
    createClientPage = new CreateClientPage(page);
    editClientsPage = new EditClientsPage(page);
    dashboardPage = new DashboardPage(page);

    await loginPage.goto();
    await loginPage.performLogin(`${process.env.TEST_USERNAME}`, `${process.env.TEST_PASSWORD}`);

  })
  test('Test Case 01 Client New Create', async ({ page }) => {
    await createClientPage.performCreateClient(randomClient, randomEmail, randomPhone);
    expect(page.getByText('Clients')).toBeVisible;
  });

  test('Test Case 02 Bill New Create', async ({ page }) => {
    await billsNewBillPage.performCreateNewBill();
    expect(page.getByRole('spinbutton')).toBeVisible;
    expect(page.getByText('✓')).toBeVisible;
    expect(page.getByText('Bills')).toBeVisible
  });

  test('Test Case 03 Reservation New Create', async ({ page }) => {
    await newReservationPage.performCreateNewReservation(randomStartDate, randomEndDate);
    expect(page.getByText('Reservations')).toBeVisible
  });

  test('Test Case 04 Room New Create', async ({ page }) => {
    await roomsNewRoomPage.performCreateNewRoom(randomNumber, randomFloor, randomPrice);
    expect(page.getByText('Rooms')).toBeVisible
  });

  test('Test Case 05 Bills Edit', async ({ page }) => {
    await billsEditBillPage.performBillsEdit(randomPrice);
    expect(page.getByText('Bills')).toBeVisible
  });

  test('Test Case 06 Rooms Edit', async ({ page }) => {
    await roomsEditRoomPage.performRoomsEdit(randomPrice, randomNumber, randomFloor);
    await expect(page).toHaveURL('http://localhost:3000/rooms');
    expect(page.getByText('Rooms')).toBeVisible
  });

  test('Test Case 07 Client Edit', async ({ page }) => {
    await editClientsPage.performClientEdit(randomClient, randomEmail, randomPhone);
    await expect(page).toHaveURL('http://localhost:3000/clients');
    expect(page.getByText('Clients')).toBeVisible
  });

  test('Test Case 08 Reservation Edit', async ({ page }) => {
    await editReservationPage.performReservationEdit(randomStartDate, randomEndDate);
    await expect(page).toHaveURL('http://localhost:3000/reservations');
    expect(page.getByText('Reservations')).toBeVisible
  });

  test('Test Case 09 Login', async ({ page }) => {
    await expect(page).toHaveURL('http://localhost:3000/');
    expect(page.getByRole('heading', { name: 'Tester Hotel Overview' })).toBeVisible;
  });

  test('Test Case 10 Rooms Navigate To Create Room', async ({ page }) => {
    await roomsPage.navigateToCreateRoom();
    await expect(page).toHaveURL('http://localhost:3000/room/new');
    expect(page.getByText('New Room')).toBeVisible;
  });

  test('Test Case 11 Rooms Navigate To Edit Room', async ({ page }) => {
    await roomsPage.navigeteToRoomMenuButton();
    expect(page.getByText('ID')).toBeVisible;
  });

  test('Test Case 12 Rooms Navigate To Delete Room', async ({ page }) => {
    await roomsPage.navigateToRoomDeleteButton();
    expect(page.getByText('Delete')).toBeVisible;
  });

  test('Test Case 13 Rooms Navigate To Logout', async ({ page }) => {
    await roomsPage.navigateToLogoutButton();
    await expect(page).toHaveURL('http://localhost:3000/login');
  });

  test('Test Case 14 Rooms Navigate Back', async ({ page }) => {
    await roomsPage.navigateBack();
    await expect(page).toHaveURL('http://localhost:3000');
    expect(page.getByRole('heading', { name: 'Tester Hotel Overview' })).toBeVisible;
  });

  test('Test Case 15 Clients Navigate To Create Client', async ({ page }) => {
    await viewClientsPage.navigateToCreateClient();
    await expect(page).toHaveURL('http://localhost:3000/client/new');
    expect(page.getByText('New Client')).toBeVisible;
  });

  test('Test Case 16 Reservations Navigate To Create Reservation', async ({ page }) => {
    await reservationPage.navigateToCreateReservation();
    await expect(page).toHaveURL('http://localhost:3000/reservation/new');
    expect(page.getByText('New Reservation')).toBeVisible;
  });

  test('Test Case 17 Bills Navigate To Create Bill', async ({ page }) => {
    await billsPage.navigateToCreateBill();
    await expect(page).toHaveURL('http://localhost:3000/bill/new');
    expect(page.getByText('New Bill')).toBeVisible;
  });

  test('Test Case 18 Dasboard Navigation', async ({ page }) => {
    await logoutPage.performLogout();
    await expect(page).toHaveURL('http://localhost:3000/login');
    expect(page.getByRole('heading', { name: 'Login' })).toBeVisible;
  });
  test('Test Case 19 Dasboard Navigation To Rooms', async ({ page }) => {
    await dashboardPage.navigateToRooms();
    await expect(page).toHaveURL('http://localhost:3000/rooms');
    expect(page.getByText('Rooms')).toBeVisible;
  });
  test('Test Case 20 Dasboard Navigation To Clients', async ({ page }) => {
    await dashboardPage.navigateToClient();
    await expect(page).toHaveURL('http://localhost:3000/clients');
    expect(page.getByText('Clients')).toBeVisible;
  });
  test('Test Case 21 Dasboard Navigation To Bills', async ({ page }) => {
    await dashboardPage.navigateToBills();
    await expect(page).toHaveURL('http://localhost:3000/bills');
    expect(page.getByText('Bills')).toBeVisible;
  });
  test('Test Case 22 Dasboard Navigation To Reservations', async ({ page }) => {
    await dashboardPage.navigateToReservation();
    await expect(page).toHaveURL('http://localhost:3000/reservations');
    expect(page.getByText('Reservations')).toBeVisible;
  });
})