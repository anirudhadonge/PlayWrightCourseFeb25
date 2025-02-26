/// promise : 

/// new promise()


async function fun1(){
    return new Promise((resolve,reject)=>{
        let flag = true
        if(flag){
        setTimeout(()=>{
            console.log("this is function1")
            resolve(2);
        },3000)}else{
            reject("The flag was false");
        }
        
    })
}
async function fun2(a){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("this is function 2" + a);
        resolve('Function2 got execute');
    },1000);
    
})
}

async function fun3(){
console.log('This is function 3');
let a = await fun1();
await fun2(a);
}

await fun3();
// fun1().then((b)=>{
//     console.log(b);
//     fun2().then((a)=>{
//         console.log(a);
//     })
// }).catch((err)=>{
//     console.log(err);
// })