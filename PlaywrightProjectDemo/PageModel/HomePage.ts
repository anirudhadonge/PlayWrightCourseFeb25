import { Page } from "@playwright/test";
import { BasePageModel } from "./BasePageModel";



export class Homepage extends BasePageModel{

    newWindowLink="[href='/windows']";
    baseAuthLink = '[href="/basic_auth"]';
    formAuthecationLink = "[href='/login']";
    dropdownLink = "[href='/dropdown']";
    constructor(page:Page){
        super(page);
    }

    async clickOnNewWindowLink(){
        await this.clickOnElement(this.newWindowLink);
    }

    async clickOnBaseAuthLink(){
        await this.clickOnElement(this.baseAuthLink);
    }

    async clickOnFormAuthentication(){
        await this.clickOnElement(this.formAuthecationLink);
    }

    async clickOnDropDownLink(){
        await this.clickOnElement(this.dropdownLink);
    }
}