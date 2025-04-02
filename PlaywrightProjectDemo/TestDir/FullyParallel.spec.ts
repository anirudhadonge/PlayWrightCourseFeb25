import test from "@playwright/test";
import { Homepage } from "../PageModel/HomePage";

test("getByPlaceHolder test",async({page})=>{
  await page.goto("https://selectorshub.com/xpath-practice-page/");
  await page.getByTitle("Enter your first crush name").fill('abc@abc.com');
  await page.getByPlaceholder('Enter your mobile number').nth(0).fill('9898989898');
  await page.getByText('Submit').click();
  //await page.getByTestId()
  //await page.getByAltText('Fork me on GitHub').click()
})
/// asynchronous --- we dont wait for the operation to get complete
/// synchronous
test('Working with wait for time out',async({page})=>{
  const homePage = new Homepage(page);
  await homePage.gotoUrl();
  await page.getByText('Checkboxes').click();
  await page.waitForURL('**/checkboxes')
  await page.waitForTimeout(3000);
  await page.waitForLoadState('domcontentloaded');
  // const locator = page.locator(".heading");
  // await locator.waitFor({state:'visible'})
  // await expect(page.locator(".heading")).toHaveText('Welcome to the-internet');
})