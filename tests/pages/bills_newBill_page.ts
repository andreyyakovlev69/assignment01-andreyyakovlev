import { expect, type Locator, type Page } from '@playwright/test';

export class BillsNewBillPage {
  readonly page: Page;
  readonly viewButton: Locator;
  readonly createBillButton: Locator;
  readonly valueField: Locator;
  readonly paidField: Locator;
  readonly saveButton: Locator;
  readonly logoutButton: Locator;
  readonly backButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.viewButton = page.locator('#app > div > div > div:nth-child(3) > a');
    this.createBillButton = page.getByRole('link', { name: 'Create Bill' });
    this.valueField = page.locator('#app > div > div:nth-child(2) > div:nth-child(1) > input[type=number]');
    this.paidField = page.locator('#app > div > div:nth-child(2) > div:nth-child(2) > div');
    this.saveButton = page.locator('#app > div > div.actions > a.btn.blue');
    this.logoutButton = page.locator('#app > header > div > div > button');
    this.backButton = page.locator('#app > div > div.actions > a:nth-child(1)')
  }

  //Methods:
  async performCreateNewBill(){
    await this.viewButton.click();
    await this.createBillButton.click();
    await this.valueField.press('5');
    await this.valueField.press('0');
    await this.valueField.press('0');
    await this.valueField.press('0');
    await this.paidField.click();
    await this.saveButton.click()
  };
  
  async performBackButton() {
    await this.backButton.click();
  };
  async performLogoutButton() {
    await this.logoutButton.click();
  };
}