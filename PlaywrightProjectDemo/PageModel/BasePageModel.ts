import { BrowserContext, expect, Page } from "@playwright/test";



export class BasePageModel{
    page:Page
    context:BrowserContext
    constructor(page:Page){
        this.page= page;
    }

    async gotoUrl(){
      await this.page.goto("https://the-internet.herokuapp.com/");
    }

    async handleAlert(locator:string, message:string='',flag:boolean=true){
        this.page.on('dialog',(dialog)=>{
          console.log(dialog.message());
          console.log(dialog.type());
          //dialog.accept();
          if(flag){
          if(message!=''){
          dialog.accept(message);
          }else{
            dialog.accept();
           
          }
        }else{
            dialog.dismiss();
        }
        })
        await this.page.locator(locator).click();
      }

    //   async handleAlertWithCancel(locator:string){
    //     this.page.on('dialog',(dialog)=>{
    //       console.log(dialog.message());
    //       //dialog.accept();
    //       dialog.dismiss();
    //     })
    //     await this.page.locator(locator).click();
    //   }

    async validateExactText(locator:string,message:string){
        await expect(this.page.locator(locator)).toHaveText(message);
    }

    async validatePartialText(locator:string,message:string){
        await expect(this.page.locator(locator)).toContainText(message);
    }

    async clickWithNewWindow(context:BrowserContext, locator:string):Promise<Page>{
      const newPageEvent = context.waitForEvent('page'); 
      await this.page.locator(locator).click();
      return await newPageEvent;
    }

    async clickOnElement(locator:string){
      console.log("Element is getting click");
      await this.page.locator(locator).click();
    }
}