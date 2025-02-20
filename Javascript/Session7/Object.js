
/// I am student
let name ='Anirudha'
let rollNumber = 7
let Mark =60 
//console.log(`${name},${rollNumber},${Mark}`)

let student ={
    name :'Anirudha',
    rollNumber: 7,
    Mark :60 ,

    fun1 :function (){
        console.log("This is a function")
    },

    display:function(){
        console.log(console.log(`${this.name},${this.rollNumber},${this.Mark}`))
    },

    getName: function(){
        return this.name;
    }
}


//student.fun1()

console.log(student.getName());