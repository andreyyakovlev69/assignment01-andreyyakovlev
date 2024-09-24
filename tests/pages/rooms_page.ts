import { expect, type Locator, type Page } from '@playwright/test';

export class RoomsPage {
  readonly page: Page;
  readonly viewButton: Locator;
  readonly backButton: Locator;
  readonly logoutButton: Locator;
  readonly createRoomButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.viewButton = page.locator('#app > div > div > div:nth-child(1) > a');
    this.createRoomButton = page.locator('#app > div > h2 > a');
    this.logoutButton = page.locator('#app > header > div > div > button');
    this.backButton = page.locator('#app > div > div:nth-child(3) > a');
  }

  //Methods:
  async performView() {
    await this.viewButton.click();
  };
  async performCreateRoomButton() {
    await this.createRoomButton.click();
  };
  async performLogoutButton() {
    await this.logoutButton.click();
  };
  async performBackButton() {
    await this.backButton.click();
  };
}