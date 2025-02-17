/**
 * let <FunctionName> = function (<Parameters>){<body>}
 * function <FunctionName>(<Parameters>){<body>}
 * (<Parameters>)=>{<body>} // Arrow Function
 * call back function 
 */


let fun1 = function(callBackFun){
    setTimeout(()=>{
    console.log("This is my first Function Example");
    callBackFun();
    },3000)
}


function fun2 (){
    console.log("This is my Second Function Example");
}

// setTimeout(()=>{
//     console.log("This is an example of Array Function");
// },3000)

fun1(()=>{
    console.log("This is my Second Function Example");
});


