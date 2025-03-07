import{test,expect} from '@playwright/test'

test.only('This is a demo test',async({page})=>{
    await page.goto("https://playwright.dev/dotnet");
    await page.locator(".getStarted_Sjon").click();
    await expect(page.locator(".theme-doc-markdown.markdown h1")).toHaveText("Installation")
})