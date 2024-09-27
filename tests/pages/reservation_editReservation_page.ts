import { expect, type Locator, type Page } from '@playwright/test';

export class EditReservationPage {
  readonly page: Page;
  readonly viewButton: Locator;
  readonly editReservationMenu: Locator;
  readonly editReservationButton: Locator;
  readonly idField: Locator;
  readonly createdField: Locator;
  readonly startField: Locator;
  readonly endField: Locator;
  readonly clientField: Locator;
  readonly roomField: Locator;
  readonly billField: Locator;
  readonly backButton: Locator;
  readonly saveButton: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.viewButton = page.locator('#app > div > div > div:nth-child(4) > a');
    this.editReservationMenu = page.getByRole('img').first();
    this.editReservationButton = page.getByText('Edit');
    this.idField = page.locator('#app > div > div:nth-child(2) > div:nth-child(1) > input[type=text]');
    this.createdField = page.locator('#app > div > div:nth-child(2) > div:nth-child(2) > input[type=text]');
    this.startField = page.locator('div').filter({ hasText: /^Start \(Format YYYY-MM-DD\)$/ }).getByPlaceholder('YYYY-MM-DD');
    this.endField = page.locator('div').filter({ hasText: /^End \(Format YYYY-MM-DD\)$/ }).getByPlaceholder('YYYY-MM-DD');
    this.clientField = page.getByRole('combobox').first();
    this.roomField = page.locator('div').filter({ hasText: /^Room- Not selected / }).getByRole('combobox');
    this.billField = page.locator('#app > div > div:nth-child(2) > div:nth-child(7) > select > option:nth-child(2)');
    this.backButton = page.getByRole('link', { name: 'Back' });
    this.saveButton = page.getByText('Save');
    this.logoutButton = page.getByRole('button', { name: 'Logout' });
  }

//Methods:
async performReservationEdit(randomStartDate, randomEndDate){
  await this.viewButton.click();
  await this.editReservationMenu.click();
  await this.editReservationButton.click();
  await this.startField.fill(randomStartDate);
  await this.endField.fill(randomEndDate);
  await this.clientField.selectOption({index:2});
  await this.roomField.selectOption({index:2});
  await this.saveButton.click()
};
async performBackButton() {
  await this.backButton.click();
};
  async performLogoutButton() {
    await this.logoutButton.click();
  };
}