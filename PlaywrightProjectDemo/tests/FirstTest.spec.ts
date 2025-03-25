import { test, expect } from "@playwright/test";
import { BasePageModel } from "../PageModel/BasePageModel";
import { Homepage } from "../PageModel/HomePage";
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
/**
 * Locators
 * page.locator(xpath,css);
 * 		○ Locate by role
			○ Locate by label
			○ Locate by placeholder
			○ Locate by text
			○ Locate by alt text
			○ Locate by title
      Locate by TestId
Locate by test id
 */


test("this is my first test", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.locator(".getStarted_Sjon").click();
  await expect(page.locator(".theme-doc-markdown.markdown h1")).toHaveText(
    "Installation"
  );
});

test.describe.only('All test belongs to HeroKuapp',async()=>{
  test.beforeAll('This is Before All Method ',async()=>{
    await test.step("Execute Before ALL",async()=>{
      console.log('This is Before All Method');
    })
    
  })
  
  test.beforeEach('This is a before Each Method', async({page})=>{
    console.log('This is before each method');
    await test.step('Navigating to HeroKupApp Url',async()=>{
      await page.goto("https://the-internet.herokuapp.com");
    })
    
  })

  test.afterEach('This is After Each block',async()=>{
    await test.step("Before each block",async()=>{
      console.log("This is After Each Block");
    })
    
  })
  test.afterAll('This is After All Method',async()=>{
    await test.step('Before All Block',async()=>{
      console.log('This is After All Method');
    })
    
  })

  test("Locator Description test", async ({ page }) => {
    await test.step('Click on CheckBox',async()=>{
      const checkBox = page.locator('[href="/checkboxes"]');
      await checkBox.click();
    })
    
  });
  
  test("Fill and Press-Sequentially test", async ({ page }) => {
    //test.slow();
    await test.step('Navigate to Login page',async()=>{
      await page.locator('[href="/login"]').click();
      //await page.goto("https://the-internet.herokuapp.com/login");
    })
    
    await test.step('Enter UserName',async()=>{
      const userNameInput = page.getByLabel('Username');
      await expect(userNameInput).toBeVisible(); // Label tag in the Html page
      await page
        .locator("#username")
        .pressSequentially("tomsmith", { delay: 300 });
    })
    
    await test.step('Enter Password',async()=>{
      await page.locator("#password").fill("SuperSecretPassword!");
    })
    
    await test.step('Click on Login',async()=>{
      await page.getByRole('button').click();
    })
    
    //expect(true).toBeFalsy();
  });
  
  // test("Select Options test", async ({ page }) => {
  //   await page.goto("https://the-internet.herokuapp.com/dropdown");
  //   await page.locator("select#dropdown").selectOption({ index: 2 });
  //   await page.locator("select#dropdown").click();
  //   await page.locator("select#dropdown option:has-text('Option 2')").click();
  // });
  
  // /**
  //  * check() ---> validate that the element is not checked then perform check action
  //  * uncheck() ---> validate that the element is checked then perform unchecking action
  //  * Click();
  //  */
  
  // //WebElement element = driver.findElement(By.Css(""))
  // test('Checkbox test', async({page})=>{
          
  //         await page.getByText('Checkboxes').click();
  //         //await page.locator("[href='/checkboxes']").click();
  //         // if(!await page.locator("#checkboxes input").nth(0).isChecked()){
  //         //         await page.locator("#checkboxes input").nth(0).click();
  //         // }
  //         // if(await page.locator("#checkboxes input").nth(1).isChecked()){
  //         //         await page.locator("#checkboxes input").nth(1).click();
  //         // }
  //         // await page.locator("#checkboxes input").nth(0).uncheck();
  //         // await page.locator("#checkboxes input").nth(1).uncheck();
  //         // await page.getByRole('checkbox',{checked:false}).check();
  //         // await page.getByRole('checkbox',{checked:true}).nth(1).uncheck();
  //         await page.getByRole('checkbox',{checked:false}).check();
  //         await expect(page.locator("#checkboxes input").nth(0)).toBeChecked();
  //         await page.getByRole('checkbox',{checked:true}).nth(1).uncheck();
  // })
  
  // test('File Upload test',async({page})=>{
  //         await page.locator("[href='/upload']").click();
  //         // await page.locator("#file-upload").setInputFiles(["C:/UploadFiles/downloadFile.txt",'C:/UploadFiles/Uploadfile.txt']);
  //         // await page.locator("#file-submit").click();
  
  //         // When we have a button which chooses the file is not a input(its not a input tag)
  //         const fileChooser = page.waitForEvent('filechooser');
  //         await page.locator("#file-upload").click();
  //         const fchooser = await fileChooser;
  //         await fchooser.setFiles('C:/UploadFiles/Uploadfile.txt');
  //         await page.locator("#file-submit").click();
  // })
  
  // test('Working with Iframes ',async({page})=>{
  //         await page.locator("[href='/frames']").click();
  //         await page.locator("[href='/iframe']").click();
  //         const floc = page.frameLocator('#mce_0_ifr');
  //         await expect(floc.locator('#tinymce p')).toContainText("Your content goes");
  //         //await expect(page.locator(".example h3")).toHaveText('An iFrame containing the TinyMCE WYSIWYG Editor');
  // })
  
  test.only("Working Multiple Frames", async ({ page }) => {
    test.slow();
    let topFrame;
    await test.step("Navigate to Frames Page",async()=>{
      await page.locator("[href='/frames']").click();
    })
    await test.step('Click on Nested Frames Link',async()=>{
      await page.locator("[href='/nested_frames']").click();
    })
    
    await test.step('Create Top Frame Locator', async()=>{
      topFrame = page.frameLocator('[name="frame-top"]');
    })
    
    await test.step("Validate the Text on Left Frame",async()=>{
      const leftFrame = topFrame.frameLocator('[name="frame-left"]')
      await expect(leftFrame.locator('body')).toContainText('LEFT')
    })
  
    await test.step("Validate the text on Mid Frame",async()=>{
      const midFrame = topFrame.frameLocator('[name="frame-middle"]');
      await expect(midFrame.locator('#content')).toHaveText('MIDDLE')
    })
  });
  
  // test("Working with Download files ", async ({ page }) => {
  //   await page.locator("[href='/download']").click();
  //   const downloadEvent = page.waitForEvent("download");
  //   await page.locator("[href='download/java.png']").click();
  //   const downloadFile = await downloadEvent;
  //   await downloadFile.saveAs("./Downloads/" + downloadFile.suggestedFilename());
  // });
  
  // test('Working with Alerts with BasePageModel',async({page})=>{
  //     await page.locator("[href='/javascript_alerts']").click();
  //     const basePageModel = new BasePageModel(page);
  //     await basePageModel.handleAlert('[onclick="jsAlert()"]','',true);
  //     await basePageModel.validatePartialText('#result','You successfully clicked an alert');
  //     //await page.locator('[onclick="jsAlert()"]').click();
  //     //await page.locator('[onclick="jsConfirm()"]').click();
  //     //await page.locator('[onclick="jsPrompt()"]').click();
  //     //await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
  //     //await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
  //     //await expect(page.locator('#result')).toHaveText('You clicked: Ok');
  //     //await expect(page.locator('#result')).toContainText('this is a demo');
  // });
  
  
  // // test('Working with Alerts',async({page})=>{
  // //   await page.goto("https://the-internet.herokuapp.com/");
  // //   await page.locator("[href='/javascript_alerts']").click();
  // //   page.on('dialog',(dialog)=>{
  // //     console.log(dialog.message());
  // //     //dialog.accept();
  // //     dialog.accept('this is a demo');
  // //   })
  // //   //await page.locator('[onclick="jsAlert()"]').click();
  // //   //await page.locator('[onclick="jsConfirm()"]').click();
  // //   await page.locator('[onclick="jsPrompt()"]').click();
  // //   //await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
  // //   //await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
  // //   //await expect(page.locator('#result')).toHaveText('You clicked: Ok');
  // //   await expect(page.locator('#result')).toContainText('this is a demo');
  // // });
  
  
  
  
  // // test.only("Working Hover feature",async({page})=>{
  // //   await page.goto("https://the-internet.herokuapp.com/");
  // //   await page.locator('[href="/hovers"]').click();
  // //   //await page.locator("div.figure").nth(0).hover();
  // //   await page.hover("div.figure");
  // //   //await page.locator("div.figure").nth(0).focus();
  
   
  // //   await expect(page.locator('h5').nth(0)).toHaveText('name: user1');
  // // })
  // /// Browser ---> BrowserContext()---> page
  // /// brower
  // ///selenium: Window Handle --- we were switching between window handle.
  // /// driver.getWindowHandle()    await homePage.gotoUrl();
  // test('Working with multiple tabs',async({page,context})=>{
  //   const homePage = new Homepage(page);

  //   await homePage.clickOnNewWindowLink();
  //   const newPage = await homePage.clickWithNewWindow(context,"[href='/windows/new']");
  //   // const newPageEvent = context.waitForEvent('page'); 
  //   // await page.locator("[href='/windows/new']").click();
  //   // const newpage = await newPageEvent;
  //   await expect(newPage.locator('h3')).toHaveText('New Window');
  //   await expect(page.locator('h3')).toHaveText('Opening a new window');
  // })
  
  // test('Working with Base Auth window',async({browser})=>{
  //   const context = await browser.newContext({
  //     httpCredentials:{
  //       username:"admin",
  //       password:"admin"
  //     }
  //   })
  //   const page = await context.newPage();
  //   const homePage = new Homepage(page);
  //   await homePage.clickOnBaseAuthLink();
  //   await expect(page.locator(".example p")).toContainText("Congratulations! You must have the proper credentials.")
  // })
  
  // test('Drag and Drop',async({page})=>{
  //   const homePage = new Homepage(page);
  //   await homePage.clickOnElement("[href='/drag_and_drop']");
  //   await page.locator("#column-a").dragTo(page.locator("#column-b"));
  
  // })
})



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


test("Work with toHaveTitle",async({page})=>{
   await page.goto("https://playwright.dev/");
   await page.locator('.getStarted_Sjon').click();
   await expect(page).toHaveTitle(/Installation/);
   await expect(page).toHaveURL(/intro/);
})