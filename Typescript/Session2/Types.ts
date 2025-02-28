let a : number | string | boolean // union type

a = 'anirudha'
a = 5
a = false
a = true

/// Objects in Types script

/// type keyword
/// interface keywork

// Type Aliases

// template
// type student ={
//     name:string
//     readonly marks:number
// }

interface student {
    name:string
    marks:number
   // display():void;
}

// let obj2: student ={




//     name:"Anirudha",
//     marks:60,
//     display:()=>{
//       console.log("this is a display method")  
//     }
// }

// obj2.display();
// // obj2.name = ""
// let obj3:student ={
//     name:"Anish",
//     marks:70,
//     display:()=>{
//         let a = 5;
//         console.log(a);
//         console.log(obj3.name)
//     }
// }

// // let obj4:student ={


//     name:"Abhishek",
//     marks:70
// }

// obj2.marks = 80;
// console.log(obj2);
// console.log(obj3);

/// Option , readonly

// type bookDetails = {
//     bookId: number,
//     title: string,
//     author: string,
//     category: string,
//     price: number,
//     coverFileName: string
//   }


// function add(a,b){
//     return a+b
// }

// console.log(add);

let students:student[] =[
    {
        name:"Anirudha",
        marks:70
    },
    {
        name:"Akshay",
        marks:80 
    }
]

console.log(students);
