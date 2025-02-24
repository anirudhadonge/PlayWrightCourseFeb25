/*
class --> is a template using which we can create object. plastic toy.

Mold of a specific shape(class) ---> Poure hot platic (liquid form)--> cools down and solidifies ---> shape of a toy(object)
*/


/**
 *  keyword called Class
 *  class <ClassName>{
 *  constructor();
 * }
 * there is no Constructor overloading. 
 * this keyword.
 */


// class human{
    
//     // constructor(){
//     //     console.log("this is a default constructor");
//     // }
//     #work;
//     constructor(name,work){
//         this.name = name
//         this.#work = work;
//         this.#display();
//     }

//     #display(){
//         console.log("name :"+this.name+" and work is "+this.#work);
//     }
// }


// let Engineer = new human("anirudha");

// Engineer.display();

// let doctor = new human("Anirudha","doctor");


// function display(){

//     console.log("name :"+this.name);
// }
// function display(name){
//     console.log("This is a overload method with: "+name);
// }

// display();

// display("Anirudha");


class human{

    constructor(name){
        this.name = name;
    }
    work(){
        console.log("Human likes to work");
    }

    sleep(){
        console.log("he likes to sleep");
    }

    display(){
        console.log('name :'+this.name);
    }
}


class Engineer extends human{

    constructor(name){
       super(name); 
    }
    work(){
        console.log("Engineer works on building new techologies");
    }

    sleep(){
        console.log("he sleep very less as he is working all the time");
    }

    // display(){
    //     console.log("This is a overload method.")
    //     this.display();
    // }
}


class ITEngineer extends Engineer{
    constructor(name){
        super(name);
    }
}

let itEngineer = new ITEngineer('Akshay');

itEngineer.display();
itEngineer.sleep();
itEngineer.work();