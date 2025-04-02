import { expect, Page } from "@playwright/test";
import { BasePageModel } from "./BasePageModel";

export class DropDownPage extends BasePageModel{

    dropdownLocator ="select#dropdown";
    selectOption = "[selected='selected']";
    constructor(page:Page){
        super(page);
    }

    async selectValueFromDropDownUsingIndex(position:number){
        let locator = await this.getElement("select#dropdown");
        await locator.selectOption({index:position})
    }

    async validateSelectedText(option:string){
        await expect(await this.getElement(this.selectOption)).toHaveText(option)
    }
}