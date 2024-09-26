import { expect, type Locator, type Page } from '@playwright/test';

export class RoomsNewRoomPage {
  readonly page: Page;
  readonly viewButton: Locator;
  readonly createRoomButton: Locator;
  readonly logoutButton: Locator;
  readonly saveButton: Locator;
  readonly backButton: Locator;
  readonly categoryField: Locator;
  readonly numberField: Locator;
  readonly floorField: Locator;
  readonly availableCheckbox: Locator;
  readonly priceField: Locator;
  readonly featureField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.viewButton = page.locator('#app > div > div > div:nth-child(1) > a');
    this.createRoomButton = page.getByRole('link', { name: 'Create Room' });
    this.logoutButton = page.locator('#app > header > div > div > button');
    this.saveButton = page.locator('#app > div > div.actions > a.btn.blue');
    this.backButton = page.locator('#app > div > div.actions > a:nth-child(1)');
    this.categoryField = page.getByRole('combobox');
    this.numberField = page.locator('div').filter({ hasText: /^Number$/ }).getByRole('spinbutton');
    this.floorField = page.locator('#app > div > div:nth-child(2) > div:nth-child(3) > input[type=number]');
    this.availableCheckbox = page.locator('#app > div > div:nth-child(2) > div:nth-child(4) > div');
    this.priceField = page.locator('#app > div > div:nth-child(2) > div:nth-child(5) > input[type=number]');
    this.featureField = page.locator('#app > div > div:nth-child(2) > div:nth-child(6) > select');
  }

  //Methods:
  async performCreateNewRoom(randomNumber, randomFloor, randomPrice){
    await this.viewButton.click();
    await this.createRoomButton.click();
    //To fill the '...' fields with a given value:
    await this.categoryField.selectOption({index:1});
    await this.numberField.fill(randomNumber);
    await this.floorField.fill(randomFloor);
    await this.availableCheckbox.click();
    await this.priceField.fill(randomPrice);
    await this.featureField.selectOption({index:2});
    await this.saveButton.click();
    };
    async performLogoutButton() {
      await this.logoutButton.click();
    };
    async performBackButton() {
      await this.backButton.click();
    };
}