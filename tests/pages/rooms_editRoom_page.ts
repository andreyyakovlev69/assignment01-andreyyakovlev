import { expect, type Locator, type Page } from '@playwright/test';

export class RoomsEditRoomPage {
  readonly page: Page;
  readonly viewButton: Locator;
  readonly logoutButton: Locator;
  readonly saveButton: Locator;
  readonly backButton: Locator;
  readonly idField: Locator;
  readonly createdField: Locator;
  readonly categoryDoubleField: Locator;
  readonly numberField: Locator;
  readonly floorField: Locator;
  readonly availableCheckbox: Locator;
  readonly priceField: Locator;
  readonly featuresBalconyField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.viewButton = page.locator('#app > div > div > div:nth-child(1) > a');
    this.logoutButton = page.locator('#app > header > div > div > button');
    this.saveButton = page.locator('#app > div > div.actions > a.btn.blue');
    this.backButton = page.locator('#app > div > div.actions > a:nth-child(1)');
    this.idField = page.locator('#app > div > div:nth-child(2) > div:nth-child(1) > input[type=text]');
    this.createdField = page.locator('#app > div > div:nth-child(2) > div:nth-child(2) > input[type=text]');
    this.categoryDoubleField = page.locator('#app > div > div:nth-child(2) > div:nth-child(1) > select > option:nth-child(1)');
    this.numberField = page.locator('#app > div > div:nth-child(2) > div:nth-child(2) > input[type=number]');
    this.floorField = page.locator('#app > div > div:nth-child(2) > div:nth-child(3) > input[type=number]');
    this.availableCheckbox = page.locator('#app > div > div:nth-child(2) > div:nth-child(4) > div');
    this.priceField = page.locator('#app > div > div:nth-child(2) > div:nth-child(5) > input[type=number]');
    this.featuresBalconyField = page.locator('#app > div > div:nth-child(2) > div:nth-child(6) > select');
  }

  //Methods:
  async performView() {
    await this.viewButton.click();
  };
  async performLogoutButton() {
    await this.logoutButton.click();
  };
  async performBackButton() {
    await this.backButton.click();
  };
  async fillCategoryDoubleField() {
    await this.categoryDoubleField.click();
  };
  // Method to fill the 'Number' field with a random value:
  async fillNumberField(randomNumber: string) {
    await this.numberField.fill(randomNumber);
  };
  // Method to fill the 'floor' field with a random value:
  async fillFloorField(randomFloor: string) {
    await this.floorField.fill(randomFloor);
  };
  // Method to check the 'Available' checkbox:
  async performAvailableCheckbox() {
    await this.availableCheckbox.click();
  };
  // Method to fill the 'Price' field with a random value:
  async fillPriceField(randomPrice: string) {
    await this.priceField.fill(randomPrice);
  };
  // Method to choose room with balcony in 'Features' field:
  async performfeaturesBalconyField() {
    await this.featuresBalconyField.click();
  };
  async performSaveButton() {
    await this.saveButton.click();
  };
}