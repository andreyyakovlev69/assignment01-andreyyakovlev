import { expect, type Locator, type Page } from '@playwright/test';

export class RoomsPage {
  readonly page: Page;
  readonly viewButton: Locator;
  readonly createRoomButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.viewButton = page.locator('#app > div > div > div:nth-child(1) > a');
    this.createRoomButton = page.locator('#app > div > h2 > a');

  }

  //Methods:
  async performView() {
    await this.viewButton.click();
  };
  async performCreateReservation() {
    await this.createRoomButton.click();
  }
}