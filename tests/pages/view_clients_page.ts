import { expect, type Locator, type Page } from '@playwright/test';

export class ViewClientsPage {
  // Declaring class properties for the page and various buttons:
  readonly page: Page;
  readonly viewButton: Locator;
  readonly logoutButton: Locator;
  readonly createClientButton: Locator;
  readonly backButton: Locator;

  // Constructor to initialize the class with a page instance and define locators for the elements:
  constructor(page: Page) {
    this.page = page;
    this.viewButton = page.locator('#app > div > div > div:nth-child(2) > a');
    this.logoutButton = page.locator('#app > header > div > div > button');
    this.createClientButton = page.locator('#app > div > h2 > a');
    this.backButton = page.locator('#app > div > div:nth-child(3) > a')
  }

  //Methods:
  // Method to perform a click action on the 'View' button:
  async performView() {
    await this.viewButton.click();
  };

  // Method to perform a click action on the 'Create Client' button:
  async performCreateClientButton() {
    await this.createClientButton.click();
  };
  async performBackButton() {
    await this.backButton.click();
  };

  async performLogoutButton() {
    await this.logoutButton.click();
  };
}