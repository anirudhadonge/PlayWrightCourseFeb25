import { test, expect } from "@playwright/test";
import { BasePageModel } from "../PageModel/BasePageModel";
/**
 * 		○ Checkboxes and radio buttons
		○ Upload files
		○ Frames
		○ Download File
		○ Javascript Popups 
		○ Hover
		○ New Page
		○ Basic Authentication
                Drag and Drop
 */

/**
 * Browser
 * Browser context
 * Page
 */
//Browser---> Brwoser Context---> page
test("this is my first test", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.locator(".getStarted_Sjon").click();
  await expect(page.locator(".theme-doc-markdown.markdown h1")).toHaveText(
    "Installation"
  );
});

test("Locator Description test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  const checkBox = page.locator('[href="/checkboxes"]');
  await checkBox.click();
});

test("Fill and Press-Sequentially test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/login");
  await page
    .locator("#username")
    .pressSequentially("tomsmith", { delay: 1000 });
  await page.locator("#password").fill("SuperSecretPassword!");
});

test("Select Options test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dropdown");
  await page.locator("select#dropdown").selectOption({ index: 2 });
  await page.locator("select#dropdown").click();
  await page.locator("select#dropdown option:has-text('Option 2')").click();
});

/**
 * check() ---> validate that the element is not checked then perform check action
 * uncheck() ---> validate that the element is checked then perform unchecking action
 * Click();
 */

//WebElement element = driver.findElement(By.Css(""))
test('Checkbox test', async({page})=>{
        await page.goto("https://the-internet.herokuapp.com");
        await page.getByText('Checkboxes').click();
        //await page.locator("[href='/checkboxes']").click();
        // if(!await page.locator("#checkboxes input").nth(0).isChecked()){
        //         await page.locator("#checkboxes input").nth(0).click();
        // }
        // if(await page.locator("#checkboxes input").nth(1).isChecked()){
        //         await page.locator("#checkboxes input").nth(1).click();
        // }
        // await page.locator("#checkboxes input").nth(0).uncheck();
        // await page.locator("#checkboxes input").nth(1).uncheck();
        await page.getByText(' checkbox 1').check();
        await page.getByText(' checkbox 2').uncheck();
})

test('File Upload test',async({page})=>{
        await page.goto("https://the-internet.herokuapp.com");
        await page.locator("[href='/upload']").click();
        // await page.locator("#file-upload").setInputFiles(["C:/UploadFiles/downloadFile.txt",'C:/UploadFiles/Uploadfile.txt']);
        // await page.locator("#file-submit").click();

        // When we have a button which chooses the file is not a input(its not a input tag)
        const fileChooser = page.waitForEvent('filechooser');
        await page.locator("#file-upload").click();
        const fchooser = await fileChooser;
        await fchooser.setFiles('C:/UploadFiles/Uploadfile.txt');
        await page.locator("#file-submit").click();
})

test('Working with Iframes ',async({page})=>{
        await page.goto("https://the-internet.herokuapp.com/");
        await page.locator("[href='/frames']").click();
        await page.locator("[href='/iframe']").click();
        const floc = page.frameLocator('#mce_0_ifr');
        await expect(floc.locator('#tinymce p')).toHaveText("Your content goes here.");
        await expect(page.locator(".example h3")).toHaveText('An iFrame containing the TinyMCE WYSIWYG Editor');
})

test("Working Multiple Frames", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator("[href='/frames']").click();
  await page.locator("[href='/nested_frames']").click();
  const topFrame = page.frameLocator('[name="frame-top"]');
  const leftFrame = topFrame.frameLocator('[name="frame-left"]')
  await expect(leftFrame.locator('body')).toContainText('LEFT')
  const midFrame = topFrame.frameLocator('[name="frame-middle"]');
  await expect(midFrame.locator('#content')).toHaveText('MIDDLE')
});

test("Working with Download files ", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator("[href='/download']").click();
  const downloadEvent = page.waitForEvent("download");
  await page.locator("[href='download/java.png']").click();
  const downloadFile = await downloadEvent;
  await downloadFile.saveAs("./Downloads/" + downloadFile.suggestedFilename());
});

test('Working with Alerts with BasePageModel',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/");
    await page.locator("[href='/javascript_alerts']").click();
    const basePageModel = new BasePageModel(page);
    await basePageModel.handleAlert('[onclick="jsAlert()"]','',true);
    await basePageModel.validatePartialText('#result','You successfully clicked an alert');
    //await page.locator('[onclick="jsAlert()"]').click();
    //await page.locator('[onclick="jsConfirm()"]').click();
    //await page.locator('[onclick="jsPrompt()"]').click();
    //await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
    //await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
    //await expect(page.locator('#result')).toHaveText('You clicked: Ok');
    //await expect(page.locator('#result')).toContainText('this is a demo');
});


// test('Working with Alerts',async({page})=>{
//   await page.goto("https://the-internet.herokuapp.com/");
//   await page.locator("[href='/javascript_alerts']").click();
//   page.on('dialog',(dialog)=>{
//     console.log(dialog.message());
//     //dialog.accept();
//     dialog.accept('this is a demo');
//   })
//   //await page.locator('[onclick="jsAlert()"]').click();
//   //await page.locator('[onclick="jsConfirm()"]').click();
//   await page.locator('[onclick="jsPrompt()"]').click();
//   //await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
//   //await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
//   //await expect(page.locator('#result')).toHaveText('You clicked: Ok');
//   await expect(page.locator('#result')).toContainText('this is a demo');
// });




test.only("Working Hover feature",async({page})=>{
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/hovers"]').click();
  //await page.locator("div.figure").nth(0).hover();
  await page.hover("div.figure");
  //await page.locator("div.figure").nth(0).focus();

 
  await expect(page.locator('h5').nth(0)).toHaveText('name: user1');
})