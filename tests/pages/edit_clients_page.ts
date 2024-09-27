//import { th } from '@faker-js/faker';
import { expect, type Locator, type Page } from '@playwright/test';

// Class representing the 'Edit Clients' page using the POM design pattern:
export class EditClientsPage {
  // Declaring class atributes for the page and various buttons:
  readonly page: Page;
  readonly viewButton: Locator;
  readonly editClientMenu: Locator;
  readonly editClientButton: Locator;
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
    this.editClientMenu = page.locator('#app > div > div.clients > div:nth-child(1) > div.action > img');
    this.editClientButton = page.locator('#app > div > div.clients > div:nth-child(1) > div.menu > a:nth-child(1)');
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
  async performClientEdit(randomClient, randomEmail, randomPhone){
    await this.viewButton.click();
    await this.editClientMenu.click();
    await this.editClientButton.click();
    await this.nameField.fill(randomClient);
    await this.emailField.fill(randomEmail);
    await this.telephoneField.fill(randomPhone);
    await this.saveButton.click()
  };
    async performDeleteButton() {
    await this.deleteButton.click();
  };
  async performBackButton() {
    await this.backButton.click();
  };
}