import {test as base,expect} from "@playwright/test"
import { Homepage } from "../PageModel/HomePage";
import { LoginPage } from "../PageModel/LoginPage";
import { SecurePage } from "../PageModel/SecureAreaPage";
import { DropDownPage } from "../PageModel/DropDownPage";




export const test = base.extend<{ homePage:Homepage,loginPage:LoginPage,securePage:SecurePage,dropDownPage:DropDownPage}>({

    homePage: async({page},use)=>{
        const homePage = new Homepage(page);
        await homePage.gotoUrl();
        await use(homePage);
    },

    loginPage: async({page},use)=>{
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    securePage:async({page},use)=>{
        const securePage = new SecurePage(page);
        await use(securePage);
    },

    dropDownPage: async({page},use)=>{
        const dropDown = new DropDownPage(page);
        await use(dropDown);
    }
});


