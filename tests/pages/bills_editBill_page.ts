//import { th } from '@faker-js/faker';
import { expect, type Locator, type Page } from '@playwright/test';

export class BillsEditBillPage {
  readonly page: Page;
  readonly viewButton: Locator;
  readonly editBillMenu: Locator;
  readonly editBillButton: Locator;
  readonly valueField: Locator;
  readonly paidField: Locator;
  readonly saveButton: Locator;
  readonly deleteButton: Locator;
  readonly logoutButton: Locator;
  readonly backButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.viewButton = page.locator('#app > div > div > div:nth-child(3) > a');
    this.editBillMenu = page.locator('.action').first();
    this.editBillButton = page.locator('#app > div > div.bills > div > div.menu > a:nth-child(1)');
    this.valueField = page.getByRole('spinbutton');
    this.paidField = page.locator('.checkbox');
    this.saveButton = page.getByText('Save');
    this.deleteButton = page.locator('#app > div > h2 > a');
    this.logoutButton = page.locator('#app > header > div > div > button');
    this.backButton = page.locator('#app > div > div.actions > a:nth-child(1)')
  }

  //Methods:
  async performBillsEdit(randomPrice: string){
    await this.viewButton.click();
    await this.editBillMenu.click();
    await this.editBillButton.click();
    await this.valueField.fill(randomPrice);
    await this.paidField.click();
    await this.saveButton.click()
  };  
  async performBackButton() {
    await this.backButton.click();
  };
  async performDeleteButton() {
    await this.deleteButton.click();
  };
  async performLogoutButton() {
    await this.logoutButton.click();
  }
}