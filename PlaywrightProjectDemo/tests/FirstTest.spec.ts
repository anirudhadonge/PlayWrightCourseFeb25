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


test("Locator Description test",async({page})=>{
        await page.goto("https://the-internet.herokuapp.com/")
        const checkBox = page.locator('[href="/checkboxes"]')
        await checkBox.click();
})


test('Fill and Press-Sequentially test',async({page})=>{
        await page.goto("https://the-internet.herokuapp.com/login");
        await page.locator("#username").pressSequentially("tomsmith",{delay:1000});
        await page.locator("#password").fill("SuperSecretPassword!")
})

test.only('Select Options test',async({page})=>{
        await page.goto("https://the-internet.herokuapp.com/dropdown");
        await page.locator("select#dropdown").selectOption({index:2});
        // await page.locator("select#dropdown").click();
        // await page.locator("select#dropdown option:has-text('Option 2')").click();
        
})


// value 

// Label

