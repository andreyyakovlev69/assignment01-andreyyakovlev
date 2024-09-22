import { expect, type Locator, type Page } from '@playwright/test';

// Class representing the 'Clients' page using the Page Object Model (POM) design pattern.
export class ViewClientsPage {
  // Declaring class properties for the page and various buttons (view, create client, and save client).
  readonly page: Page;
  readonly viewButton: Locator;
  readonly logoutButton: Locator;
  readonly createClientButton: Locator;
  readonly backButton: Locator;

  // Constructor to initialize the class with a page instance and define locators for the elements:
  constructor(page: Page) {
    // Assign the page passed to the constructor to the class's 'page' property:
    this.page = page;
    this.viewButton = page.locator('#app > div > div > div:nth-child(2) > a');
    // Define a locator for the 'View' button using a CSS selector:
    this.logoutButton = page.locator('#app > header > div > div > button');
    // Define a locator for the 'Create Client' button using a CSS selector:
    this.createClientButton = page.locator('#app > div > h2 > a');
    // Define a locator for the 'Save Client' button (after creating a client) using a CSS selector:
    this.backButton = page.locator('#app > div > div:nth-child(3) > a')
  }

  //Methods:
  // async goto() {
  //   await this.page.goto('http://localhost:3000/clients');
  // }
  // Method to perform a click action on the 'View' button:
  async performView() {
    await this.viewButton.click();
  };
  async performLogout() {
    await this.logoutButton.click();
  };
  // Method to perform a click action on the 'Create Client' button:
  async performCreateClientButton() {
    await this.createClientButton.click();
  };
  // Method to perform a click action on the 'Save Client' button:
  async performBackButton() {
    await this.backButton.click();
  };

  async performLogoutButton() {
    await this.logoutButton.click();
  };
}