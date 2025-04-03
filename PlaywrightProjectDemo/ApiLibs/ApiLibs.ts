import { APIRequestContext, APIResponse } from "@playwright/test";




export async function getAPIMethod(request:APIRequestContext,url:string,option?:{headerObj?:{},body?:{}}):Promise<APIResponse>{
    return request.get(url,{
        headers:option?.headerObj,
        data:option?.body        
    })
}



