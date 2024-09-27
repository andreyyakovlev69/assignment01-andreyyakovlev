import { expect, type Locator, type Page } from '@playwright/test';

export class RoomsEditRoomPage {
  readonly page: Page;
  readonly viewButton: Locator;
  readonly roomMenuButton: Locator;
  readonly roomEditButton: Locator;
  readonly logoutButton: Locator;
  readonly saveButton: Locator;
  readonly backButton: Locator;
  readonly idField: Locator;
  readonly createdField: Locator;
  readonly categoryField: Locator;
  readonly numberField: Locator;
  readonly floorField: Locator;
  readonly availableCheckbox: Locator;
  readonly priceField: Locator;
  readonly featureField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.viewButton = page.locator('#app > div > div > div:nth-child(1) > a');
    this.roomMenuButton = page.locator('#app > div > div.rooms > div:nth-child(1) > div.action > img');
    this.roomEditButton = page.locator('#app > div > div.rooms > div:nth-child(1) > div.menu > a:nth-child(1)');
    this.logoutButton = page.locator('#app > header > div > div > button');
    this.saveButton = page.locator('#app > div > div.actions > a.btn.blue');
    this.backButton = page.locator('#app > div > div.actions > a:nth-child(1)');
    this.idField = page.locator('#app > div > div:nth-child(2) > div:nth-child(1) > input[type=text]');
    this.createdField = page.locator('#app > div > div:nth-child(2) > div:nth-child(2) > input[type=text]');
    this.categoryField = page.getByRole('combobox');
    this.numberField = page.locator('div').filter({ hasText: /^Number$/ }).getByRole('spinbutton');
    this.floorField = page.locator('div').filter({ hasText: /^Floor$/ }).getByRole('spinbutton');
    this.availableCheckbox = page.locator('.checkbox');
    this.priceField = page.locator('div').filter({ hasText: /^Price$/ }).getByRole('spinbutton');
    this.featureField = page.getByRole('listbox');
  }

  //Methods:
  async performBillsEdit(randomPrice, randomNumber, randomFloor){
    await this.viewButton.click();
    await this.roomMenuButton.click();
    await this.roomEditButton.click();
    await this.categoryField.selectOption({index:2});
    await this.numberField.fill(randomNumber);
    await this.floorField.fill(randomFloor);
    await this.availableCheckbox.click();
    await this.priceField.fill(randomPrice);
    await this.featureField.selectOption({index:2});
    await this.saveButton.click()
  };
  async performLogoutButton() {
    await this.logoutButton.click();
  };
  async performBackButton() {
    await this.backButton.click();
  };
}