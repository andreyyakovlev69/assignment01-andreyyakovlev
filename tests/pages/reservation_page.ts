import { expect, type Locator, type Page } from '@playwright/test';

export class ReservationPage {
  readonly page: Page;
  readonly viewButton: Locator;
  readonly createReservationButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.viewButton = page.locator('#app > div > div > div:nth-child(4) > a');
    this.createReservationButton = page.locator('#app > div > h2 > a');

  }

  //Methods:
  async performView() {
    await this.viewButton.click();
  };
  async performCreateReservation() {
    await this.createReservationButton.click();
  }
}