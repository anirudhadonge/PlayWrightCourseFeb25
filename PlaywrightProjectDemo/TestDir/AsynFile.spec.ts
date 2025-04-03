import {test,expect} from'@playwright/test'

test('Async Test',async({page})=>{
    await page.goto("https://www.google.com");
    await page.locator("#APjFqb").fill("Playwright");
    await page.locator(".gNO89b").nth(0).click();
})