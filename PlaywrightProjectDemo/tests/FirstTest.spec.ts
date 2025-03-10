import {test, expect} from '@playwright/test'


/**
 * Browser
 * Browser context
 * Page
 */
//Browser---> Brwoser Context---> page
test("this is my first test",async ({page})=>{
        await page.goto("https://playwright.dev/");
        await page.locator(".getStarted_Sjon").click();
        await expect(page.locator('.theme-doc-markdown.markdown h1')).toHaveText("Installation");
})