/*
Function 
Function Declaration 
Default parameters
*/ 

/*
function <FunctionName>{<body>}
let <functionName> = function{<body>}
arrow function ()=>{}
*/

/**
 * function <FunctionName>(Parameters:types):returnType
 */

//function number fun1(number num1)
interface mynumber{
    num1:number,
    num2:number,
    num3?:number,
    num4:number
}
// function fun1(num1:number, num2:number,num3?:number ,num4?:number,num5:number=34){
//     if(num3!=undefined){
//     return num1+num2+num3;
//     }else{
//         return num1+num2
//     }

// }

// console.log(fun1(2,3))
// console.log(fun1(4,5,6))

// function add(a:number,b:number):number{
//     return a+b;
// }

// function add(a:number,b:number,c:number):number{
//     return a+b+c;
// }

// function fun2(flag:boolean):never{
//     if(flag){
//         console.log("the value is true");
//     } 
//     throw "anirudha";
// }

/// Generic function making things dynamically


// function add(val1:number,val2:number):number{
//     return val1+val2;
// }

// function addString(val1:string,val2:string):string{
//     return val1+val2;
// }

// function add(a,b){
//     return a+b
// }

///
function add<Type>(val1:Type,val2:Type):Type{
    return val1+val2;
}

// console.log(add<string>("Anirudha","Tutor"));
// console.log(add<number>(2,3));
 add('Anirudha',3);