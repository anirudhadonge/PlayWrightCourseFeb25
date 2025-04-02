import test, { expect } from "@playwright/test";

test("@wait Work with toHaveTitle",async({page})=>{
   await page.goto("https://playwright.dev/");
   await page.locator('.getStarted_Sjon').click();
   await expect(page).toHaveTitle(/Installation/);
   await expect(page).toHaveURL(/intro/);
   //expect(false).toBeTruthy();
})

 test('test1',async()=>{
    console.log('test1');
 })

 test('test2',async()=>{
    console.log('test2');
 })
 test('test3',async()=>{
    console.log('test3');
 })
 test('test4',async()=>{
    console.log('test4');
 })
 test('test5',async()=>{
    console.log('test5');
 })
 test('test6',async()=>{
    console.log('test6');
 })
 test('test7',async()=>{
    console.log('test7');
 })