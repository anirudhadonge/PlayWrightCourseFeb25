

let myArray =[23,54,6,2,14,25]
let myStringArray = ['Deepak','Abhishek','Aniruddh','Archana','Akshay','Kranti']

//myArray.sort() // it works fine for string array, it will not work as expected for numbers
myArray.sort((a,b)=>{return b-a})
console.log(myArray);

myStringArray.sort();
console.log(myStringArray);