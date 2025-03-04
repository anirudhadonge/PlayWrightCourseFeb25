/*
    class myclass{
    a;    
    constructor(a){
this.a =a
        }
    }

*/
/**
 * public(By default) --- Any entity which has a public access modifier can be accessed from outside of class
 * private
 * protect
 */
/**
 * instance Variables : properties, variable , Methods are access through the instance of the class
 * class Variables : Properites ,variables , methods that can be accessed using the classname. 
 */
//OBject Oriented Programming (OOPs)
// Abstraction
// Encapsulation
// Inhertance
// Polymorphism
class students{
    name:string
    rollNumber:number
    static principal:string
    readonly className:string = 'SectionA';
    constructor(name, rollNumber){
        this.name = name;
        this.rollNumber = rollNumber;
    }

    display():void{
        console.log(`name:${this.name} and roll number :${this.rollNumber} and the principle is ${students.principal}`);
    }

    set setName(name:string){
        this.name = name;
    }

    get getName():string{
        return this.name;
    }

    setNameFunction(name:string):void{
        this.name = name;
    }

    static staticFunction():void{
        console.log('This is a static function');
    }
}

// let anirudha = new students('Anirudha',7) ;
// //anirudha.setNameFunction()
// //anirudha.className= "sectionB"
// //anirudha = new students('anirudha',7);
// anirudha.setName = 'Akshay'
// console.log(anirudha.getName);
// anirudha.display();

let st1 = new students('Anirudha',7);

students.principal
students.staticFunction();