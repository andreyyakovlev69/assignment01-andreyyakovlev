//import { th } from '@faker-js/faker';
import { expect, type Locator, type Page } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly logoutButton: Locator;
  readonly roomsViewButton: Locator;
  readonly clientsViewButton: Locator;
  readonly billsViewButton: Locator;
  readonly reservationsViewButton: Locator;
  readonly testerHotelOverviewHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logoutButton = page.getByRole('button', { name: 'Logout' });
    this.roomsViewButton = page.locator("#app > div > div > div:nth-child(1) > a");
    this.clientsViewButton = page.locator('#app > div > div > div:nth-child(2) > a');
    this.billsViewButton = page.locator('div').filter({ hasText: /^BillsTotal: / }).getByRole('link');
    this.reservationsViewButton = page.locator('div').filter({ hasText: /^ReservationsTotal: / }).getByRole('link');
    this.testerHotelOverviewHeader = page.getByRole('heading', { name: 'Tester Hotel Overview' });
  }
  //Methods:
  async navigateToRooms() {
    await this.roomsViewButton.click();
  };
  async navigateToClient() {
    await this.clientsViewButton.click();
  };
  async navigateToBills() {
    await this.billsViewButton.click();
  };
  async navigateToReservation() {
    await this.reservationsViewButton.click();
  };
  async performLogout() {
    await this.logoutButton.click();
  };
}