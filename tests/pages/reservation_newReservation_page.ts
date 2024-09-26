import { expect, type Locator, type Page } from '@playwright/test';

export class NewReservationPage {
  readonly page: Page;
  readonly viewButton: Locator;
  readonly createReservationButton: Locator;
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
    this.createReservationButton = page.locator('#app > div > h2 > a');
    this.startField = page.locator('#app > div > div:nth-child(2) > div:nth-child(1) > input[type=text]');
    this.endField = page.locator('#app > div > div:nth-child(2) > div:nth-child(2) > input[type=text]');
    this.clientField = page.getByRole('combobox').first();
    this.roomField = page.locator('div').filter({ hasText: /^Room- Not selected -Floor 1, Room 101Floor 1, Room 102$/ }).getByRole('combobox');
    this.billField = page.locator('div').filter({ hasText: /^Bill- Not selected -ID: 1ID: 2ID: 3ID: 4ID: 5ID: 6ID: 7ID: 8$/ }).getByRole('combobox');
    this.backButton = page.locator('#app > div > div:nth-child(3) > a');
    this.saveButton = page.locator('#app > div > div.actions > a.btn.blue');
    this.logoutButton = page.locator('#app > header > div > div > button');
  }

  //Methods:

  async performCreateNewReservation(randomStartDate, randomEndDate){
    await this.viewButton.click();
    await this.createReservationButton.click();
    //To fill the '...' fields with a given value:
    await this.startField.fill(randomStartDate);
    await this.endField.fill(randomEndDate);
    await this.clientField.selectOption({index:1});
    await this.roomField.selectOption({index:1});
    await this.billField.selectOption({index:1});
    await this.saveButton.click()
  };
  
  async performBackButton() {
    await this.backButton.click();
  };
  async performLogoutButton() {
    await this.logoutButton.click();
  };
}