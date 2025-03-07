
/**
 * Apple
 * Mango
 * Banana 
 * 
 */

// enum fruits {
//     Apple,
//     Banana,
//     Mango
// }

/**?
 * 
 * enum enumName{
 * 
 * key1,
 * key2,
 * key3
 * 
 * }
 * 
 */
let month = 'Jan'

export enum months{

    Jan ="Jan" ,
    Feb ='Feb' ,
    Mar ='Mar',
    Apr ='Apr'

}

function getMonth(name:string):string{
    switch(name){
        case "Jan" :
            return "January";
        case "Feb":
            return "February";
    }
    return ""
}

function getMonthWithNumber(name:number):string{
    switch(name){
        case 0 :
            return "January";
        case 1:
            return "February";
    }
    return ""
}


console.log(getMonth(months.Jan.toString()));
//console.log(getMonthWithNumber(months.Feb));