import { expect, type Locator, type Page } from '@playwright/test';

export class ClientsPage {
  readonly page: Page;
  readonly viewButton: Locator;
  readonly createClientButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.viewButton = page.locator('#app > div > div > div:nth-child(2) > a');
    this.createClientButton = page.locator('#app > div > h2 > a');
  }

  //Methods:
  async performView() {
    await this.viewButton.click();
  };
  async performCreateClientButton() {
    await this.createClientButton.click();
  };
  async performSaveClientButton() {
    await this.createClientButton.click();
  };
}