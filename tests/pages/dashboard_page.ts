import { th } from '@faker-js/faker';
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
    this.roomsViewButton = page.locator('div').filter({ hasText: /^RoomsNumber: 0View$/ }).getByRole('link');
    this.clientsViewButton = page.locator('div').filter({ hasText: /^ClientsNumber: 2View$/ }).getByRole('link');
    this.billsViewButton = page.locator('div').filter({ hasText: /^BillsTotal: 1 \(4500kr\)Paid: 0 \(0kr\)View$/ }).getByRole('link');
    this.reservationsViewButton = page.locator('div').filter({ hasText: /^ReservationsTotal: 26Current: 2View$/ }).getByRole('link');
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