import { expect, Page } from "@playwright/test";
import { BasePageModel } from "./BasePageModel";



export class SecurePage extends BasePageModel{
    secureHeader =".subheader";
    logOutBtn =".icon-2x.icon-signout";
    constructor(page:Page){
        super(page);
    }

    async ValidateLoginSuccessFull(){
        await expect(await this.getElement(this.secureHeader)).toHaveText("Welcome to the Secure Area. When you are done click logout below.");
    }

    async clickLogOut(){
        await this.clickOnElement(this.logOutBtn);
    }

}