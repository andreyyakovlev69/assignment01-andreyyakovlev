import { expect, type Locator, type Page } from '@playwright/test';

export class CreateClientPage {
  readonly page: Page;
  readonly viewButton: Locator;
  readonly newClientHeader: Locator;
  readonly createClientButton: Locator;
  readonly logoutButton: Locator;
  readonly saveButton: Locator;
  readonly backButton: Locator;
  readonly nameField: Locator;
  readonly emailField: Locator;
  readonly phoneField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.viewButton = page.locator('#app > div > div > div:nth-child(2) > a');
    this.newClientHeader = page.locator('#app > div > h2 > div');
    this.createClientButton = page.getByRole('link', { name: 'Create Client' });
    this.nameField = page.locator('#app > div > div:nth-child(2) > div:nth-child(1) > input[type=text]');
    this.emailField = page.locator('#app > div > div:nth-child(2) > div:nth-child(2) > input[type=email]');
    this.phoneField = page.locator('#app > div > div:nth-child(2) > div:nth-child(3) > input[type=text]');
    this.logoutButton = page.locator('#app > header > div > div > button');
    this.saveButton = page.locator('#app > div > div.actions > a.btn.blue');
    this.backButton = page.locator('#app > div > div.actions > a:nth-child(1)')
  }

  async performCreateClient(randomClient: string, randomEmail: string, randomPhone: string){
    await this.viewButton.click();
    await this.createClientButton.click();
    await this.nameField.fill(randomClient);
    await this.emailField.fill(randomEmail);
    await this.phoneField.fill(randomPhone);
    await this.saveButton.click();
  };

  async performBackButton() {
    await this.backButton.click();
  };

  async performLogoutButton() {
    await this.logoutButton.click();
  };

   async performSaveButton() {
    await this.saveButton.click();
  };
}