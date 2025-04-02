import test from "@playwright/test";


test("This is a test for showing exception handeling",async({page})=>{
    try{
    await page.close();
    await page.goto("https://www.google.com");
    }catch(err){
        //console.log(err);
        console.log("The browser got closed before navigating to url");
    }
})