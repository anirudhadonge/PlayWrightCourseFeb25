function fun1(a){
    setTimeout(()=>{
        console.log('this is function 1');
        console.log(a());
    },3000)
}

function fun2(){
            return 'this is function 2';
}

function fun3(){
    setTimeout(()=>{
        return 'this is function 3';
    },2000)
}
/// Asynchornous programing. we are not waiting for action to complete. 
fun1(fun2);
//fun1(fun3);