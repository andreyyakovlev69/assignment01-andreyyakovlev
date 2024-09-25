import { expect, type Locator, type Page } from '@playwright/test';

export class BillsPage {
  // Declaring class properties for the page and various buttons:
  readonly page: Page;
  readonly viewButton: Locator;
  readonly logoutButton: Locator;
  readonly createBillButton: Locator;
  readonly editBillMenu: Locator;
  readonly editBillButton: Locator;
  readonly backButton: Locator;

  // Constructor to initialize the class with a page instance and define locators for the elements:
  constructor(page: Page) {
    this.page = page;
    this.editBillMenu = page.locator('#app > div > div.bills > div > div.action > img');
    this.editBillButton = page.locator('#app > div > div.bills > div > div.menu > a:nth-child(1)');
    this.viewButton = page.locator('#app > div > div > div:nth-child(3) > a');
    this.logoutButton = page.locator('#app > header > div > div > button');
    this.createBillButton = page.locator('#app > div > h2 > a');
    this.backButton = page.locator('#app > div > div:nth-child(3) > a')
  }

  //Methods:
  // Method to perform a click action on the 'View' button:
  async performView() {
    await this.viewButton.click();
  };

  // Method to perform a click action on the 'Create Client' button:
  async performCreateClientButton() {
    await this.createBillButton.click();
  };
  async performBackButton() {
    await this.backButton.click();
  };

  async performLogoutButton() {
    await this.logoutButton.click();
  };
}