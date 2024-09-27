import { expect, type Locator, type Page } from '@playwright/test';

export class ViewClientsPage {
  // Declaring class properties for the page and various buttons:
  readonly page: Page;
  readonly viewButton: Locator;
  readonly editClientMenu: Locator;
  readonly deleteClientButton: Locator;
  readonly editClientButton: Locator;
  readonly logoutButton: Locator;
  readonly createClientButton: Locator;
  readonly backButton: Locator;

  // Constructor to initialize the class with a page instance and define locators for the elements:
  constructor(page: Page) {
    this.page = page;
    this.viewButton = page.locator('#app > div > div > div:nth-child(2) > a');
    this.editClientMenu = page.locator('#app > div > div.clients > div:nth-child(1) > div.action > img');
    this.editClientButton = page.locator('#app > div > div.clients > div:nth-child(1) > div.menu > a:nth-child(1)');
    this.deleteClientButton = page.locator('#app > div > div.clients > div:nth-child(1) > div.menu > a:nth-child(2)');
    this.logoutButton = page.locator('#app > header > div > div > button');
    this.createClientButton = page.locator('#app > div > h2 > a');
    this.backButton = page.locator('#app > div > div:nth-child(3) > a')
  }
    //Methods:
    async navigateToCreateClient() {
      await this.viewButton.click();
      await this.createClientButton.click();
    };
    async navigeteToClientMenu() {
      await this.viewButton.click();
      await this.editClientMenu.click();
      await this.editClientButton.click();
    };
    async navigateToClientDeleteButton() {
      await this.viewButton.click();
      await this.editClientMenu.click();
      await this.deleteClientButton.click();
    };
    async navigateToLogoutButton() {
      await this.viewButton.click();
      await this.viewButton.click();
      await this.logoutButton.click();
    };
    async navigateBack() {
      await this.viewButton.click();
      await this.viewButton.click();
      await this.backButton.click();
    };
  }