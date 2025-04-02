import { Page } from "@playwright/test";
import { BasePageModel } from "./BasePageModel";

export class LoginPage extends BasePageModel {
  constructor(page: Page) {
    super(page);
  }

  async enterUserName(userNameText) {
    const userNameInput = this.page.getByLabel("Username");
    //await expect(userNameInput).toBeVisible();
    await this.page
      .locator("#username")
      .pressSequentially(userNameText, { delay: 300 });
  }

  async enterPassword(password) {
    await this.page.locator("#password").fill(password);
  }

  async clickOnLoginBtn() {
    await this.page.getByRole("button").click();
  }
}
