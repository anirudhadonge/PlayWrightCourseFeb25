// 1. Normal For Loop with Index
// 2. While Loop
// 3. Do While Loop
// 4. for-of Loop  for(let a of srt)
// 5. for-in loop  for (let a in srt)


let fruits = ['Apple','Banana','Kiwi','Orange'];
//[index<key> , Value]
/**
 * Apple - 0
 * Banana -1
 * Kiwi   -2
 * Orange -3
 * 
 */

// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }


/// Do While : 
// let n = 1

// do{
// console.log(n);
// n++
// }while(n<1)

// while(n<1){
//     console.log(n)
//     n++
// }


/// For of "for(let <value> of <Entity>){}

// for(const value of fruits){
//     console.log(value);
// }

// 5. for-in loop  for (let a in srt)

// for(let value in fruits){
//     console.log(value);
// }

const student ={
    name:"Anirudha",
    rollNumber:7,
    Marks:60
}

for(let key in student){
    console.log(key+":"+student[key]);
}