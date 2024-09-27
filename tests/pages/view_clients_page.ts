import { expect, type Locator, type Page } from '@playwright/test';

export class ViewClientsPage {
  readonly page: Page;
  readonly viewButton: Locator;
  readonly editClientMenu: Locator;
  readonly deleteClientButton: Locator;
  readonly editClientButton: Locator;
  readonly logoutButton: Locator;
  readonly createClientButton: Locator;
  readonly backButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.viewButton = page.locator('#app > div > div > div:nth-child(2) > a');
    this.editClientMenu = page.locator('img').first();
    this.editClientButton = page.getByText('Edit');
    this.deleteClientButton = page.getByText('Delete');
    this.logoutButton = page.getByRole('button', { name: 'Logout' });
    this.createClientButton = page.getByRole('link', { name: 'Create Client' });
    this.backButton = page.getByRole('link', { name: 'Back' });
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