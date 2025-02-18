/**
 * let <FunctionName> = function (<Parameters>){<body>}
 * function <FunctionName>(<Parameters>){<body>}
 * (<Parameters>)=>{<body>} // Arrow Function
 * call back function  : function inside a function is called as a call back function.
 */



// let fun1 = function(callBackFun){
//     setTimeout(()=>{
//     console.log("This is my first Function Example");
//     callBackFun();
//     },3000)
// }


// function fun2 (){
//     console.log("This is my Second Function Example");
// }

// setTimeout(function (){
//     console.log("This is an example of Array Function");
// },3000)

// fun1(()=>{
//     console.log("This is my Second Function Example");
// });

function fun1(a){
    setTimeout(()=>{
        console.log('this is function 1');
        a();
    },3000)
}

function fun2(){
    setTimeout(()=>{
        console.log('this is function 2');
    },1000)
}

function fun3(){
    setTimeout(()=>{
        console.log('this is function 3');
    },2000)
}
/// Asynchornous programing. we are not waiting for action to complete. 
fun1(fun2);
fun1(fun3);
