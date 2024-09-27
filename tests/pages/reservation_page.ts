import { expect, type Locator, type Page } from '@playwright/test';

export class ReservationPage {
  readonly page: Page;
  readonly viewButton: Locator;
  readonly createReservationButton: Locator;
  readonly editReservationMenu: Locator;
  readonly editReservationButton: Locator;
  readonly deleteReservationButton: Locator;
  readonly backButton: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.viewButton = page.locator('#app > div > div > div:nth-child(4) > a');
    this.createReservationButton = page.locator('#app > div > h2 > a');
    this.editReservationMenu = page.getByText('Edit');
    this.editReservationButton = page.locator('#app > div > div.reservations > div > div.action > img');
    this.deleteReservationButton = page.locator('#app > div > div.reservations > div > div.menu > a:nth-child(2)');
    this.backButton = page.locator('#app > div > div:nth-child(3) > a');
    this.logoutButton = page.locator('#app > header > div > div > button');
  }
//Methods:
async navigateToCreateReservation() {
  await this.viewButton.click();
  await this.createReservationButton.click();
};
async navigeteToReservationMenu() {
  await this.viewButton.click();
  await this.editReservationMenu.click();
  await this.editReservationButton.click();
};
async navigateToReservationDeleteButton() {
  await this.viewButton.click();
  await this.editReservationMenu.click();
  await this.deleteReservationButton.click();
};
async navigateToLogoutButton() {
  await this.viewButton.click();
  await this.viewButton.click();
  await this.logoutButton.click();
};
async navigateBack() {
  await this.viewButton.click();
  await this.viewButton.click();
  await this.backButton.click();
};
}