import { expect, type Locator, type Page } from '@playwright/test';

// Class representing the 'Create Clients' page using the Page Object Model (POM) design pattern.
export class CreateClientsPage {
  // Declaring class properties for the page and various buttons (view, create client, and save client).
  readonly page: Page;
  readonly viewButton: Locator;
  readonly newClientHeader: Locator;
  readonly createClientButton: Locator;
  readonly logoutButton: Locator;
  readonly saveButton: Locator;
  readonly backButton: Locator;
  readonly nameField: Locator;
  readonly emailField: Locator;
  readonly telephoneField: Locator;

  // Constructor to initialize the class with a page instance and define locators for the elements:
  constructor(page: Page) {
    // Assign the page passed to the constructor to the class's 'page' property:
    this.page = page;
    this.viewButton = page.locator('#app > div > div > div:nth-child(2) > a');
    this.newClientHeader = page.locator('#app > div > h2 > div');
    this.createClientButton = page.locator('#app > div > h2 > a');
    this.nameField = page.locator('#app > div > div:nth-child(2) > div:nth-child(1) > input[type=text]');
    this.emailField = page.locator('#app > div > div:nth-child(2) > div:nth-child(2) > input[type=email]');
    this.telephoneField = page.locator('#app > div > div:nth-child(2) > div:nth-child(3) > input[type=text]');
    this.logoutButton = page.locator('#app > header > div > div > button');
    this.saveButton = page.locator('#app > div > div.actions > a.btn.blue');
    this.backButton = page.locator('#app > div > div.actions > a:nth-child(1)')
  }

  //Methods:
  // Method to perform a click action on the 'View' button:
  async performView() {
    await this.viewButton.click();
  };

  async performCreateClientButton(){
    await this.createClientButton.click();
  };

  // Method to fill the 'Name' field with a given value:
  async fillNameField(randomClient: string) {
    await this.nameField.fill(randomClient);
  };

  // Method to perform a click action on the '...' button:
  async performSaveButton() {
    await this.saveButton.click();
  };
  async performBackButton() {
    await this.backButton.click();
  };

  async performLogoutButton() {
    await this.logoutButton.click();
  };
}