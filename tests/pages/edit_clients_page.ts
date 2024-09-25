import { th } from '@faker-js/faker';
import { expect, type Locator, type Page } from '@playwright/test';

// Class representing the 'Edit Clients' page using the Page Object Model (POM) design pattern.
export class EditClientsPage {
  // Declaring class properties for the page and various buttons (view, create client, and save client).
  readonly page: Page;
  readonly viewButton: Locator;
  readonly clientsHeader: Locator;
  readonly idField: Locator;
  readonly createdField: Locator;
  readonly nameField: Locator;
  readonly emailField: Locator;
  readonly telephoneField: Locator;
  readonly saveButton: Locator;
  readonly deleteButton: Locator;
  readonly logoutButton: Locator;
  readonly backButton: Locator;

  // Constructor to initialize the class with a page instance and define locators for the elements:
  constructor(page: Page) {
    // Assign the page passed to the constructor to the class's 'page' property:
    this.page = page;
    this.viewButton = page.locator('#app > div > div > div:nth-child(2) > a');
    this.clientsHeader = page.locator('#app > div > h2 > div');
    this.idField = page.locator('#app > div > div:nth-child(2) > div:nth-child(1) > input[type=text]');
    this.createdField = page.locator('#app > div > div:nth-child(2) > div:nth-child(2) > input[type=text]');
    this.nameField = page.locator('#app > div > div:nth-child(2) > div:nth-child(3) > input[type=text]');
    this.emailField = page.locator('#app > div > div:nth-child(2) > div:nth-child(4) > input[type=email]');
    this.telephoneField = page.locator('#app > div > div:nth-child(2) > div:nth-child(5) > input[type=text]');
    this.saveButton = page.locator('#app > div > div.actions > a.btn.blue');
    this.deleteButton = page.locator('#app > div > h2 > a');
    this.logoutButton = page.locator('#app > header > div > div > button');
    this.backButton = page.locator('#app > div > div.actions > a:nth-child(1)')
  }
  //Methods:
  // Method to perform a click action on the 'View' button:
  async performView() {
    await this.viewButton.click();
  };

  async performClientMenuButton(){
    await this.clientMenuButton.click();
  };

  // Method to perform a click action on the '...' buttons:
  async performEditButton() {
    await this.editButton.click();
  };
  async performBackButton() {
    await this.backButton.click();
  };
}