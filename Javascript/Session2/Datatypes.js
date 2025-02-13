/*
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Object
7. Symbol
8. Array
*/


/// Number : Any Integer Value or a floating point value is a number type in javascript.

// let myNumber ;

// myNumber = -25;
// console.log(typeof(myNumber));
// myNumber = 25 ;
// console.log(typeof(myNumber));
// myNumber = 0.025
// console.log(typeof(myNumber));
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);


/// String : Any Text enclosed inside double quotes or single quotes is considered a string Type in Javascript.

// let myString = 'This is a playwright course';
// console.log(typeof(myString));
// let myStr = "This is my second string Example";
// console.log(typeof(myStr));

/// Boolean : Boolean would keep only two values true or false.

// let flag='false';
// console.log(typeof(flag));


//// Undefined : You have declared a variable but you have not initialized it.


// let myCar ;


// console.log(typeof(myCar));

// function myFun(val1){
//     console.log(typeof(val1));
// }

// myFun(true);

/// Null : Null is a standalone value/Type , Need to be assigned separately

// let myVal //= null;

// console.log(typeof(myVal));


/// Array: Array is type object , it is heterogenous/Homogenour collection of elements
/// Heterogenous : Collection of different types e.g let myArray =['Deepak', 'Madhuri','Akshay',7,false]
/// Homogenour : Collection of same type of element e.g. let myArray =['Deepak', 'Madhuri','Akshay]
// let myArray =['Deepak', 'Madhuri','Akshay']

// console.log(typeof(myArray));
// console.log(myArray);

/// Object : There basically a key value pair different , You are creating a custom type.

let student = {
    name:'Anirudha',
    rollNumber:7
}

console.log(student.name);
console.log(student['name']);

student.name='Akshay';
console.log(student);
// function updateDb(student){
//     student.name
//     student.rollNumber;
// }