import { expect, type Locator, type Page } from '@playwright/test';

export class RoomsPage {
  readonly page: Page;
  readonly viewButton: Locator;
  readonly createRoomButton: Locator;
  readonly logoutButton: Locator;
  readonly saveButton: Locator;
  readonly backButton: Locator;
  readonly categoryField: Locator;
  readonly numberField: Locator;
  readonly floorField: Locator;
  readonly availableField: Locator;
  readonly priceField: Locator;
  readonly featuresField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.viewButton = page.locator('#app > div > div > div:nth-child(1) > a');
    this.createRoomButton = page.locator('#app > div > h2 > a');
    this.logoutButton = page.locator('#app > header > div > div > button');
    this.saveButton = page.locator('#app > div > div.actions > a.btn.blue');
    this.backButton = page.locator('#app > div > div.actions > a:nth-child(1)');
    this.categoryField = page.locator('#app > div > div:nth-child(2) > div:nth-child(1) > select');
    this.numberField = page.locator('#app > div > div:nth-child(2) > div:nth-child(2) > input[type=number]');
    this.floorField = page.locator('#app > div > div:nth-child(2) > div:nth-child(3) > input[type=number]');
    this.availableField = page.locator('#app > div > div:nth-child(2) > div:nth-child(4) > div');
    this.priceField = page.locator('#app > div > div:nth-child(2) > div:nth-child(5) > input[type=number]');
    this.featuresField = page.locator('#app > div > div:nth-child(2) > div:nth-child(6) > select');
  }

  //Methods:
  async performView() {
    await this.viewButton.click();
  };
  async performCreateReservation() {
    await this.createRoomButton.click();
  }
}