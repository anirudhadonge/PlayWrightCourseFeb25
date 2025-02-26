/**
 * synchronus : When ever you are calling a function , we would for that function get completed then only we will to 
 * the new action.
 * Asynchronus : When just call the Action, We dont wait for that action to completed instead we move 
 * to excute other other action
 */


/// For Making Javascript Synchronus
/// callback function:
/// Promises
/// Async and Await.

function fun1(fun2,fun3){
    setTimeout(()=>{
        console.log('Function 1')
        fun2(fun3);
    },4000);
}

function fun2(fun3){
    setTimeout(()=>{
        console.log('Function 2')
        fun3();
        //return 1
    },2000);
}

function fun3(){
    setTimeout(()=>{
        console.log('Function 3')
        //return 1
    },1000);
}

fun1(fun2,fun3);
// fun1();
// console.log(fun2());
// console.log("All the functions are triggered.")
