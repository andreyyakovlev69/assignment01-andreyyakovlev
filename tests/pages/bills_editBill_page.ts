import { expect, type Locator, type Page } from '@playwright/test';

export class BillsPage {
  // Declaring class properties for the page and various buttons:
  readonly page: Page;
  readonly viewButton: Locator;
  readonly valueField: Locator;
  readonly paidField: Locator;
  readonly saveButton: Locator;
  readonly logoutButton: Locator;
  readonly backButton: Locator;

  // Constructor to initialize the class with a page instance and define locators for the elements:
  constructor(page: Page) {
    this.page = page;
    this.viewButton = page.locator('#app > div > div > div:nth-child(3) > a');
    this.valueField = page.locator('#app > div > div:nth-child(2) > div:nth-child(1) > input[type=number]');
    this.paidField = page.locator('#app > div > div:nth-child(2) > div:nth-child(2) > div');
    this.saveButton = page.locator('#app > div > div.actions > a.btn.blue');
    this.logoutButton = page.locator('#app > header > div > div > button');
    this.backButton = page.locator('#app > div > div.actions > a:nth-child(1)')
  }

  //Methods:
  // Method to perform a click action on the 'View' button:
  async performView() {
    await this.viewButton.click();
  };

  async fillValueField(randomPrice: string) {
    await this.valueField.fill(randomPrice);
  };
  async performPaidField() {
    await this.paidField.click();
  };
  async performBackButton() {
    await this.backButton.click();
  };
  async performLogoutButton() {
    await this.logoutButton.click();
  };
}