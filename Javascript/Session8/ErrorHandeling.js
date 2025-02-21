/**
 *  try, catch , finally, throw : anything  number , boolean or string
 */
/**
 * 
    Made a connection to the database 
    I try to query few things--- error  catch the error using the catch block 
    finally block for closig the connection.
 */

// function add (a,b){
//     try{
//      throw "I am throwing an exception";
//     }catch(err){
//         console.log(err);
//     }finally{
//         console.log("This is a finally block");
//     }
// }

// function multiply(a,b){
//     console.log(a*b);
// }


// add(4,5);

// multiply(4,5);


function ThrowingExample(flag){
        if(flag){
          console.log("Flag is "+flag);
        }else{
            throw "I am throwing a error"
        }
}



function CatchingFunction(flag){
    try{
    ThrowingExample(flag);
    }catch(err){
       console.log(err);
    }
}

CatchingFunction(true);
CatchingFunction(false);



