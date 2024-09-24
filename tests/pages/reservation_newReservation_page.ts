import { expect, type Locator, type Page } from '@playwright/test';

export class NewReservationPage {
  readonly page: Page;
  readonly viewButton: Locator;
  readonly startField: Locator;
  readonly endField: Locator;
  readonly clientField: Locator;
  readonly roomField: Locator;
  readonly billField: Locator;
  readonly backButton: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.viewButton = page.locator('#app > div > div > div:nth-child(4) > a');
    this.startField = page.locator('#app > div > div:nth-child(2) > div:nth-child(1) > input[type=text]');
    this.endField = page.locator('#app > div > div:nth-child(2) > div:nth-child(2) > input[type=text]');
    this.clientField = page.locator('#app > div > div:nth-child(2) > div:nth-child(3) > select > option:nth-child(2)');
    this.roomField = page.locator('#app > div > div:nth-child(2) > div:nth-child(4) > select > option:nth-child(2)');
    this.billField = page.locator('#app > div > div:nth-child(2) > div:nth-child(5) > select > option:nth-child(2)');
    this.backButton = page.locator('#app > div > div:nth-child(3) > a');
    this.logoutButton = page.locator('#app > header > div > div > button');
  }

  //Methods:
  async performView() {
    await this.viewButton.click();
  };
  
  async performBackButton() {
    await this.backButton.click();
  };
  async performLogoutButton() {
    await this.logoutButton.click();
  };
}