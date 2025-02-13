/**
 * let -- scope of execution
 * const -- scope of execution 
 * var --- global value.(It is not recommended)
 */

 // let/const/var <variablename>

// const mystring='it has a constant value';

// console.log(typeof(mystring));

// mystring ='anirudha';

// console.log(typeof(mystring));

// mystring = false;

// console.log(typeof(mystring));

// var mystring = 'Anirudha'

// console.log(typeof(mystring));

// const myVar = 'Anirudha';
// myVar = 'tutor';


// let myVar;

// myVar = 'Anirudha';
// myVar = 5;

function myfun(){
    let var1 = 1;
    let var2 = "Anirudha"
    const var3 = "Tutor"
    console.log(var1);
    console.log(var2);
    console.log(var3);
}

console.log(var2);


myfun();