import { expect, type Locator, type Page } from '@playwright/test';

export class LogoutPage {
  readonly page: Page;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logoutButton = page.getByRole('button', { name: 'Logout' });
  }

  //Methods:
  async performLogout() {
    await this.logoutButton.click();
  }
}