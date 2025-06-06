import { expect } from "@playwright/test";
import {test} from '../Fixtures/PreRequisites.ts'
import { Homepage } from "../PageModel/HomePage.ts";
import { LoginPage } from "../PageModel/LoginPage.ts";
import { DropDownPage } from "../PageModel/DropDownPage.ts";

test("Fixture example", async ({homePage,loginPage,securePage}) => {
  //    const context = await browser.newContext();
  //const page = await context.newPage()
  const userName = "tomsmith";
  const password = "SuperSecretPassword!";

  // let homePage: Homepage = new Homepage(page);
  // let loginPage:LoginPage = new LoginPage(page);
  await test.step("Navigate to Login page", async () => {
    await homePage.clickOnFormAuthentication();
  });

  await test.step("Enter UserName", async () => {
    await loginPage.enterUserName(userName);
  });

  await test.step("Enter Password", async () => {
    await loginPage.enterPassword(password);
  });

  await test.step("Click on Login", async () => {
    await loginPage.clickOnLoginBtn();
  });

  await test.step("Validate Login Action",async()=>{
    await securePage.ValidateLoginSuccessFull();
  })
});

  test("Select Options test", async ({homePage,dropDownPage}) => {
  
    await test.step("Click on drop down link",async()=>{
      await homePage.clickOnDropDownLink();
    })

    await test.step("Select option using index",async()=>{
      await dropDownPage.selectValueFromDropDownUsingIndex(1);
    })

    await test.step("Validate selected Options",async()=>{
      await dropDownPage.validateSelectedText("Option 1");
    })
  });

  test("Select Options test without fixture", async ({page}) => {
    let homePage = new Homepage(page);
    let dropDownPage = new DropDownPage(page);
    await test.step("Click on drop down link",async()=>{
      await homePage.gotoUrl();
      await homePage.clickOnDropDownLink();
    })

    await test.step("Select option using index",async()=>{
      await dropDownPage.selectValueFromDropDownUsingIndex(1);
    })

    await test.step("Validate selected Options",async()=>{
      await dropDownPage.validateSelectedText("Option 1");
    })
  });
