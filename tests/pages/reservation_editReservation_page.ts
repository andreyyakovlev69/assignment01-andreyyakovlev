import { expect, type Locator, type Page } from '@playwright/test';

export class EditReservationPage {
  readonly page: Page;
  readonly viewButton: Locator;
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
    this.idField = page.locator('#app > div > div:nth-child(2) > div:nth-child(1) > input[type=text]');
    this.createdField = page.locator('#app > div > div:nth-child(2) > div:nth-child(2) > input[type=text]');
    this.startField = page.locator('#app > div > div:nth-child(2) > div:nth-child(3) > input[type=text]');
    this.endField = page.locator('#app > div > div:nth-child(2) > div:nth-child(4) > input[type=text]');
    this.clientField = page.locator('#app > div > div:nth-child(2) > div:nth-child(5) > select > option:nth-child(2)');
    this.roomField = page.locator('#app > div > div:nth-child(2) > div:nth-child(6) > select > option:nth-child(2)');
    this.billField = page.locator('#app > div > div:nth-child(2) > div:nth-child(7) > select > option:nth-child(2)');
    this.backButton = page.locator('#app > div > div.actions > a:nth-child(1)');
    this.saveButton = page.locator('#app > div > div.actions > a.btn.blue');
    this.logoutButton = page.locator('#app > header > div > div > button');
  }

  //Methods:
  async performView() {
    await this.viewButton.click();
  };
  
  // Methods to fill the '...' fields with a given value:
  async fillStartField(randomStartDate: string) {
    await this.startField.fill(randomStartDate);
  };
  async fillEndField(randomEndDate: string) {
    await this.endField.fill(randomEndDate);
  };
  async fillClientField() {
    await this.clientField.click();
  };
  async fillRoomField() {
    await this.clientField.click();
  };
  async fillBillField() {
    await this.billField.click();
  };
  async performBackButton() {
    await this.backButton.click();
  };
  async performSaveButton() {
    await this.saveButton.click();
  };
  async performLogoutButton() {
    await this.logoutButton.click();
  };
}