import { expect, type Locator, type Page } from '@playwright/test';

export class RoomsPage {
  readonly page: Page;
  readonly viewButton: Locator;
  readonly backButton: Locator;
  readonly roomMenuButton: Locator;
  readonly roomEditButton: Locator;
  readonly roomDeleteButton: Locator;
  readonly logoutButton: Locator;
  readonly createRoomButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.viewButton = page.locator('#app > div > div > div:nth-child(1) > a');
    this.createRoomButton = page.locator('#app > div > h2 > a');
    this.roomMenuButton = page.locator('#app > div > div.rooms > div:nth-child(1) > div.action > img');
    this.roomEditButton = page.locator('#app > div > div.rooms > div:nth-child(1) > div.menu > a:nth-child(1)');
    this.roomDeleteButton = page.locator('#app > div > div.rooms > div:nth-child(1) > div.menu > a:nth-child(2)');
    this.logoutButton = page.locator('#app > header > div > div > button');
    this.backButton = page.getByRole('link', { name: 'Back' });
  }

  //Methods:
  async navigateToCreateRoom() {
    await this.viewButton.click();
    await this.createRoomButton.click();
  };
  async navigeteToRoomMenuButton() {
    await this.viewButton.click();
    await this.roomMenuButton.click();
    await this.roomEditButton.click();
  };
  async navigateToRoomDeleteButton() {
    await this.viewButton.click();
    await this.roomMenuButton.click();
    await this.roomDeleteButton.click();
  };
  async navigateToLogoutButton() {
    await this.viewButton.click();
    await this.logoutButton.click();
  };
  async navigateBack() {
    await this.viewButton.click();
    await this.backButton.click();
  };
}