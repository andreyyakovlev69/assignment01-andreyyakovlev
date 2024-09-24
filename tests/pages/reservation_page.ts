import { expect, type Locator, type Page } from '@playwright/test';

export class ReservationPage {
  readonly page: Page;
  readonly viewButton: Locator;
  readonly createReservationButton: Locator;
  readonly editReservationMenu: Locator;
  readonly editReservationButton: Locator;
  readonly backButton: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.viewButton = page.locator('#app > div > div > div:nth-child(4) > a');
    this.createReservationButton = page.locator('#app > div > h2 > a');
    this.editReservationMenu = page.getByText('Edit');
    this.editReservationButton = page.locator('#app > div > div.reservations > div > div.action > img');
    this.backButton = page.locator('#app > div > div:nth-child(3) > a');
    this.logoutButton = page.locator('#app > header > div > div > button');
  }

  //Methods:
  async performView() {
    await this.viewButton.click();
  };
  async performCreateReservation() {
    await this.createReservationButton.click();
  };
  async performEditReservationButton() {
    await this.editReservationButton.click();
  };
  async performEditReservationMenu() {
    await this.editReservationMenu.click();
  };
  async performBackButton() {
    await this.backButton.click();
  };
  async performLogoutButton() {
    await this.logoutButton.click();
  };
}